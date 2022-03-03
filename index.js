const button = document.querySelector('.sacar-carta')
button.addEventListener('click', sacarCartaAleatóriaDoDeck)

async function criarDeckEmbaralhado() {
    const url = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
    const resposta = await fetch(url)
    return await resposta.json()
}

async function sacarCarta(deck_id) {
    const url = `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`
    const resposta = await fetch(url)
    return await resposta.json()
}


async function sacarCartaAleatóriaDoDeck() {
    const deck = await criarDeckEmbaralhado()
    const {cards: [{ image }]} = await sacarCarta(deck.deck_id)   
    const imagemCarta = image
    document.querySelector('.carta-sacada').src = imagemCarta
}

