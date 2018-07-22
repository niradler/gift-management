const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/snappy');
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connected!")
});

const shipping_details_schema = mongoose.Schema({
    first_name: String,
    last_name:String,
    address: String,
    zip_code: String,
    city: String,
    email: String,
    phone: String,
    notes : String
});

const ShippingDetail = mongoose.model('ShippingDetail', shipping_details_schema);

module.exports = {
    ShippingDetail
};