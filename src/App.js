import React, {useEffect, useState} from 'react';
//css
import './App.css'
//components
import Searchbar from './Components/Searchbar/Searchbar';
import CardTable from './Components/CardTable/CardTable';

function App() {

  const [pokemon, setPokemon] = useState([]);
  const [pokemonSpecies, setPokemonSpecies] = useState([]);
  const [idToShow, setIdToShow] = useState([]);

  const [pokemonToShow, setPokemonToShow] = useState([]);

    //'water', 'bug', 'dark', 'fighting', 'ghost', 'steel', 'flying', 'electric', 'fairy'];
    //const habitat = ['grassland', 'forest', 'waters edge', 'sea', 'cave', 'mountain', 'rough-terrain', 'urban', 'rare'];
    //const color = ['red', 'blue', 'yellow', 'green', 'black', 'brown', 'purple', 'gray', 'white', 'pink'];
  const [buttons, setButtons] = useState([
    {filter: 'type' , name: 'bug', active: false},
    {filter: 'type' , name: 'dark', active: false},
    {filter: 'type' , name: 'dragon', active: false},
    {filter: 'type' , name: 'electric', active: false},
    {filter: 'type' , name: 'fairy', active: false},
    {filter: 'type' , name: 'fire', active: false},
    {filter: 'type' , name: 'flying', active: false},
    {filter: 'type' , name: 'ghost', active: false},
    {filter: 'type' , name: 'grass', active: false},
    {filter: 'type' , name: 'ground', active: false},
    {filter: 'type' , name: 'ice', active: false},
    {filter: 'type' , name: 'normal', active: false},
    {filter: 'type' , name: 'poison', active: false},
    {filter: 'type' , name: 'psychic', active: false},
    {filter: 'type' , name: 'rock', active: false},
    {filter: 'type' , name: 'steel', active: false},
    {filter: 'type' , name: 'water', active: false},
    {filter: 'type' , name: 'fighting', active: false},
    {filter: 'habitat' , name: 'waters-edge', active: false},
    {filter: 'habitat' , name: 'sea', active: false},
    {filter: 'habitat' , name: 'cave', active: false},
    {filter: 'habitat' , name: 'mountain', active: false},
    {filter: 'habitat' , name: 'urban', active: false},
    {filter: 'habitat' , name: 'rough-terrain', active: false},
    {filter: 'habitat' , name: 'grassland', active: false},
    {filter: 'habitat' , name: 'forest', active: false},
    {filter: 'habitat' , name: 'rare', active: false},
    {filter: 'color' , name: 'red', active: false},
    {filter: 'color' , name: 'blue', active: false},
    {filter: 'color' , name: 'yellow', active: false},
    {filter: 'color' , name: 'green', active: false},
    {filter: 'color' , name: 'black', active: false},
    {filter: 'color' , name: 'brown', active: false},
    {filter: 'color' , name: 'purple', active: false},
    {filter: 'color' , name: 'gray', active: false},
    {filter: 'color' , name: 'white', active: false},
    {filter: 'color' , name: 'pink', active: false},



  ])
  const [types, setTypes] = useState([]);
  const [colors, setColors] = useState([]);
  const [habitats, setHabitats] = useState([]);


  useEffect(() => {
    updateTypes();
    updateColors();
    updateHabitats();
    updateCards();
    showCards();
  });

  //set types
  const updateTypes = () => {
    let btns = [];
    buttons.forEach(button => {
      if(button.filter === 'type') {
        btns.push(button)
      }
    })
    setTypes(btns)
  }

 //set colors
  const updateColors =() => {
    let btns = [];
    buttons.forEach(button => {
      if(button.filter === 'color') {
        btns.push(button)
      }
    })
    setColors(btns)
  }

 //set habitat
  const updateHabitats = () => {
    let btns = [];
    buttons.forEach(button => {
      if(button.filter === 'habitat') {
        btns.push(button)
      }
    })
    setHabitats(btns)
  }

  const toggleButtons = (btn) => {
    const copy = [...buttons];
    const found = copy.findIndex(element => element.name === btn.id);
    copy[found].active = !copy[found].active;
    setButtons(copy);
  };

  //async function that fetches all pokemon
  useEffect(() => {
    for(let i = 1; i < 152; i++) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`
      ).then((response) => response.json()
      ).then((jsonResponse) => setPokemon((prev) => [...prev, jsonResponse])
      ).catch((error) => console.log(error));
    }
  }, []);

  //async function that fetches all pokemon species
  useEffect(() => {
    for(let i = 1; i < 152; i++) {
      fetch(`https://pokeapi.co/api/v2/pokemon-species/${i}/`
      ).then((response) => response.json()
      ).then((jsonResponse) => setPokemonSpecies((prev) => [...prev, jsonResponse])
      ).catch((error) => console.log(error));
    }
  }, []);




  const updateFilters = () => {
    let filters = [];
    buttons.forEach(button => {
      if(button.active === true) {
        filters.push(button);
      }
    });
    return filters;
  }


  const updateCardsTypes = () => {
    const filters = updateFilters();
    let filteredPokemon = [];
    for(let i = 0; i < filters.length; i++) {
      for(let j = 1; j < pokemon.length; j++) {
        for(let k = 0; k < pokemon[j].types.length; k++) {
          if(pokemon[j].types[k].type.name === filters[i].name) {
            filteredPokemon.push(pokemon[j].id);
          }
        }

      }
    }
    return filteredPokemon;
  }



  const updateCardsHabitats = () => {
    const filters = updateFilters();
    let filteredPokemon = [];
    for(let i = 0; i < filters.length; i++) {
      for(let j = 1; j < pokemonSpecies.length; j++) {
        if(pokemonSpecies[j].habitat.name === filters[i].name) {
          filteredPokemon.push(pokemonSpecies[j].id);
        }

      }
    }
    return filteredPokemon;
  }




  const updateCardsColors = () => {
    const filters = updateFilters();
    let filteredPokemon = [];
    for(let i = 0; i < filters.length; i++) {
      for(let j = 1; j < pokemonSpecies.length; j++) {
        if(pokemonSpecies[j].color.name === filters[i].name) {
          filteredPokemon.push(pokemonSpecies[j].id);
        }

      }
    }
    return filteredPokemon;
  }




  const updateCards = () => {
    const types = updateCardsTypes();
    const colors = updateCardsColors();
    const habitats = updateCardsHabitats();
    let all = [...types, ...colors, ...habitats];
    let unique = [...new Set(all)];
    setIdToShow(unique);
  }




  const showCards = () => {
    let array = [];
    for(let i = 0; i < idToShow.length; i++) {
      for(let j = i; j < pokemon.length; j++) {
        if(pokemon[j].id === idToShow[i]) {
          array.push(pokemon[j]);
        }
      }
    }
    setPokemonToShow(array);
  }

  return (
    <div  className="App">
      <Searchbar  toggleButtons={toggleButtons} buttons={buttons} colors={colors} habitats={habitats} types={types}/>
      <CardTable pokemonToShow={pokemonToShow}/>
    </div>
  );
}

export default App;
