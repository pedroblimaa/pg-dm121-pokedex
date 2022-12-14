import detailJS from './detail.js'

const detail = document.getElementById('detail')

const createDetailCard = (pokemon) => {
  const type = pokemon.types[0].type.name

  detail.innerHTML = `
                        <div id="detail-card" class="detail-card ${type}">
                        ${getDetailCardHeader(pokemon)}
                        <img class="pokeball-icon" src="assets/poke-ball.svg" alt="Pokeball">
                        ${getDetailCardInfo(pokemon)}
                        </div>
                        `

  const returnBtn = document.getElementById('return-btn')

  returnBtn.addEventListener('click', () => {
    detailJS.hideDetail()
  })
}

const getDetailCardHeader = (pokemon) => {
  const name = pokemon.name
  const number = pokemon.id.toString().padStart(3, '0')

  return `
        <div class="header">
            <div class="title-section">
                <button id="return-btn">
                    <i class="fas fa-chevron-left"></i>
                </button>
                <h1 id="title">${name}</h1>
            </div>
            <p class="number">#${number}</p>
        </div>
        `
}

const getDetailCardInfo = (pokemon) => {
  return `
        <div class="detail-card-info">
            ${getDetailCardImage(pokemon)}
            ${getDetailCardTypes(pokemon)}
            <h3 class="text-colored">About</h2>
                ${getDetailCardAllChars(pokemon)}
                ${getDetailCardDescription(pokemon)}
                ${getDetailCardAllStats(pokemon)}

        </div>
    `
}

const getDetailCardImage = (pokemon) => {
  const pokemonImg = pokemon.sprites.other['official-artwork'].front_default
  const pokemonName = pokemon.name

  return `
            <div class="pokemon-img-container">
                <img src="${pokemonImg}" alt="${pokemonName}">
            </div>
            `
}

const getDetailCardTypes = (pokemon) => {
  const types = pokemon.types
  let typesHtml = ''
  types.forEach((type) => {
    typesHtml += `<li class="${type.type.name}">${type.type.name}</li>`
  })

  return `
            <ul class="types">
                ${typesHtml}
            </ul>
            `
}

const getDetailCardAllChars = (pokemon) => {
  const weight = pokemon.weight / 10
  const height = pokemon.height / 10

  let html = `
        <ul class="char">
            ${getDetailCardChar('fas fa-weight', 'Weight', weight + ' kg')}
            ${getDetailCardChar('fas fa-ruler-vertical', 'Height', height + ' m')}
            ${getDetailCardAbilityChar(pokemon)}
        </ul>
        `

  return html
}

const getDetailCardChar = (charIco, charName, charValue) => {
  return `
          <li>
                <div class="value">
                    <i class="${charIco}"></i>
                    <p>${charValue}</p>
                </div>
                <p class="char-name">${charName}</p>
            </li>
            `
}

const getDetailCardAbilityChar = (pokemon) => {
  const abilities = pokemon.abilities
  let abilitiesHtml = ''
  let abilityCounter = 0

  abilities.forEach((abilityList) => {
    abilityCounter++
    if (abilityCounter <= 2) {
      abilitiesHtml += `<p>${abilityList.ability.name}</p>`
    }
  })

  return `
          <li>
                ${abilitiesHtml}
                <p class="char-name">Abilities</p>
            </li>
            `
}

const getDetailCardDescription = (pokemon) => {
  return `
            <p class="description">
            </p>
            `
}

const getDetailCardAllStats = (pokemon) => {
  const pokemonStats = pokemon.stats

  return `
        <ul class="stats">
            ${getDetailCardStats('HP', pokemonStats[0].base_stat)}
            ${getDetailCardStats('ATK', pokemonStats[1].base_stat)}
            ${getDetailCardStats('DEF', pokemonStats[2].base_stat)}
            ${getDetailCardStats('SATK', pokemonStats[3].base_stat)}
            ${getDetailCardStats('SDEF', pokemonStats[4].base_stat)}
            ${getDetailCardStats('SPD', pokemonStats[5].base_stat)}
        </ul>
    `
}

const getDetailCardStats = (statName, statValue) => {
  const fillValue = statValue / 2

  return `
            <li>
            <p class="stat-name">${statName}</p>
            <p class="stat-value">${statValue}</p>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${fillValue}%"></div>
            </div>
            </li>
            `
}

export default createDetailCard
