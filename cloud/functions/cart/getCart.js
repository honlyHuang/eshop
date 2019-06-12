async function getCart (db, data) {
  const { _id } = data
  const cartColl = db.collection('Cart')
  let cartData = {
    data: {
      _id,
      cartNum: 0,
      totalPrice: 0,
      cartInfo: [],
      shopMap: {}
    }
  }

  const res = await cartColl.where({ _id }).get()
  if (res.data.length === 0) {
    await cartColl.add(cartData)
  } else {
    cartData = res.data[0]
  }
  return cartData
}

exports.getCart = getCart
