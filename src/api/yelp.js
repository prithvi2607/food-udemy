import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer zUJlL0Px0J30cvoEjaimp5ttRnYBEjuFObgPP9ygOuBCTlUOzazjDiQeELYNt_BaPVPyVwfxVldtbKmnJ04KJCAyYF1XbKO7I9USPFfG5VA4eugyGgAbpRO2urEMX3Yx'
    }
})