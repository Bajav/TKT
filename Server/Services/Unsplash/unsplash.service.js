// unsplashService.js
import { createApi } from 'unsplash-js';

export const unsplash = createApi({
  accessKey: process.env.UNSPLASH_API_KEY,
});

export const searchImages = async (query, options = {}) => {
  const { page = 1, perPage = 200 } = options;
  
  try {
    const result = await unsplash.search.getPhotos({
      query,
      page,
      perPage,
      orientation: options.orientation,
    });

    if (result.errors) {
      throw new Error(result.errors[0]);
    }

    return result.response.results;
  } catch (error) {
    console.error('Error searching images:', error);
    throw error;
  }
};

export const searchMultiplePages = async (query, totalImages = 200, options = {}) => {
  const perPage = 30; // Unsplash max per page
  const numPages = Math.ceil(totalImages / perPage);
  
  try {
    const requests = [];
    
    for (let page = 1; page <= numPages; page++) {
      requests.push(
        unsplash.search.getPhotos({
          query,
          page,
          perPage,
          orientation: options.orientation,
        })
      );
    }
    
    const results = await Promise.all(requests);
    
    // Check for errors
    const errors = results.filter(r => r.errors);
    if (errors.length > 0) {
      throw new Error(errors[0].errors[0]);
    }
    
    // Combine all results
    const allPhotos = results.flatMap(r => r.response.results);
    
    // Return only the requested amount
    return allPhotos.slice(0, totalImages);
  } catch (error) {
    console.error('Error searching multiple pages:', error);
    throw error;
  }
};