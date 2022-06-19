const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      default: '',
      required: true,
    },
    lastName: {
      type: String,
      default: '',
      required: true,
    },
    email: {
      type: String,
      default: '',
      required: true,
    },
  },
  {
    toJSON: {
      virtuals: true
    },
    toObjects: {
      virtuals: true
    },
    timestamps: true
  }
)

const UserModel = mongoose.model('Acknowledgement', UserSchema)

module.exports = {
  model: UserModel,
  schema: UserSchema
}