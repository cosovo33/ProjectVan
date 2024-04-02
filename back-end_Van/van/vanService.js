const Van = require('./vanModel');

class VanService {
  async getAllVans() {
    return await Van.find();
  }

  async addOneVan(vanData) {
    return await Van.create(vanData);
  }

  async updateOneVan(vanId, vanData) {
    return await Van.findByIdAndUpdate(vanId, vanData, { new: true });
  }

  async getOneVan(vanId) {
    return await Van.findById(vanId);
  }

  async deleteOneVan(vanId) {
    return await Van.findByIdAndDelete(vanId);
  }

  async deleteAllVans() {
    return await Van.deleteMany();
  }
}

module.exports = new VanService();
