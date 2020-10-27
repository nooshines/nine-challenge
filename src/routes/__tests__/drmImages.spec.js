const request =require("supertest")
const {server} = require("../../server")
const tvShowsRequest = require("../../mock/tvShows.json")
const tvShowsBadRequest = require("../../mock/tvShowsBadRequest.json")
const expectedImagesResponse = require("../../mock/expectedDrmImages.json")
describe("drmImages Route",()=> {
 it("should return drmImages from post",async()=>{
    const response = await request(server).post("/").send(tvShowsRequest);
    expect(response.status).toEqual(200);
    expect(response.body).toEqual(expectedImagesResponse)
 })
//I was trying to test bad json request, supertest doesnt seem to be taking the pure json data, it treats like a pure javascript object .

//  it("should return 400 from post",async()=>{
//   const response = await request(server).post("/").set("Content-type","application/json").send({payload:tvShows});
//   expect(response.status).toEqual(400);
// })
})