const vanService = require('./vanService');

async function getAll(req, res) {
  try {
    const vans = await vanService.getAllVans();
    res.json(vans);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function addOne(req, res) {
  try {
    const newVan = await vanService.addOneVan(req.body);
    res.json(newVan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateOne(req, res) {
  try {
    const updatedVan = await vanService.updateOneVan(req.params._id, req.body);
    res.json(updatedVan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getOne(req, res) {
  try {
    const van = await vanService.getOneVan(req.params._id);
    res.json(van);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteOne(req, res) {
  try {
    await vanService.deleteOneVan(req.params._id);
    res.json({ message: 'Van deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteAll(req, res) {
  try {
    await vanService.deleteAllVans();
    res.json({ message: 'All vans deleted successfully' });
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
