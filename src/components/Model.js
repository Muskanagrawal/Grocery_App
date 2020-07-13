import React, { Component } from 'react';
import {ProductConsumer} from './context';
import {Link} from 'react-router-dom';
import Product from './Product';

 
export default class Model extends Component{
 render(){
     return(
         <ProductConsumer>
             {(value)=>{
                 const{modelOpen,closeModel}=value;
                 const{img,name,price}=value.modelProduct;

                 if(!modelOpen){
                     return null;
                 }
                 else{
                     return(
                     <div className="container">
                     <div className="row">
                     <div id="model" className=" model col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalise p-5">
                    <div> <img src={img} className="img-fluid" alt="product"/><br/>
                     </div>
                    <div>
                     <h5> {" "}Item added to cart</h5>
                     <h5>{name}<br/></h5>
                     <h5 className="text-muted">Price: Rs. {price}</h5><br/>
                     <Link to="/">
                     <button className="btn" onClick={()=>closeModel()}>
                         Continue
                     </button>
                     </Link>
                     <Link to="/cart">
                     <button className="btn" onClick={()=>closeModel()}>
                         Go to cart
                     </button>
                     </Link>
                     </div>
                     </div>
                     </div>
                     </div>
                     );
                 }
             }}
         </ProductConsumer>
     )
 }     
 }