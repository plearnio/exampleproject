import React from 'react'

import ShowItemPokemonAxios from './components/ShowItemPokemonAxios'
import ShowItemPokemonFetch from './components/ShowItemPokemonFetch'

const App = () =>
(
  <div className="App">
    <ShowItemPokemonAxios />
    <ShowItemPokemonFetch />
  </div>
)


export default App
