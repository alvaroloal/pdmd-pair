$(document).ready(function() {
    // Cargar lista de Pokémon al cargar la página
    getPokemonListV2();

    // Botón para volver a cargar la lista
    $('#getButton').on('click', function() {
        alert('Obteniendo datos de PokeAPI...');
        getPokemonListV2();  // Reutiliza la misma función
    });

    function getPokemonListV2() {
        $("#data-content").html(""); // Limpiar contenido previo
        $("#loading").show(); // Mostrar la imagen de carga

        $.ajax({
            url: "https://pokeapi.co/api/v2/pokemon?limit=20", // Limitar a 20 Pokémon
            method: "GET",
        }).done(function(resp) {
            $("#loading").hide(); // Ocultar la imagen de carga
            var listadoPokemon = resp.results;

            // Iterar sobre cada Pokémon
            listadoPokemon.forEach(function(pokemon) {
                var pokemonId = pokemon.url.split("/")[6]; // Obtener ID del Pokémon

                // Generar la plantilla HTML
                var template = `
                    <div class="col-md-4 mb-4">
                        <div class="card text-center h-100">
                            <a href="detalles.html?pokemon=${pokemon.name}">
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png" class="card-img-top img-fluid" alt="${pokemon.name}">
                            </a>
                            <div class="card-body">
                                <h5 class="card-title">${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h5>
                                <a href="detalles.html?pokemon=${pokemon.name}"><button class="btn btn-primary">Ver</button></a>
                            </div>
                        </div>
                    </div>`;
                
                $("#data-content").append(template);
            });
        }).fail(function() {
            $("#loading").hide(); // Ocultar la imagen de carga si hay un error
            alert("Error al obtener datos de la PokeAPI.");
        });
    }
});
