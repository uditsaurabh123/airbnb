import { Schema, model, models } from "mongoose"

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, "Email not in database"],
        required: [true, "email is required"]
    },
    username: {
        type: String,
        required: [true, "username is required"]
    },
    image: {
        type: String,

    },
    adhaarCard: {
        type: String,
        required: true
    },
    bookmarks: [{
        type: Schema.Types.ObjectId,
        ref: "Property"
    }]
},
    { timestamps: true }
)
const User = models.User || model("User", UserSchema)
export default User