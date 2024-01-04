  // CLASSE QUE VAI CONTER A LOGICA DOS DADOS    // COMO OS DADOS SERÃO ESTRUTURADOS // herança
  // CLASSE Favorites QUE MEXE COM OS DADOS

  export class Favorites {       // CRIANDO E EXPORTANDO A CLASSE //

    constructor(root){          // CRIANDO O APP - ROOT // root = app

      this.root = document.querySelector(root)     // procurando para exsitri o tempo todo
      this.load();                                // para carregar a funcao load

    }

    load(){  // funcao para carregar os dados

      // localstore é uma api do browser  //  getItem => pegar um item  //  parse modifica o objeto
      // se JSON.parse tiver vazio -> transfoma em array 

      this.entrieDates = JSON.parse( localStorage.getItem('@github-favorites:')) || []; 

      console.log(this.entrieDates)

      this.entrieDates = [   // ARRAY    // LISTA DE USUARIOS //
        {
          login: "FilipeRabelo",
          name: "Filipe Rabelo",
          public_repos: "340",
          followers: "1200",
        },
        {
          login: "FilipeRabelo",
          name: "Filipe Rabelo",
          public_repos: "340",
          followers: "1200",
        }
      ]

    }

    // função de ordem superior 
    // higher-order function (map, filter, find, reduce...)
    // principio da imutabilidade

    delete(user){   // BOTÃO DE ESCLUIR //
      
      const filteredEntries = this.entrieDates.filter(entry => entry.login != user.login); // se false // NOVA CONSTANTE //
      console.log(filteredEntries)     

      this.entrieDates = filteredEntries; // estou limpando todo o array entrieDates ecolocando um novo array dentro do entrieDate //
      this.update()      
    }

    // guardar os dados no localstorege //



  }     /* FIM CLASSE FAVORITOS */

  
  export class FavoritesView extends Favorites{  // CLASS E QUE VAI CRIAR A VISUALIZAÇÃO DO HTML

    constructor(root) {  // #app  // this.root é a div #app //

      super(root);       // super é a cola q uni a classe filha (cria o link entre os dois)

      this.tbody = this.root.querySelector("table tbody");
      this.update();
      // console.log(this.root)  
    }

    // criando o html na FavoritesView  // função update //

    update(){   

      this.removeAllTr();
      this.entrieDates.forEach( user => {  // para cada usuario quero rodar uma funcao

        const row = this.createRow()
        // console.log(row)

        row.querySelector('.user img').src             = `https://github.com/${user.login}.png`;
        row.querySelector('.user img').alt             = `Imagem de ${user.name}`;
        row.querySelector('.user p').textContent       = user.name;
        row.querySelector('.user span').textContent    = user.login;
        row.querySelector('.repositories').textContent = user.public_repos;
        row.querySelector('.followers').textContent    = user.followers;

        row.querySelector('.remove').onclick = () => {  /* onclick para qndo houver somente um evento */
        
          const isOk = confirm('Tem certeza que deseja deletar essa linha?');

          if(isOk){  /* se for true */
            this.delete(user);
          }
        }

        this.tbody.append(row)  // .append() recebe um elemento html da DOM
      })

    }

    
    createRow(){   /* CRIANDO AS LINHAS */

      const tr = document.createElement("tr");  // TR CRIADA PELO JAVASCRIPT - DOM

      // CONTEUDO  // tBody
      tr.innerHTML = `
             
        <td class="user">
          <img src="https://github.com/FilipeRabelo.png" alt="Imagem de Filipe Rabelo"/>
          <a href="https://github.com/FilipeRabelo" target="_blank">
           <p></p>
           <span></span>
          </a>
        </td>
     
        <td class="repositories">100</td><!-- COLUNAS - td -->
        <td class="followers">65655454</td>        
        
        <td>
          <button class="remove">&times</button>
        </td>        
        
      `
      return tr;    // tr.innerHTML = content    // para colocar o conteudo dentro do tr
    }

    removeAllTr(){   // função remove //

      this.tbody.querySelectorAll('tr').forEach((tr) => {    // para cada td vai executar essa função
        // console.log(tr)
        // alert("oi")
        tr.remove()
      })

      // console.log(tbody.querySelectorAll('tr'))
    }

  }

















