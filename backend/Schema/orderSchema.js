const mongoose = require('mongoose')
const { Schema } = mongoose

const orderRowSchema = mongoose.Schema({
    
    product: mongoose.Schema.Types.ObjectId, quantity: Number 
    
    })

const orderSchema = new Schema({
  user:       { type: mongoose.Types.ObjectId },
  orderRows:    { type: [orderRowSchema] }
})

module.exports = mongoose.model('Order', orderSchema)

// const mongoose = require('mongoose')
// const { Schema } = mongoose;


// const orderRowSchema = new Schema({
//     product:        {type: Schema.Types.ObjectId, ref: 'Product' , required: true},
//     count:          {type: Number}
// })

// const orderSchema = new Schema({
//     user:        {type: Schema.Types.ObjectId, ref: 'User' , required: true},
//     orderRow:  {type: [orderRowSchema], required: true}

// })




// module.exports = mongoose.model('Order', orderSchema)