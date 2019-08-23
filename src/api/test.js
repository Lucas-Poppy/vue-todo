import axios from 'axios'
export default {
  findAll (callback) {
    axios.get('http://localhost:20080/api/test')
      .then(res => {
        console.log(res.data)
        callback(res.data)
      })
  }
}
