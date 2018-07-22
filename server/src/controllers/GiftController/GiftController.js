const { ShippingDetail } = require('../../models');
const rp = require('request-promise');

class GiftController {

    addShipping(req, res) {
        const shippingDetail = new ShippingDetail(req.body);

        return shippingDetail.save((d) => res.json(d))
    }

    async verifyAddress(req, res) {
        const addr = req.body;
        
        const options = {
            uri: 'https://www.yaddress.net/api/Address?AddressLine1=506 Fourth Avenue Unit 1&AddressLine2=Asbury Prk, NJ&UserKey=',
            qs: {
                AddressLine1: addr.address,
                AddressLine2: `${addr.city}, ${addr.zip_code}`,
                UserKey:""
            },
            json: true
        };

        const data = await rp(options);
        
        return res.json(data);
    }

}

const giftController = new GiftController();
module.exports = giftController;