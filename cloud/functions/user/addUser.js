async function addUser (db, userInfo) {
  const collection = db.collection('User')
  let _id = userInfo._id
  delete userInfo._id
  await collection.doc(_id).set({data: userInfo})
  return userInfo
}

exports.addUser = addUser
