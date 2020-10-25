const filterDrmImages =(tvShows)=>{
  const images =[];
  tvShows.forEach( tvShow => {
    const {drm,episodeCount,image, slug,title} = tvShow ;
    if (drm && episodeCount>0 && image && slug && title){
      images.push({image:image.showImage,slug,title})
    }
  });
  return images 
}

module.exports = filterDrmImages ;

