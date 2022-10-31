const mongoose = require("mongoose")

const floorSchema = new mongoose.Schema({
    id: {
        type: String,
        max: 100,
	  //  required: true
    },
    count: { //number of people
        type: Number,
      //  required: true
    },
    coord_x: {
        type: Number,
      //  required: true
    },
    coord_y: {
        type: Number,
      //  required: true
    },
    coord_z: {
        type:Number,
       // required: true
    }
    

},
{timestamps:true}
)

module.exports = mongoose.model("Floor", floorSchema)