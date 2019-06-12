import Taro from '@tarojs/taro'
import { createAction } from 'redux-actions'

import { REQUEST_HOME, RECEIVE_HOME, RECEIVE_HOME_ERROR } from '../constants/home'

export const requestHome = createAction(REQUEST_HOME, () => null)
export const receiveHome = createAction(RECEIVE_HOME, (data) => data)
export const receiveHomeError = createAction(RECEIVE_HOME_ERROR, () => null)

export function fetchIndexList () {
  return async dispatch => {
    dispatch(requestHome())
    try {

      Taro.showNavigationBarLoading()
      let res = await Taro.cloud.callFunction({
        name: 'shop',
        data: {
          func: 'getInformation'
        }
      })
      if (res.result) {
        dispatch(receiveHome(res.result))
        Taro.hideNavigationBarLoading()
      } else {
        Taro.hideNavigationBarLoading()
        dispatch(receiveHomeError({}))
        await Taro.showToast({
          icon: 'none',
          title: '获取失败，请重试！'
        })
      }
      
    } catch (err) {
      console.log(err)
    }
  }
}
