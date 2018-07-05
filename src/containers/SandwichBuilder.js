import React, {PureComponent} from 'react';
import Auxiliary from "../hoc/Auxiliary/Auxiliary";
import Sandwich from "../components/Sandwich/Sandwich";
import BuildControls from "../components/Sandwich/BuildControls/BuildControls";
import Modal from "../components/UI/Modal/Modal";
import OrderSummary from "../components/Sandwich/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7,
};

class SandwichBuilder extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: {
                salad: 1,
                bacon: 0,
                cheese: 1,
                meat: 1,
            },
            totalPrice: 4,
            canBePurchased: false,
            purchaseButtonClicked: false,
        };
    }



    updateCanBePurchasedState (updatedIngredients) {
        const ingredients = {
            ...updatedIngredients
        };
        console.log(...this.state.ingredients);
        // const sumOfIngredients = Object.keys(ingredients).map(ingredientKey => {
        //     // getting the QUANTITY of each ingredient
        //     console.log(ingredients[ingredientKey]);
        //     return ingredients[ingredientKey];
        // }).reduce((sumOfIngredients, individualElement) => {
        //     return sumOfIngredients + individualElement;
        // }, 0);
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey]
            }) //this point gives an array of the values
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        // console.log(`current sum: `, sum);
        this.setState({canBePurchased: sum < 1})

        //if there's at least one ingredient, it can be purchased
        // console.log(`Sum of ingredients: `,sumOfIngredients);
        // this.setState({canBePurchased: sumOfIngredients < 1});

    }


    addIngredientHandler = (type) => {
        // console.log(`adding ingredient: `, type);
        const oldIngredientCount = this.state.ingredients[type];
        const updatedIngredientCount = oldIngredientCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedIngredientCount;

        // console.log(`Updated ingredients: `, updatedIngredients);
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients,
        });
        this.updateCanBePurchasedState(updatedIngredients);
    };


    removeIngredientHandler = (type) => {
        // console.log(`removing: `,type);
        //probably want to account for if there are any left of that type
        const oldIngredientCount = this.state.ingredients[type];
        // console.log(`There was`,oldIngredientCount, type);

        const updatedIngredientCount = oldIngredientCount > 1 ? oldIngredientCount - 1 : 0;

        const oldPrice = this.state.totalPrice;
        const priceSubtraction = INGREDIENT_PRICES[type];
        const newPrice = oldIngredientCount > 0 ? oldPrice - priceSubtraction : oldPrice;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedIngredientCount;
        // console.log(`Updated ingredients: `,updatedIngredients);
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients,
        });

        this.updateCanBePurchasedState(updatedIngredients);
    };

    purchaseButtonHandler = () => {
        this.setState({
            purchaseButtonClicked: true,
        });
    };


    purchaseCancelHandler = () => {
        this.setState({purchaseButtonClicked: false})
    };


    purchaseContinueHandler = () => {
        console.log(`continuing with purchase`,);
    };

    escFunction = (event) =>{
        console.log(`key pressed`,);
        if (event.keyCode === 27) {
            console.log(`escape key pressed`,);
            // this.purchaseCancelHandler();
        }
    };


    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        return(
            <Auxiliary>
                <Modal
                    show={this.state.purchaseButtonClicked}
                    modalClosed={this.purchaseCancelHandler}
                    escFunction={(event) => this.escFunction(event)}
                >
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        totalPrice={this.state.totalPrice}
                        purchaseCancelled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler}


                    />
                </Modal>
                <div>
                    <Sandwich ingredients={this.state.ingredients}/>
                </div>
                <div>
                    <br/>
                    <BuildControls
                        ingredientAdded={this.addIngredientHandler}
                        ingredientRemoved={this.removeIngredientHandler}
                        disabled={disabledInfo}
                        totalPrice={this.state.totalPrice}
                        canBePurchased={this.state.canBePurchased}
                        purchaseButtonHandler={this.purchaseButtonHandler}
                    />

                </div>
            </Auxiliary>
        )
    }

}

export default SandwichBuilder;