
const decrease = () => {
    const num_partidas = document.getElementById('numPartidas');

    if (num_partidas.innerHTML > 0)
        num_partidas.innerHTML--;
}

const increase = () => {
    document.getElementById('numPartidas').innerHTML++;
}

window.onload = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const modality = urlParams.get('modality');

    const player2_container = document.getElementById('player2_container');

    if (modality === '1xcpu')
        player2_container.style.display = 'none';
    else
        player2_container.style.display = 'block';
}



