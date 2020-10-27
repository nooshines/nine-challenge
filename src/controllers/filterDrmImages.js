const filterDrmImages =(tvShows)=>{
  return tvShows.reduce((acc,tvShow)=>{
    const {drm,episodeCount,image, slug,title} = tvShow ;
  if (drm && episodeCount>0 && image && slug && title){
          acc.push({image:image.showImage,slug,title})
  }
          return acc;
  },[])
}


module.exports = filterDrmImages ;

