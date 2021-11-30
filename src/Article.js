
import React, { Component } from 'react'
import App from './App'



export default class Article extends Component {
    argent = {
        prix : 20
    }
      acheter = (e) => { 

        this.props.btn()

          

      }

    render() {
    
        return (
            
        
            <div >
               <ul className='flex' >
                   <li><img src={this.props.img} alt="" /></li>
                   <li style ={{color : "BLue " , fontSize  :"40px"}}>{this.props.nom}</li>
                   <li style ={{color : "purple" , fontSize  :"25px"}}> Prix : {this.props.prix} euros</li>
                   <li style ={{color : "red" , fontSize  :"25px"}}> Stock : {this.props.stock} en stock </li>
                 <li><button  onClick = {this.acheter} value = {this.props.value} >Acheter</button></li>
               </ul>
               
            </div>



        )}
}



















