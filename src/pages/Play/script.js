let isPlayerOne = true;
let canPlay = true;

const check = (a, b, c) => {

    if (!a || !b || !c) return false;

    if (a == b && b == c) return true;

    else return false;

}

const win = () => {
    const c1 = document.getElementById(`ceil-1`).innerText;
    const c2 = document.getElementById(`ceil-2`).innerText;
    const c3 = document.getElementById(`ceil-3`).innerText;
    const c4 = document.getElementById(`ceil-4`).innerText;
    const c5 = document.getElementById(`ceil-5`).innerText;
    const c6 = document.getElementById(`ceil-6`).innerText;
    const c7 = document.getElementById(`ceil-7`).innerText;
    const c8 = document.getElementById(`ceil-8`).innerText;
    const c9 = document.getElementById(`ceil-9`).innerText;

    return check(c1, c2, c3) || check(c4, c5, c6) || check(c7, c8, c9) ||
        check(c1, c4, c7) || check(c2, c5, c8) || check(c3, c6, c9) ||

        check(c1, c5, c9) || check(c3, c5, c7);

}

const tie = () => {
    const c1 = document.getElementById(`ceil-1`).innerText;
    const c2 = document.getElementById(`ceil-2`).innerText;
    const c3 = document.getElementById(`ceil-3`).innerText;
    const c4 = document.getElementById(`ceil-4`).innerText;
    const c5 = document.getElementById(`ceil-5`).innerText;
    const c6 = document.getElementById(`ceil-6`).innerText;
    const c7 = document.getElementById(`ceil-7`).innerText;
    const c8 = document.getElementById(`ceil-8`).innerText;
    const c9 = document.getElementById(`ceil-9`).innerText;

    if(c1 && c2 && c3 && c4 && c5 && c6 && c7 && c8 && c9) return true;
    else return false;

}

const clean = () => {
    document.getElementById(`ceil-1`).innerText = "";
    document.getElementById(`ceil-2`).innerText = "";
    document.getElementById(`ceil-3`).innerText = "";
    document.getElementById(`ceil-4`).innerText = "";
    document.getElementById(`ceil-5`).innerText = "";
    document.getElementById(`ceil-6`).innerText = "";
    document.getElementById(`ceil-7`).innerText = "";
    document.getElementById(`ceil-8`).innerText = "";
    document.getElementById(`ceil-9`).innerText = "";
}

const clickCeil = (e) => {

    let content = document.getElementById(`ceil-${e}`);

    if (content.innerHTML) return;
    if (!canPlay) return;

    if (isPlayerOne)
        content.innerHTML = 'X';
    else
        content.innerHTML = 'O';

    if (win()) {

        canPlay = false;

        setTimeout(() => {

            document.getElementById("main").style.display = 'none';

            if (isPlayerOne)
                document.getElementById("win-text-1").style.display = 'block';
            else
                document.getElementById("win-text-2").style.display = 'block';

            setTimeout(() => {
                let round = localStorage.getItem('round');
                localStorage.setItem('round', Number(round) + 1);
                refreshRound();
                clean();
                changePoints();
                canPlay = true;

                isPlayerOne = !isPlayerOne;

                document.getElementById("main").style.display = 'flex';
                document.getElementById("win-text-1").style.display = 'none';
                document.getElementById("win-text-2").style.display = 'none';
            }, 1000);

        }, 600);

    } else if (tie()) {

        console.log(tie());

        setTimeout(() => {

            document.getElementById("main").style.display = 'none';

            document.getElementById("tie-text").style.display = 'block';

            setTimeout(() => {
                let round = localStorage.getItem('round');
                localStorage.setItem('round', Number(round) + 1);

                refreshRound();
                clean();

                canPlay = true;

                isPlayerOne = !isPlayerOne;

                document.getElementById("main").style.display = 'flex';
                document.getElementById("tie-text").style.display = 'none';
            }, 1000);

        }, 600);

    } else {
        isPlayerOne = !isPlayerOne;
    }
}

const refreshRound = () => {
    if (!localStorage.getItem('round')) {
        localStorage.setItem('round', 0)
        document.getElementById('roundText').innerHTML = "Rodada 0";
    }
    else
        document.getElementById('roundText').innerHTML = "Rodada " + localStorage.getItem('round');
}

window.onload = () => {

    localStorage.setItem('round', 0)

    document.getElementById('player1').innerHTML = localStorage.getItem('player1');
    document.getElementById('player2').innerHTML = localStorage.getItem('player2');

    refreshRound();
}

const changePoints = () => {

    if (isPlayerOne) {
        document.getElementById('points1').innerHTML++;
    }
    else {
        document.getElementById('points2').innerHTML++;
    }
}