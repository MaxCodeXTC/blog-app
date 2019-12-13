const mongodb = require("mongodb")

const connectionString = "mongodb+srv://todoAppUser:todoApp@cluster0-bnwc4.mongodb.net/blog-app?retryWrites=true&w=majority"

mongodb.connect(connectionString, 
  {useNewUrlParser: true, useUnifiedTopology: true}, 
  function(err, client) {
    module.exports = client.db()
    const app = require("./app")
    app.listen(3000, function() {
      console.log("Server is running on port 3000")
    })
})