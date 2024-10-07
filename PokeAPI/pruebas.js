$(document).ready(function() {
    getPokemonListV2();

    // Botón get
    $('#getButton').on('click', function() {
        alert('Obteniendo datos de PokeAPI...');
        getPokemonListV2();
    });

    function getPokemonListV2() {
        $("#data-content").html(""); // Limpiar contenido previo
        $("#loading").show(); // Mostrar la imagen de carga

        $.ajax({
            url: "https://pokeapi.co/api/v2/pokemon?limit=20", // Limitar a 20 para obtener menos datos
            method: "GET",
        }).done(function(resp) {
            setTimeout(function() {
                $("#loading").hide(); // Ocultar la imagen de carga
                var listadoPokemon = resp.results;

                // Iterar sobre cada Pokémon
                listadoPokemon.forEach(function(pokemon) {
                    var pokemonId = pokemon.url.split("/")[6];

                    // Obtener detalles de cada Pokémon
                    $.get(pokemon.url, function(pokemonData) {
                        var template = `
                            <div class="col-md-4 mb-4">
                                <div class="card text-center h-100">
                                    <a href="detalles.html">
                                        <img src="${pokemonData.sprites.front_default}" class="card-img-top img-fluid" alt="${pokemonData.name}">
                                    </a>
                                    <div class="card-body">
                                        <h5 class="card-title">${pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)}</h5>
                                        <p class="card-text">Altura: ${pokemonData.height} | Peso: ${pokemonData.weight}</p>
                                        <a href="detalles.html"><button class="btn btn-primary">Ver</button></a>
                                    </div>
                                </div>
                            </div>`;
                        $("#data-content").append(template);
                    });
                });
            }, 1000);
        }).fail(function() {
            $("#loading").hide(); // Ocultar la imagen de carga si hay un error
            alert("Error al obtener datos de la PokeAPI.");
        });
    }

    
});
