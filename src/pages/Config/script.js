
const decrease = () => {
    const num_partidas = document.getElementById('numPartidas');

    if (num_partidas.innerHTML > 0)
        num_partidas.innerHTML--;
}

const increase = () => {
    document.getElementById('numPartidas').innerHTML++;
}

const start = () => {
    const urlParams = new URLSearchParams(window.location.search);


    let player1 = document.getElementById('player1').value;
    let player2 = document.getElementById('player2').value;

    const modality = urlParams.get('modality');

    if (modality === '1xcpu') {
        if (!player1) alert("Digitar jogador 1");
        else {
            localStorage.setItem('player1', player1);
            window.location.replace('../Play/index.html');
        }
    } else {
        if (!player1) alert("Digitar jogador 1");
        else if (!player2) alert("Digitar jogador 2");
        else {
            localStorage.setItem('player1', player1)
            localStorage.setItem('player2', player2)
            window.location.replace('../Play/index.html');
        }
    }




    console.log(player1);

}

window.onload = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const modality = urlParams.get('modality');

    const player2_container = document.getElementById('player2');

    if (modality === '1xcpu')
        player2_container.style.display = 'none';
    else
        player2_container.style.display = 'block';
}



