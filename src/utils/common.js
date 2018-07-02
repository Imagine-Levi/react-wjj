import axios from 'axios';

export default function get(url) {
  let isDebug = false,
    preUrl = '';
  axios.get(url).then((res) => {
    console.log('res:' + res);
  }).catch((err) => {
    console.log('error:' + err)
  });
}
