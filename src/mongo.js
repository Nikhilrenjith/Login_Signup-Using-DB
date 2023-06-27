const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

mongoose
  .connect(
    "mongodb+srv://nikhilrenjith4:Nikhil123@cluster0.4sccmx3.mongodb.net/"
  )
  .then(() => {
    console.log("mongoose connected");
  })
  .catch((e) => {
    console.log("failed");
  });

const logInSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const LogInCollection = new mongoose.model("creds", logInSchema);

module.exports = LogInCollection;
