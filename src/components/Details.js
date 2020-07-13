import React,{Component} from 'react';
import {ProductConsumer} from "./context";
import {Link} from 'react-router-dom';



export default class Details extends Component {


    render() {
        return(
    <ProductConsumer>
         {value => {
            const {id,name,img,price,info,inCart}=value.detailedProduct; 
            console.log("-----id - "+id);
            return (
            <div className="container py-5">
            {/*name*/}
            <div className="row">
            <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
            <h1>{name}</h1>
            </div>
            </div>
            {/*end title*/}
             {/*Product info*/}
             <div className="row">
             <div className="col-10 mx-auto col-md-6 my-3 ">
             <img src={img} className="img-fluid" alt="product"/>
            </div>
             {/*Product text*/}
             <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
             <h2>Name : {name}</h2>
             <h4 className="text-blue">
             <strong>
                Price :<span>Rs. </span>{price}
            </strong></h4>
            <p className="text-capitalise font-weight-bold mt-3 mb-0">
           Information regarding product : </p> 
           <p className="text-muted lead">{info}</p>
           {/*Button*/}
           <div>
             <Link to="/">
             <button className="cartButton">Back to Products</button>
             <button className="cart-btn" disabled={inCart?true:false}
             onClick={()=>{
                 value.addToCart(id);
                 value.openModel(id);
                 }}>
             {inCart ? "inCart" : "Add to cart"}</button>
             </Link>  
           </div>
             </div>
            </div>
            </div>
            );
         }}
     </ProductConsumer>    
        );
    }
}


