const searchPokemon = (event) => {
  const searchValue = event.target.value.toLowerCase()
  const pokemonCards = document.querySelectorAll('.pokemon-card')

  pokemonCards.forEach((card) => {
    displayOnlySearched(card, searchValue)
  })
}

const displayOnlySearched = (card, searchValue) => {
  const pokemonName = card.querySelector('.name').innerText.toLowerCase()
  if (pokemonName.includes(searchValue)) {
    card.style.display = 'block'
  } else {
    card.style.display = 'none'
  }
}

const sortPokemon = (sortValue, sortBy, cardClass) => {


  const pokemonCards = document.querySelectorAll('.pokemon-card')

  console.log(sortValue, sortBy)


  const pokemonContainer = document.getElementById('pokemon-container')
  const pokemonCardsArray = Array.from(pokemonCards)
  const sortedPokemonCards = pokemonCardsArray.sort((a, b) => {
    const pokemonA = a.querySelector('.' + cardClass).innerText.toLowerCase()
    const pokemonB = b.querySelector('.' + cardClass).innerText.toLowerCase()
    if (pokemonA < pokemonB) {
      return -1
    }
    if (pokemonA > pokemonB) {
      return 1
    }
    return 0
  })
  if (sortValue === 'desc') {
    sortedPokemonCards.reverse()
  }
  pokemonContainer.innerHTML = ''
  pokemonContainer.append(...sortedPokemonCards)
}

document.getElementById('input-search').addEventListener('keyup', function (event) {
  searchPokemon(event)
})