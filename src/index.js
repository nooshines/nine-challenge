const {server} =require("./server")
//env
require("dotenv").config();

//variables
const port = process.env.PORT || 3000;

server.listen(port, ()=>{ 
  console.log(`listening to port ${port}`)
})


