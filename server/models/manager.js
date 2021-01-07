const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
// For findOrCreate on mongoose
const findOrCreate = require('mongoose-findorcreate');


const managerSchema = mongoose.Schema({
  emailId: { 
    type: String, 
    required: true 
  },
  name: { 
    type: String, 
  },
  profileId: {
    type: String,
  }
  
});

managerSchema.plugin(passportLocalMongoose);
managerSchema.plugin(findOrCreate);

module.exports = mongoose.model('Manager', managerSchema);
