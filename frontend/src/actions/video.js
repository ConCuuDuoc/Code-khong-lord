import axios from 'axios';

require("dotenv").config();

export const getVideoAPI = (query_real) => async dispatch => {
    try {
        // Perform a search query
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL_VIDEO}/api-video/search/`,
          {
            params: {
              query: query_real,
            },
          }
        );
        if (response.data && response.data.videos) {
          return response
        }
      } catch (error) {
        console.error("Error fetching videos from YouTube:", error);
      }
};