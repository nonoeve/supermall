import {request} from './request';

export function getHomeMultidata() {
  return request({
    url: 'home/multidata'
  })
}

export function getHomeData(type, page) {
  return axios({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}