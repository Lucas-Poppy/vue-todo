import axios from 'axios'
export default {
  async list () {
    const res = await axios.get('http://127.0.0.1:10080/api/index')
      .then(response => {
        return response.data.lists
      })
      .catch(error => console.log(error))
    return res
  },
  async store (todo) {
    const res = await axios.post('http://127.0.0.1:10080/api/store', todo)
      .then(response => {
        return response.data
      })
      .catch(error => console.log(error))
    return res
  },
  async destroy (id) {
    const res = await axios.delete(`http://127.0.0.1:10080/api/destroy/${id}`)
      .then(response => {
        return response.data
      })
      .catch(error => console.log(error))
    return res
  },
  async update (todo) {
    const res = await axios.post(`http://127.0.0.1:10080/api/update/${todo.id}`, todo)
      .then(response => {
        return response.data
      })
      .catch(error => console.log(error))
    return res
  },
  async doing (id) {
    const res = await axios.put(`http://127.0.0.1:10080/api/doing/${id}`)
      .then(response => {
        return response.data
      })
      .catch(error => console.log(error))
    return res
  },
  async done (id) {
    const res = await axios.put(`http://127.0.0.1:10080/api/done/${id}`)
      .then(response => {
        return response.data
      })
      .catch(error => console.log(error))
    return res
  }
}
