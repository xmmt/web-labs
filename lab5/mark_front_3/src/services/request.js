import axios from 'axios';

export default {
  req() {
    return axios.create({
      baseURL: 'http://localhost:3000'
    });
  },
  fetch () {
    return this.req().get('mark');
  },
  create (params) {
    return this.req().post('mark', params);
  },
  get (params) {
    return this.req().get(`mark/${params.id}`);
  },
  update (params) {
    return this.req().put(`mark/${params.id}`, params);
  },
  delete (id) {
    return this.req().delete(`mark/${id}`);
  }
}
