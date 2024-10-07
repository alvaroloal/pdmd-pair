document.addEventListener('DOMContentLoaded', function() {
    getPokemonListV2();

    $(document).on("click", "#btn-get-data", function () {
      getPokemonListV2();
    });

    // boton get
    document.getElementById('getButton').addEventListener('click', function() {
        alert('Obteniendo datos de PokeAPI...');
    });


    function getPokemonListV2() {
        $("#data-content").html("<img src='loading.gif' />");
        $.ajax({
          url: "https://pokeapi.co/api/v2/pokemon",
          method: "GET",
        }).done(function (resp) {
          setTimeout(function () {
            $("#data-content").html("");
            var listadoPomemon = resp.results;
            listadoPomemon.forEach(function (pokemon) {
              var pokemonId = pokemon.url.split("/")[6];
              var template = `<div class="col-md-4 mb-4">
                        <div id="data-content" class="card text-center h-100">
                            <a href="detalles.html">
                                <img src="./img/001.png" class="card-img-top img-fluid" alt="Bulbasaur">
                            </a>
                            <div class="card-body">
                                <h5 class="card-title">Bulbasaur</h5>
                                <a href="detalles.html"><button class="btn btn-primary">Ver</button></a>
                            </div>
                        </div>
                    </div>`;
              $("#data-content").append(template);
            });
          }, 1000);
        });
      }






});
