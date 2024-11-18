import { Schema, model, models } from "mongoose"
import { type } from "os"

const PropertySchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        street: String,
        city: String,
        state: String,
        zipcode: String
    },
    beds: {
        type: String,
        required: true
    },
    bath: {
        type: String,
        required: true
    },
    square_feets: {
        type: String,
        required: true
    },
    amenities: [
        {
            type: String
        }
    ],
    rates: {
        "weekly": String,
        "Monthly": String,
        "Nightly": String
    },
    "seller_info": {
        "name": String,
        "email": String,
        "phone": String
    },
    images: [{ type: String }],
    "is_featured": {
        type: Boolean,
    }
},
    { timestamps: true }
)
const Property = models.User || model("User", PropertySchema)
export default Property