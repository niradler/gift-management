class AdminController {

    async getShippingAddress(req, res) {

        return res.json({
            address:[
                {
                    first_name: "fkdls",
                    last_name: "dsfs",
                    address: "ramt sdsd 70",
                    zip_code: "91640",
                    city: "yavne",
                    email: "nir@nir.com",
                    phone: "052314644",
                    notes : "please come around 10:00 am"
                }
            ]
        })
    }

}

const adminController = new AdminController();
module.exports = adminController;