import Taro from '@tarojs/taro'
import { createAction } from 'redux-actions'

import {
  REQUEST_SHOP,
  RECEIVE_SHOP
} from '../constants/shop'

export const actionMap = {
  shopRequest: createAction(REQUEST_SHOP),
  shop: createAction(RECEIVE_SHOP, (data) => data)
}

export function fetchShopData (data) {
  const venderId = data.venderId
  return async dispatch => {
    try {
      dispatch(actionMap['shopRequest']())

      let res
      res = await Taro.cloud.callFunction({
        name: 'shop',
        data: {
          func: 'getShop',
          data: venderId
        }
      })

      if (res.result) {
        let shopData = res.result.data
        dispatch(actionMap['shop'](shopData))
      } else {
        Taro.redirectTo({url: '/pages/404/404'})
      }

    } catch (err) {
      console.log(err)
      Taro.redirectTo({url: '/pages/404/404'})
    }
  }
}
