import axios from 'axios'

class Datasource {
  static async searchBookNew () {
    try {
      const response = await axios.get('https://api.itbook.store/1.0/new')

      return response.data.books
    } catch {
      return 'error'
    }
  }

  static async searchBookQuery (value) {
    try {
      const response = await axios.get(`https://api.itbook.store/1.0/search/${value}`)

      if (response.data) {
        return response.data.books
      }
    } catch {
      return `${value} is not found`
    }
  }
}

export default Datasource
