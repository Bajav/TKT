import {searchMultiplePages, searchImages} from '../../Services/Unsplash/unsplash.service.js';

export const searchUnsplashImages = async (req, res) => {
    // const { query, page, perPage, orientation } = req.body;
    try {
        const images = await searchImages("hotel in london",{perPage : 200});
        res.status(200).json({ success: true, data: images });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }    
};

export const searchUnsplashImagesVariety = async (req, res) => {
    try {
        const queries = [
          "luxury hotel london",
          "hotel room london", 
          "boutique hotel",
          "hotel interior",
          "hotel lobby"
        ];
        
        const imagePromises = queries.map(query => 
          searchImages(query, { perPage: 30 })
        );
        
        const results = await Promise.all(imagePromises);
        const allImages = results.flat(); // Combines all arrays
        
        res.status(200).json({ 
          success: true, 
          data: allImages.slice(0, 200) // Get first 200
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }    
};