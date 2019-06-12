import Taro, { Component } from '@tarojs/taro'
import '@tarojs/async-await'
import { View, Image, ScrollView } from '@tarojs/components'
import classnames from 'classnames'
import { connect } from '@tarojs/redux'

import './index.scss'
import SearchInto from '../../components/search/searchInto'
import Modal from '../../components/gb/modal/modal'
import { jumpUrl } from '../../utils/util'
import { getUserInfo, getIsAuth } from '../../utils/index'
import { setGlobalData } from '../../constants/globalData'
import { fetchIndexList } from '../../actions/home'

class Index extends Component {
  config = {
    navigationBarTitleText: 'eshop',
    enablePullDownRefresh: true,
    backgroundTextStyle: 'dark',
    disableScroll: true
  }
 
  
  constructor () {
    super(...arguments)
    this.state = {
      shouldIndexHidden: false,
      showAuthModal: false
    }
    this.env = process.env.TARO_ENV
  }

  onGotoPage (venderId) {
    jumpUrl(`/pages/shop/shop?venderId=${venderId}`)
  }

  onShareAppMessage () {
    const home = this.props.homeData
    let pages = Taro.getCurrentPages()
    let page = pages[pages.length - 1]
    let path = `${page.route}?id=${page.options.id}`
    let imageUrl = home.floorData && home.floorData && home.floorData.floors[0] ? home.floorData.floors[0].items[0].image : ''
    return {
      title: 'Taro商城开发样例',
      path,
      imageUrl,
      success: function () {
        Taro.showToast({
          title: '转发成功！',
          icon: 'success'
        })
      },
      fail: function () {
        Taro.showToast({
          title: '转发失败！',
          icon: 'none'
        })
      }
    }
  }

  hideAuthModal () {
    this.setState({
      showAuthModal: false
    })
    Taro.setStorage({key: 'isHomeLongHideAuthModal', data: true})
  }

  processAuthResult (userData) {
    Taro.setStorage({key: 'isHomeLongHideAuthModal', data: true})
    if (userData.userInfo) {
      setGlobalData('userData', userData)
    }
    this.setState({
      showAuthModal: false
    })
    getIsAuth()
  }

  async onPullDownRefresh () {
    if (this.state.shouldIndexHidden) {
      Taro.stopPullDownRefresh() // 停止下拉刷新
    } else {
      await this.props.onFetchIndexList()
      Taro.stopPullDownRefresh() // 停止下拉刷新
    }
  }

  componentWillMount () {
    // 填充首页的数据
    this.props.onFetchIndexList()
  }

async componentDidMount () {
   const userData = await getUserInfo()
    Taro.getStorage({
      key: 'isHomeLongHideAuthModal',
      success: (res) => {
        const isHomeLongHideAuthModal = res.data
        let showAuthModal
        if (!userData && !this.state.showAuthModal && !isHomeLongHideAuthModal) {
          showAuthModal = true
        } else {
          showAuthModal = false
        }
        this.setState({
          showAuthModal
        })
      },
      fail: () => {
        let showAuthModal
        if (!userData || !this.state.showAuthModal) {
          showAuthModal = true
        } else {
          showAuthModal = false
        }
        this.setState({
          showAuthModal
        })
      }
    }).catch(()=> {

    })
    getIsAuth()
  }

  render () {
    const { shouldIndexHidden, showAuthModal } = this.state
    const { floorData = [] } = this.props.homeData
    const indexClassNames = classnames('container', 'index', {
      hidden: shouldIndexHidden
    })
    const floorList = floorData.map(item => {
      return {
        className: 'index_item',
        venderId: item.venderId,
        image: item.image
      }
    })
    return (
      <View className={indexClassNames}>
        <View className='index-search_into'>
          <SearchInto placeholder='搜索框' type='index' />
        </View>
        <ScrollView
          scrollY
          className='index_list'
        >
          {floorList.map((floor, index) => {
            return (
              <View key={index} className={floor.className} onClick={this.onGotoPage.bind(this, floor.venderId)}>
                <Image mode='widthFix' className='index_item_img' src={floor.image} lazyLoad />
              </View>
            )
          })}
        </ScrollView>
        {showAuthModal &&
        <Modal
          title='授权提示'
          contentText='TARO商城请求获取授权信息，以便记录您的订单'
          onCancelCallback={this.hideAuthModal.bind(this)}
          onConfirmCallback={this.processAuthResult.bind(this)}
          isAuth={true}
        />
        }
      </View>
    )

  }
}

export default connect(({home}) => ({
  homeData: home
}), (dispatch) => ({
  onFetchIndexList () {
    dispatch(fetchIndexList())
  }
}))(Index)
