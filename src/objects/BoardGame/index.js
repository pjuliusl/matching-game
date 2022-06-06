import CardGame from "../../components/CardGame";

function BoardGame (amountCards) {
    const $htmlCardGame = CardGame();
    const $htmlBoardGame = $htmlCardGame.repeat(amountCards);

    console.log($htmlCardGame);

    return $htmlBoardGame;
}

export default BoardGame;