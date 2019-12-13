const dotenv = require("dotenv").config()
const mongodb = require("mongodb")

mongodb.connect(process.env.CONNECTION_STRING, 
  {useNewUrlParser: true, useUnifiedTopology: true}, 
  function(err, client) {
    module.exports = client.db()
    const app = require("./app")
    app.listen(3000, function() {
      console.log("Server is running on port 3000")
    })
})