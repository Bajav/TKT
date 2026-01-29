import {searchImages} from '../../Services/Unsplash/unsplash.service.js';

export const searchUnsplashImages = async (req, res) => {
    // const { query, page, perPage, orientation } = req.body;
    try {
        const images = await searchImages("hotel in london",{perPage : 20});
        res.status(200).json({ success: true, data: images });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }    
};