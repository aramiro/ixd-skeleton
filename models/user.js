var mongoose = require('mongoose'), 
	schema = mongoose.Schema
	bcrypt = require(bcrypt);

const MongoClient = require('mongodb').MongoClient;

/*const uri = "mongodb+srv://admin:cogs120cse170@roommate-reminder-vfiu5.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});*/

var usersSchema = new userersSchema({
	username: { type: String, required: true, index: {unique: true}},
	password: {type: String, required: true}
});

usersSchema.pre(save, function(next) {
	var user = this;
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

exports.module = mongoose.model(User, userschema);