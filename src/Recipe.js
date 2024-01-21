import React from "react";
import style from './recipe.module.css'



const Recipe = ({ title, calories, image, ingredients, instructions }) => {
    return (
        <div className={style.recipe}>
            <h1 >{title}</h1>
            <h2>Ingredients</h2>
            <ol>{ingredients.map(ingredient => (
                <li>{ingredient.text}</li>
            ))}</ol>
            <h2>Instructions </h2>
            <ol>{instructions && instructions.map(instructions => (
                <li>{instructions}</li>
            ))}</ol>
            <p>Calories: {Math.round(calories)}</p>
            <img src={image} className={style.image}></img>
        </div >
    )
}

export default Recipe