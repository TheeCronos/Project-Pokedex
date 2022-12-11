const pokemonDetail = document.getElementById('pokemonDetail');
const loadDetail = document.getElementById('pokemonDetail');

function convertPokemon(pokemon) {
    return `
        <div class="cont ${pokemon.type}">
            <div class="header">
                <div class="header_left">
                    <a href="/index.html">
                        <img class="arrow" src="assets/left-arrow.png" alt="PokéDex">
                    </a>
                    <span class="name">${pokemon.name}</span>
                </div>
                <span class="number">#${pokemon.number}</span>
            </div>

            <div class="detail">
                <div class="left">
                    <a href="index.html">
                        <img src="assets/left.png" alt="Back">
                    </a>
                </div>
                <div class="img">
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>

                <div class="right">
                    <a href="index.html">
                        <img src="assets/right.png" alt="Forward">
                    </a>
                </div>
            </div>

            <div class="detalhe">
                <ol class="types">
                    ${pokemon.types.map((type) => 
                        `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <p class="about">About</p>
                <div class="specs">
                    <div class="specs1">
                        <div class="specs_weight">
                            <img class="i" src="assets/Weight.png" alt="">
                            <p>${pokemon.weight} g</p>
                        </div>
                        <p>Weight</p>
                    </div>

                    <img class="divisor" src="assets/Space.png" alt="">

                    <div class="specs2">
                        <div class="specs_height">
                            <img class="i" src="assets/Height.png" alt="">
                            <p>${pokemon.height} cm</p>
                        </div>
                        <p>Height</p>
                    </div>

                    <img class="divisor" src="assets/Space.png" alt="">
                    
                    <div class="specs3">
                        <ol class="ol_moves">
                        ${pokemon.abilities.map((ability) => 
                            `<li>${ability}</li>`).join('')}
                        </ol>
                        <p>Moves</p>
                    </div>
                </div>
            
                <p class="about">Base Stats</p>

                <div class="stats">
                    <div class="stats_name">
                        <ol>
                            <li>HP</li>
                            <li>ATK</li>
                            <li>DEF</li>
                            <li>SATK</li>
                            <li>SDEF</li>
                            <li>SPD</li>
                        </ol>
                    </div>

                    <img class="divisor" src="assets/Space.png" alt="">

                    <div class="stats_value">
                        <ol>
                        ${pokemon.stats.map((stat) => 
                            `<li>${stat}</li>`).join('')}
                        </ol>
                    </div>

                    <div class="container-barra">
                        <div class="barra"></div>
                        <div class="barra"></div>
                        <div class="barra"></div>
                        <div class="barra"></div>
                        <div class="barra"></div>
                        <div class="barra"></div>
                    </div>
                </div>
            </div>
        </div>
    `
}

function loadPokemonDetail() {
    pokeapi.getPokemons().then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemon).join('');
        pokemonDetail.innerHTML += newHtml;
    })
}

loadPokemonDetail();

loadDetail.addEventListener('click', () => {
    
    loadPokemonDetail();

})