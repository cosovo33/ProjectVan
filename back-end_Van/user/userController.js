const userService = require('./userService');

async function getAll(req, res) {
  try {
    const users = await userService.getAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function addOne(req, res) {
  try {
    const newUser = await userService.addOne(req.body);
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateOne(req, res) {
  try {
    const updatedUser = await userService.updateOne(req.params._id, req.body);
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getOne(req, res) {
  try {
    const user = await userService.getOne(req.params._id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteOne(req, res) {
  try {
    await userService.deleteOne(req.params._id);
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteAll(req, res) {
  try {
    await userService.deleteAll();
    res.json({ message: 'All users deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  addOne,
  getAll,
  updateOne,
  getOne,
  deleteOne,
  deleteAll
};
