const filterDrmImages = require("../filterDrmImages")
const {tvShows,expectedImages} = require("./mocks")

  describe("drmImages function",()=>{
    it("return array of images",()=>{
      expect(filterDrmImages(tvShows)).toEqual(expectedImages)
    })
  })