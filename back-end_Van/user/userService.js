const User = require('./userModel');

async function getAll() {
  return await User.find();
}

async function addOne(userData) {
  return await User.create(userData);
}

async function updateOne(userId, userData) {
  return await User.findByIdAndUpdate(userId, userData, { new: true });
}

async function getOne(userId) {
  return await User.findById(userId);
}

async function deleteOne(userId) {
  return await User.findByIdAndDelete(userId);
}

async function deleteAll() {
  return await User.deleteMany();
}

module.exports = {
  addOne,
  getAll,
  updateOne,
  getOne,
  deleteOne,
  deleteAll
};
