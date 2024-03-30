/* eslint-disable accessor-pairs */
class Search extends HTMLElement {
  constructor () {
    super()
    this.shadowDOM = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
  }

  get value () {
    return this.shadowDOM.querySelector('.input-search').value
  }

  set clickEvent (event) {
    this._click = event
    this.render()
  }

  render () {
    this.shadowDOM.innerHTML = `
        <style>
        *{
            margin : 0;
            padding : 0;
            box-sizing : border-box;
        }
        :host{
            display : block;
        }
        :host .search{
            height: 300px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        :host .search input{
            border: none;
            padding: 1rem;
            font-size: 1.3rem;
            background-color: transparent;
            font-family: inherit;
            font-weight: bold;
            color: white;
        }
        
        :host .search input:focus{
            outline: 0;
            color: white;
            border-bottom: 1px solid #252B48;
        }
        
        :host .search button{
            border: none;
            color :white;
            font-family: inherit;
            background-color: #252B48;
            font-size: .9rem;
            padding: .8rem 1.8rem;
            border-radius: 999px;
            margin-left: 1rem;
            cursor: pointer;
        
            opacity: .8;
            transition: all .5s;
        }
        
        :host .search button:hover{
            opacity: 1;
        }

        @media screen and (max-width : 450px){
            
            :host .search input{
                border: none;
                padding: .9rem;
                font-size: 1rem;
            }
            
            :host .search button{
                font-size: .8rem;
                padding: .6rem 1.5rem;
            }
            
        }
        </style>


        <div class="search">
            <input class="input-search" type="text" placeholder="Masukkan Judul Buku">
            <button class="btn-cari">Cari</button>
        </div>
        `

    this.shadowDOM.querySelector('.btn-cari').addEventListener('click', this._click)
  }
}

customElements.define('search-bar', Search)

export default Search
