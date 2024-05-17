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
    const query2 = gql`
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
        const result = await request(URL, query2);
        return result;
};

const getBusinessList = async () => {
    const query2 = gql`
    query getBusinessList {
        businessLists {
          id
          name
          email
          contactPerson
          category {
            name
          }
          address
          about
          images {
            url
          }
        }
      }
      
    `;
        const result = await request(URL, query2);
        return result;
};

const getBusinessListByCategory = async (category) => {
  const query2 = gql`
  query getBusinessList {
    businessLists(where: {category: {name: "`+category+`"}}) {
      id
      name
      email
      contactPerson
      category {
        name
      }
      address
      about
      images {
        url
      }
    }
  }  
  `;
      const result = await request(URL, query2);
      return result;
};

const createBooking = async (data) => {
  const mutationQuery = gql`
  mutation createBooking {
    createBooking(
      data: {bookingStatus: Booked,
         businessList: {connect: {id: "`+data.businessId+`"}},
          date: "`+data.date+`",
           time: "`+data.time+`",
            userEmail: "`+data.userEmail+`",
             userName: "`+data.userName+`"
            }
    ) {
      id
    }
    publishManyBookings(to: PUBLISHED) {
      count
    }
  }
  
    
  `;
      const result = await request(URL, mutationQuery);
      return result;
};

const getUserBooking = async (userEmail) => {
  const query2 = gql`
  query getUserBookings {
    bookings(orderBy: updatedAt_DESC, where: {userEmail: "`+userEmail+`"}) {
      time
      userEmail
      userName
      bookingStatus
      date
      id
      businessList {
        id
        images {
          url
        }
        name
        address
        contactPerson
        email
        about
      }
    }
  }
  
  `;
      const result = await request(URL, query2);
      return result;
};


export default {
    getSlider,
    getCategory,
    getBusinessList,
    getBusinessListByCategory, 
    createBooking,
    getUserBooking  
};
