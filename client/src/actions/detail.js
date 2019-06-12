import Taro from '@tarojs/taro'
import { createAction } from 'redux-actions'
import { operate } from '../constants/cart'
import { getOpenId } from '../utils/index'
import {
  REQUEST_DETAIL_CART,
  RECEIVE_DETAIL_CART,
  REQUEST_DETAIL_SKU,
  RECEIVE_DETAIL_SKU,
  REQUEST_DETAIL_ADD_CART,
  RECEIVE_DETAIL_ADD_CART
} from '../constants/detail'

const aMap = {
  REQUEST_DETAIL_CART: createAction(REQUEST_DETAIL_CART, data => data),
  RECEIVE_DETAIL_CART: createAction(RECEIVE_DETAIL_CART, data => data),
  REQUEST_DETAIL_SKU: createAction(REQUEST_DETAIL_SKU, data => data),
  RECEIVE_DETAIL_SKU: createAction(RECEIVE_DETAIL_SKU, data => data),
  REQUEST_DETAIL_ADD_CART: createAction(REQUEST_DETAIL_ADD_CART, data => data),
  RECEIVE_DETAIL_ADD_CART: createAction(RECEIVE_DETAIL_ADD_CART, data => data)
}

export function fetchCart () {
  return async (dispatch, getState) => {
    dispatch(aMap[REQUEST_DETAIL_CART]())

    let res
    const _openId = await getOpenId()
    res = await Taro.cloud.callFunction({
      name: 'cart',
      data: {
        func: 'getCart',
        data: {
          _id: _openId
        }
      }
    }).catch(err => {
      console.log(err)
      dispatch(aMap[RECEIVE_DETAIL_CART](getState().detail))
    })

    const data = res.result.data
    if (data.cartNum >= 0) {
      dispatch(aMap[RECEIVE_DETAIL_CART](data))
    } else {
      dispatch(aMap[RECEIVE_DETAIL_CART](getState().detail))
      data.code !== 3 && Taro.showToast({
        icon: 'none',
        title: '服务器繁忙'
      })
    }
  }
}

export function fetchSkuData (skuId) {
  return async dispatch => {
    try {
      dispatch(aMap[REQUEST_DETAIL_SKU]())

      let res
      res = await Taro.cloud.callFunction({
        name: 'shop',
        data: {
          func: 'getSku',
          data: skuId
        }
      })

      if (res.result) {
        let skuData = res.result.data
        dispatch(aMap[RECEIVE_DETAIL_SKU](skuData))
      } else {
        Taro.redirectTo({url: '/pages/404/404'})
      }

    } catch (err) {
      console.log(err)
      Taro.redirectTo({url: '/pages/404/404'})
    }
  }
}

export function fetchAddCart (skus) {
  return async (dispatch, getState) => {
    dispatch(aMap[REQUEST_DETAIL_ADD_CART]())

    let res
    const _openId = await getOpenId()
    res = await Taro.cloud.callFunction({
      name: 'cart',
      data: {
        func: 'editCart',
        data: {
          _id: _openId,
          type: operate['ADD'],
          skus
        }
      }
    }).catch(err => {
      console.log(err)
      dispatch(aMap[RECEIVE_DETAIL_ADD_CART](getState().detail))
    })

    const data = res.result.data
    if (data.length !== 0) {
      dispatch(aMap[RECEIVE_DETAIL_ADD_CART](data))
      Taro.showToast({
        title: '添加购物车成功'
      })
    } else {
      dispatch(aMap[RECEIVE_DETAIL_CART](getState().detail))
      data.code !== 3 && Taro.showToast({
        icon: 'none',
        title: '服务器繁忙'
      })
    }
  }
}

