const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const maidSchema = new Schema(
  {
    maid_username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },

    name: {
        type: String,
        required: true
    },

    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Review'
      }
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ]
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

maidSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

const Maid = model('Maid', maidSchema);

module.exports = Maid;
