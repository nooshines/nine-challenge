const express = require("express")
const cors = require("cors");
const bodyParser = require("body-parser")


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


module.exports={server:app};


