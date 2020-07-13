import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {ProductConsumer} from "./context";
import PropTypes from 'prop-types';


export default class Product extends Component {


    render() {
        const {id, name , img,price , inCart}=this.props.product;
        return( 
        <div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card grow">

        <ProductConsumer>
            {(value) =>(
                 <div className="img-container p-5 " >
                <div 
                onClick={() => value.handleDetail(id)}>
                <Link to={`/details`}>
                <img src={img} alt="product image" className="card-img-top"/>
                </Link>
                </div>
                <button className ="btn" disabled={inCart?true:false} 
                onClick={()=>{
                    value.addToCart(id);
                    value.openModel(id);
                }}>
                {inCart ? (<p className="text-capitalise mb-0" disabled>in cart</p>)
                :(<i className="glyphicon glyphicon-shopping-cart"/>)}
                </button>
                </div> )}
        
        </ProductConsumer>

        {/*card footer*/}
        <div className="card-footer d-flex justify-content-between ">
        <p className="align-self-center mb-0">{name}</p>
        <h5 className="text-blue font-italic mb-0">
        <span className="mr-1">Rs.</span>{price}
        </h5>
        </div>
        </div> 
        </div>
        
     );
    }
}


Product.propTypes={
    product: PropTypes.shape(
        {
            id: PropTypes.number,
            img: PropTypes.string,
            title:PropTypes.string,
            price:PropTypes.number,
            inCart:PropTypes.bool
        }
    ).isRequired
};