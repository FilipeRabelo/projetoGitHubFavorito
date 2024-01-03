  // CLASSE QUE VAI CONTER A LOGICA DOS DADOS    // COMO OS DADOS SERÃO ESTRUTURADOS // herança

  // parte de dados
  export class Favorites {       // CRIANDO E EXPORTANDO A CLASSE //

    constructor(root){                             // root = app
      this.root = document.querySelector(root)     // procurando para exsitri o tempo todo

      this.load();     // para carregar a funcao load
    }

    load(){  // funcao para carregar os dados

      this.entradaDados = [   // ARRAY

        {
          login: "FilipeRabelo",
          name: "Filipe Rabelo",
          public_repos: "340",
          followers: "1200",
        },

        {
          login: "maybrito",
          name: "Mayk Brito",
          public_repos: "6",
          followers: "12000",
        }

      ]

    }

  }

  export class FavoritesView extends Favorites{  // CLASS E QUE VAI CRIAR A VISUALIZAÇÃO DO HTML

    constructor(root) {  // #app

      super(root);       // super é a cola q uni a classe filha (cria o link entre os dois)

      this.tbody = this.root.querySelector("table tbody");

      this.update();
      // console.log(this.root)  // this.root é a div #app //

    }

    // criando o html na FavoritesView

    update(){   // função update //

      this.removeAllTr();

      this.entradaDados.forEach( user => {  // para cada usuario quero rodar uma funcao

        const row = this.createRow()
        // console.log(row)

        row.querySelector('.user img').src = `https://github.com/${user.login}.png`;
        row.querySelector('.user img').alt = `Imagem de ${user.name}`;
        row.querySelector('.user p').textContent = user.name;
        row.querySelector('.user span').textContent = user.login;
        row.querySelector('.repositories').textContent = user.public_repos;
        row.querySelector('.followers').textContent = user.followers;

        // row.querySelector('.remove').onclick = () => {
        //   confirm('Tem certeza que deseja deletar essa linha?');         
        // }

        this.tbody.append(row)  // .append() recebe um elemento html da DOM

      })

    }

    createRow(){

      const tr = document.createElement("tr");  // TR CRIADA PELO JAVASCRIPT - DOM

      // CONTEUDO
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

      // console.log(tbody.querySelectorAll('tr'))

      this.tbody.querySelectorAll('tr')
        .forEach((tr) => {    // para cada td vai executar essa função
          // console.log(tr)
          // alert("oi")
          tr.remove()
        })

    }

  }

















