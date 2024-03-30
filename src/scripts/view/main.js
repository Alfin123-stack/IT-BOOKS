import Datasource from '../data/data-source.js'
import '../component/search.js'
import '../component/listbuku.js'

const main = () => {
  const daftar = document.querySelector('.judul-daftar')
  const input = document.querySelector('search-bar')
  const listbuku = document.querySelector('list-buku')

  // showBukuterbaru
  const showNewBook = async () => {
    try {
      const data = await Datasource.searchBookNew()
      renderResult(data)
    } catch (messsage) {
      renderError(messsage)
    }
  }

  // button search
  const buttonSearchClick = async () => {
    try {
      const dataparam = await Datasource.searchBookQuery(input.value)
      daftar.innerHTML = ''
      daftar.innerHTML += `<h3>Daftar Buku Yang dicari (${dataparam.total})</h3>`
      renderResult(dataparam)
    } catch (message) {
      renderError(message)
    }
  }

  // render hasil
  const renderResult = (results) => {
    listbuku.books = results
  }

  // render error
  const renderError = (message) => {
    listbuku.error(message)
  }

  // show
  showNewBook()

  // click
  input.clickEvent = buttonSearchClick
}

export default main
