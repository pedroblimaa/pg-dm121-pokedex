
createCard = function (pokemon) {
  const id = pokemon.id.toString().padStart(3, '0')
  const image = pokemon.sprites.other['official-artwork'].front_default
  const color = pokemon.types[0].type.name

  var cardElement = document.createElement('li')
  cardElement.classList.add('pokemon-card')
  cardElement.classList.add(color)
  cardElement.innerHTML = `
    <div class="pokemon-card-image">
      <div class="number">#${id}</div>
      <img src="${image}" alt="${pokemon.name}">
    </div>
    <div class="name">${pokemon.name}</div>
    `
  return cardElement
}
