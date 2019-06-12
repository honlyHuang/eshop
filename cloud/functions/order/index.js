const app = require('wx-server-sdk')

const { getBalance } = require('./getBalance.js')
const { addOrder } = require('./addOrder.js')
const { getOrder } = require('./getOrder.js')
const { cancelOrder } = require('./cancelOrder.js')
const { getOrderDetail } = require('./getOrderDetail.js')

app.init({
  envName: 'wushufang-h36jx',
  mpAppId: 'wx22203329a468e8a1',
})

async function main (event, context) {
  const db = app.database()
  const { func, data } = event
  let res
  if (func === 'getBalance') {
    res = await getBalance(app, data)
  } else if (func === 'addOrder') {
    res = await addOrder(db, data)
  } else if (func === 'getOrder') {
    res = await getOrder(db, data)
  } else if (func === 'getOrderDetail') {
    res = await getOrderDetail(db, data)
  } else if (func === 'cancelOrder') {
    res = await cancelOrder(db, data)
  }

  return {
    data: res
  }
}

exports.main = main

// // 测试的函数
// async function test (params) {
//   const res = await main({
//     func: 'getOrder',
//     data: {
//       _id: 'oFQSH5MekinNSc_yqH9dNlmKh6vI'
//     }
//   })

//   console.log(res)
// }

// test()
