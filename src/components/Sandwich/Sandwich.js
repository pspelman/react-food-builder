import React from 'react';
import classes from './Sandwich.css';
import SandwichIngredient from "./SandwichIngredient/SandwichIngredient";

const sandwich = (props) => {
    let transformedIngredients = Object.keys(props.ingredients);
    // console.log(``, transformedIngredients);

    let finalSandwichIngredients = transformedIngredients.map(ingredientKey => {
        //mapping to get the ingredient keys
        //the _ underscore is used because we don't actually care about the name, just the index
        return [...Array(props.ingredients[ingredientKey])].map((_, index) => {
            //mapping with each ingredient key -> getting the number of those things
            return <SandwichIngredient key={ingredientKey + index} type={ingredientKey}/>
        })
    })
    .reduce((rootArray, element) => {
        return rootArray.concat(element)
    }, []);
    //the empty array at the end is the "starting" array
    //if the finalSandwichIngredients.length === 0 then I want to provide a message like "add ingredients!"
    if (finalSandwichIngredients.length === 0) {
        finalSandwichIngredients = <p key={'addSammy'}>Start Adding to your Sammy</p>
    }
    if (finalSandwichIngredients.length === 1) {
        finalSandwichIngredients.unshift(<p key={'lightSammy'}>That's not much...what else?</p>)
    }


    // console.log(finalSandwichIngredients);


    return (
        <div className={classes.Sandwich}>
            <SandwichIngredient type={"bread-top"}/>
            {finalSandwichIngredients}
            <SandwichIngredient type={"bread-bottom"}/>
        </div>
    );
};

export default sandwich;