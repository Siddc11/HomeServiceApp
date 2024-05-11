import { request, gql } from 'graphql-request';

const URL = "https://api-ap-south-1.hygraph.com/v2/clvxktxdt08su07w5x4c5k20l/master";

const getSlider = async () => {
    const query = gql`
        query GetSlider {
            sliders {
                id
                image {
                    url
                }
            }
        }
    `;

    try {
        const result = await request(URL, query);
        return result;
    } catch (error) {
        console.error("Error fetching slider data:", error);
        return null;
    }
};

const getCategory = async () => {
    const query = gql`
    query GetCategory {
        categories {
          id
          name
          icons {
            url
          }
        }
      }
      
    `;
    try {
        const result = await request(URL, query);
        return result;
    } catch (error) {
        console.error("Error fetching slider data:", error);
        return null;
    }
};

export default {
    getSlider,
    getCategory
};
