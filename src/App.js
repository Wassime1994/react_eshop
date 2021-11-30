import React, { Component } from 'react'
import cocaImage from "./components/Coca.png";
import fantaImage from "./components/Fanta.png"
import swepsImage from "./components/Sweps.png"
import Article from './Article'
import Panier from './components/Panier';
console.log()
let index =1


export default class App extends Component {

  state = {
    argent: 20,
    panier: [],
    articles: [       // articles est un tableau qui comporte 3 objets (3 boissons)
      {
        id: 1,
        nom: "Coca Cola",
        prix: 1,
        stock: 5,
        lien: cocaImage
      },
      {
        id: 2,
        nom: "Fanta",
        prix: 1.5,
        stock: 5,
        lien: fantaImage
      },
      {
        id: 3,
        nom: "Ice tea",
        prix: 2,
        stock: 5,
        lien: swepsImage
      },
    ],

  }

  changePrix =(prix,id) =>{
    
     this.state.articles.map((el,index)=>{
      if(el.id== id && el.stock>0 && this.state.argent>=el.prix) { 
       el.stock-=1
       el.id= index
      this.state.panier.push({nom : el.nom , id : el.id, quantite : 1})
      index++ 
      // console.log(el.id)
    
     
    this.setState({
      argent : this.state.argent - prix,
      panier : this.state.panier 
    })}})
  }

  supprArticle = ()=>{
      this.state.panier.filter(el=>(
        el.id !== 1))
        this.setState({
          panier : this.state.panier
        })
      
    }
     
 


  render() {
    return (

      <div key={this.pro}>
        <h1>Mon argent : {this.state.argent} euros </h1>
        <div className="flex">
          {this.state.articles.map(el => (
            <Article
              cle={el.id}
              nom={el.nom}
              stock={el.stock}
              prix={el.prix}
              img={el.lien}
              click = {this.state.articles}
              value = {el.id}
              biff = {this.state.argent}
              btn = {this.changePrix.bind(this,el.prix,el.id)}
            />


          )
          )}
        </div>
          <h2> Mon panier : </h2>
         
            <Panier
              contenu = {this.state.panier} 
              article = {this.state.articles}
              click = {this.supprArticle}
            />

          )
          
          <div>

      
          </div>
      </div>
    )
  }
}
