import React, { Component } from 'react'

export default class Panier extends Component {
    supprArticle = ()=>{
        this.props.click()
    }
    render() {
        return (
            <div className= "d-flex flex-column" key={this}>
               <div>
                   <ul className=" ul_panier">
                    {this.props.contenu.map(el=>(
                     <li className=" li_panier"> {el.nom} id : {el.id} Quantité : {el.quantite}
                     <button className="btn_panier" onClick={this.supprArticle} > Rendre</button>
                     </li>
                    ))}
                   </ul>
             </div>
         
            </div>
        )
    }
}
