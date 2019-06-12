async function getSku (db, skuId) {
  const commColl = db.collection('Commodity')
  const res = await commColl.doc(skuId).get()
  console.log(res)
  return res.data
}

exports.getSku = getSku
