import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 4953531c149fc95e46d04dee41c82baf3aca9afcdd9296444ac743c42f5e5bd4',
      }
})

