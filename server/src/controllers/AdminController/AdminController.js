const { ShippingDetail } = require('../../models');

class AdminController {

     getShippingAddress(req, res) {

        return ShippingDetail.find({}).then((d) => res.json(d));
    }

}

const adminController = new AdminController();
module.exports = adminController;