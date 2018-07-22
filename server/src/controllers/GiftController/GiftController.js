class GiftController {

    async addShipping(req, res) {

        return res.json({id: 1})
    }

}

const giftController = new GiftController();
module.exports = giftController;