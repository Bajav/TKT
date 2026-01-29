// unsplashService.js
import { createApi } from 'unsplash-js';

export const unsplash = createApi({
  accessKey: process.env.UNSPLASH_API_KEY,
});

export const searchImages = async (query, options = {}) => {
  const { page = 1, perPage = 10 } = options;
  
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