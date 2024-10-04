document.addEventListener('DOMContentLoaded', function() {
    // cuando se carga la pagina se muestran todos los pokemons
    document.querySelectorAll('.pokemon-card').forEach(card => {
        card.style.display = 'block';
    });

    // para mostrar el pokemon cuando se pinche en la lista
    const buttons = document.querySelectorAll('.list-group-item');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedPokemon = this.getAttribute('data-id');
            document.querySelectorAll('.pokemon-card').forEach(card => {
                card.style.display = 'none'; // para oculta todos los Pokémon
            });
            document.getElementById(selectedPokemon).style.display = 'block'; // muestra solo el poke seleccionado
        });
    });

    // boton get
    document.getElementById('getButton').addEventListener('click', function() {
        alert('Obteniendo datos de PokeAPI...');
    });
});
