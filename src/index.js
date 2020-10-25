const express = require("express")
const cors = require("cors");
const bodyParser = require("body-parser")

//env
require("dotenv").config();


//variables
const port = process.env.PORT || 3000;

//setup express app
const app = express();

//routes
const drmImages = require("./routes/drmImages")


//middleware
app.use(cors());
//check for json validity
app.use((req, res, next) => {
  bodyParser.json()(req, res, err => {
      if (err) {
          return res.status(400).send({error: "Could not decode request: JSON parsing failed"}); 
      }
      next();
  });
});

//routes
app.use("/",drmImages);


app.listen(port, ()=>{ 
  console.log(`listening to port ${port}`)
})

