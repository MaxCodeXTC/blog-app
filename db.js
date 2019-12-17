const dotenv = require("dotenv").config()
const mongodb = require("mongodb")

mongodb.connect(process.env.CONNECTION_STRING, 
  {useNewUrlParser: true, useUnifiedTopology: true}, 
  function(err, client) {
    module.exports = client
    const app = require("./app")
    app.listen(process.env.PORT, () => {
      console.log("Server is running on port 3000")
    })
})