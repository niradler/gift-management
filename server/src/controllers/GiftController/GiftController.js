const { ShippingDetail } = require('../../models');

class GiftController {

    async addShipping(req, res) {
        const shippingDetail = new ShippingDetail(req.body);
        
        return shippingDetail.save((d) => res.json(d))
    }

}

const giftController = new GiftController();
module.exports = giftController;