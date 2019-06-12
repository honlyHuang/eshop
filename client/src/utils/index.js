import Taro from '@tarojs/taro'
import { getGlobalData } from '../constants/globalData'

async function getUserInfo () {
  const userData = getGlobalData('userData')
  if (userData) {
    return userData
  }
  try {
    const userData1 = await Taro.getUserInfo()
    return userData1
  } catch (err) {
    console.log(err)
    console.log('微信登录或用户接口故障')
    return {}
  }
}

async function getOpenId () {
  let openId
  try {
    openId = Taro.getStorageSync('taro_demo_openid')
  } catch (error) {
    console.log(error)
  }
  if (openId) {
    return openId
  } else {
    const res = await Taro.cloud.callFunction({
      name: 'user',
      data: {
        func: 'getOpenId'
      }
    })
    openId = res.result.data.openId
    Taro.setStorage({key: 'taro_demo_openid', data: openId})
    return openId
  }
}

async function getIsAuth () {
  const openid = await getOpenId()
  let {userInfo} = await getUserInfo()
  let isAuth = false
  if (userInfo) {
    userInfo.isAuth = true
    userInfo._id = openid
    isAuth = true
  } else {
    userInfo = {
      _id: openid,
      isAuth: false
    }
  }
  await Taro.cloud.callFunction({
    name: 'user',
    data: {
      func: 'addUser',
      data: userInfo
    },
    success: (res) => {
      console.log('addUser success:', res)
    },
    fail: (res) => {
      console.log('addUser fail:', res)
    }
  })

  return isAuth
}

export {
  getUserInfo,
  getOpenId,
  getIsAuth
}
