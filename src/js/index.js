const listSelect = document.querySelectorAll('.pokemon')
const cardSelect = document.querySelectorAll('.card')

listSelect.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        const cardOpen = document.querySelector('.open')
        cardOpen.classList.remove('open')
       
        const pokemonSelectID = pokemon.attributes.id.value
        const pokemonCardSelecId = 'card-' + pokemonSelectID

        const pokemonCardSelect = document.getElementById(pokemonCardSelecId)
        pokemonCardSelect.classList.add('open')

        const pokemonListSelect = document.querySelector('.select')
        pokemonListSelect.classList.remove('select')

        const pokemonListSelected = document.getElementById(pokemonSelectID)
        pokemonListSelected.classList.add('select')
    })
})