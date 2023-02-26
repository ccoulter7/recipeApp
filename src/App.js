import './App.css';
import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';

const App = () => {

  const APP_ID = '7b898d1f'
  const APP_KEY = 'e4f7fcdf92fcd934cf1ae49f32567357'

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('chicen')

  useEffect(() => {
    getRecipes()
  }, [query])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    setRecipes(data.hits)
    console.log(data.hits)
  }

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault()
    setQuery(search)
    setSearch('')

  }
  return (
    < div className='App'>
      <form onSubmit={getSearch} className='search-form'>
        <input type='text'
          className='search-bar'
          value={search}
          onChange={updateSearch} />
        <button type='submit' className='search-button' >Search </button>
      </form>
      <div className='recipes'>
        {recipes.map(recipe => (
          <Recipe
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients} />
        ))}
      </div>
    </div >
  )
}



export default App;

