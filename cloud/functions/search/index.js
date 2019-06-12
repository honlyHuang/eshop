const app = require('wx-server-sdk')

const { getList } = require('./getList.js')

app.init({
  envName: 'wushufang-h36jx',
  mpAppId: 'wx22203329a468e8a1',
})

exports.main = async (event, context) => {
  const db = app.database()
  const { func, data } = event
  let res
  if (func === 'getList') {
    res = await getList(db, data)
  } 
  return {
    context,
    data: res
  }
}