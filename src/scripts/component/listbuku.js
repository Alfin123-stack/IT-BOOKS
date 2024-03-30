class Listbuku extends HTMLElement {
  constructor () {
    super()
    this.shadowDOM = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
  }

  // eslint-disable-next-line accessor-pairs
  set books (value) {
    this._books = value
    this.render()
  }

  error (message) {
    this.shadowDOM.innerHTML = ''
    this.shadowDOM.innerHTML += `<h1>${message}<h1>`
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
                width: 100%;
            
                display: flex;
                justify-content: space-between;
                flex-wrap:wrap;
            }

            :host a{
                text-decoration : none;
                color : white;
                width : 30%;
            }
            
            :host .card-buku{
                margin-top: 2rem;
                background-image: linear-gradient( #252B48, rgb(9, 11, 40) );
                width: 100%;
                height: 300px;
                border-radius: 50px;
                padding: 1rem;
            
                display: flex;
                justify-content: space-around;
                align-items: center;
                cursor: pointer;
            
                transition: .5s;
            }
            
            :host .card-buku:hover{
                transform: scale(1.1);
            }
            
            .head-card {
                width: 40%;
                height: 100%;
            }
            
            .head-card img{
                object-fit: contain;
                object-position: center;
                width: 100%;
                height: 100%;
            
                transition: .5s;
            }
            .card-buku:hover img{
                transform: scale(1.5);
            }
            
            .body-card {
                width: 50%;
                text-align: center;
                letter-spacing: 1px;
            }
            
            .body-card .judul-buku{
                font-weight: 900;
                font-size: 1rem;
                margin-bottom: 1.5rem;
            }
            
            .body-card .penulis-buku{
                margin-bottom: 1.5rem;
                font-size: .9rem;
                opacity: .5;
            
                transition: .5s;
            }
            .penulis-buku:hover{
                opacity: 1;
            }
            
            .body-card .harga-buku{
                padding: .5rem 1rem;
                font-size: .9rem;
                text-decoration: none;
                color: black;
                background-color: white;
                font-weight: bold;
                border-radius: 999px;
                opacity: .5;
            
                transition: .5s;
            }
            .harga-buku:hover{
                opacity: 1;
            }    
            
            @media screen and (max-width : 768px){
                :host{
                    justify-content: center;
                    flex-direction: column;
                }
                :host a{
                    width : 100%;
                }

                :host .card-buku{
                    flex-direction : column;
                }
               
                .head-card {
                    width: 40%;
                }
                
                .head-card img{
                    width: 100%;

                }
                .card-buku:hover img{
                    transform: scale(1);
                }
                
                .body-card {
                    width: 100%;
                }
                
                .body-card .judul-buku{
                    font-size: .9rem;
                }
                
                .body-card .penulis-buku{
                    font-size: .8rem;
                }
                
                .body-card .harga-buku{
                    font-size: .8rem;
                }
                
            }

            @media screen and (max-width: 500px){
                :host{
                    row-gap : 1rem;
                }
                .head-card {
                    width: 40%;
                }
            }

            @media screen and (min-width : 500px) and (max-width: 700px){
                :host{
                    row-gap : 2rem;
                }
               
                .head-card {
                    width: 30%;
                }
            }

            @media screen and (min-width : 700px) and (max-width: 768px){
                :host{
                    row-gap : 3rem;
                }
               
                .head-card {
                    width: 25%;
                }
            }

            @media screen and (min-width : 768px) and (max-width: 992px){
                :host{                    
                    column-gap : .5rem
                }
    
                :host a{
                    width : 48%;
                }
                
            }


        
        </style>
        `

    this._books.forEach(ele => {
      const link = document.createElement('a')
      link.setAttribute('href', ele.url)
      link.setAttribute('target', '_blank')

      link.innerHTML = `
            <div class="card-buku">
                <div class="head-card">
                    <img src="${ele.image}" alt="">
                </div>
                <div class="body-card">
                    <p class="judul-buku">${ele.title}</p>
                    <p class="penulis-buku">
                        ${ele.isbn13}
                    </p>
                    <a href="" class="harga-buku">${ele.price}</a>
                </div>
            </div>
            `
      this.shadowDOM.append(link)
    })
  }
}

customElements.define('list-buku', Listbuku)

export default Listbuku
