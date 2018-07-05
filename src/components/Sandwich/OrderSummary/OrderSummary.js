import React from 'react';
// import React, {Component} from 'react';
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import Button from "../../UI/Button/Button";


const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map((ingredientKey, index) => {
            return <li key={index}><span
                style={{textTransform: 'capitalize'}}>{ingredientKey}: {props.ingredients[ingredientKey]}</span>
            </li>
        });

    return (
        <Auxiliary>
            <h1>
                Your Order:
            </h1>
            <p>A sandwich with the following:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total: ${props.totalPrice.toFixed(2)}</strong></p>
            <div style={{width: '100%', textAlign: 'center'}}>
                <Button btnType={"Danger"} clicked={props.purchaseCancelled}>CANCEL</Button>
                <Button btnType={"Success"} clicked={props.purchaseContinued}>PLACE ORDER</Button>
            </div>
        </Auxiliary>
    );
};


export default orderSummary;

// class OrderSummary extends Component {
//     componentWillUpdate() {
//         console.log(`[OrderSummary] WillUpdate`,);
//     }
//
//     render() {
//         const ingredientSummary = Object.keys(this.props.ingredients)
//             .map((ingredientKey, index) => {
//                 return <li key={index}><span
//                     style={{textTransform: 'capitalize'}}>{ingredientKey}: {this.props.ingredients[ingredientKey]}</span>
//                 </li>
//             });
//
//         return (
//             <Auxiliary>
//                 <h1>
//                     Your Order:
//                 </h1>
//                 <p>A sandwich with the following:</p>
//                 <ul>
//                     {ingredientSummary}
//                 </ul>
//                 <p><strong>Total: ${this.props.totalPrice.toFixed(2)}</strong></p>
//                 <div style={{width: '100%', textAlign: 'center'}}>
//                     <Button btnType={"Danger"} clicked={this.props.purchaseCancelled}>CANCEL</Button>
//                     <Button btnType={"Success"} clicked={this.props.purchaseContinued}>PLACE ORDER</Button>
//                 </div>
//             </Auxiliary>
//         );
//     }
//
// }
//
// export default OrderSummary;
//
