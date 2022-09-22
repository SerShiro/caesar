const inputText = document.querySelector('#input')
const inputDec = document.querySelector('#inputDec')
const inputK = document.querySelector('#k')
const btnEnc = document.querySelector('#btnEnc')
const btnDec = document.querySelector('#btnDec')

function alphabet(number) {
    const alphAll = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я']
    const alphWithoutE = ['а', 'б', 'в', 'г', 'д', 'е', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я']
    const alphWithoutQ = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я']
    const alphWithoutEQ = ['а', 'б', 'в', 'г', 'д', 'е', 'ж', 'з', 'и', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я']
    if (number === 1) return alphAll
    else if(number === 2) return alphWithoutE
    else if(number === 3) return alphWithoutQ
    else if(number === 4) return alphWithoutEQ
    // else alert('Ошибка')
}

function encrypt(k, number, input) {
    const alphabetet = alphabet(number)

    let encryptText = ``
    for (let i = 0; i < input.length; i++) {
        const j = alphabetet.indexOf(input[i])
        if (j === -1) {
            encryptText += input[i]
        }
        else {
            encryptText += alphabetet[(j + k) % alphabet(number).length]
        }
    }
    return encryptText
}

function decrypt() {
    let decryptText = ``
    let input = inputDec.value.toLowerCase()
    for(let number = 1; number <= 4; number++) {
        for (let k = 0; k < alphabet(number).length; k++) {
            decryptText += encrypt(k, number, input) + `<br>`
        }
    }
    return decryptText
}

inputText.addEventListener('keypress', event => {
    if (event.keyCode === 13) {
        let k = Number(inputK.value)
        document.querySelector('#parEncrypt').textContent = encrypt(k, 1, input)
    }
})

btnEnc.addEventListener('click', (event) => {
    event.preventDefault()
    let k = Number(inputK.value)
    let input = inputText.value.toLowerCase()
    document.querySelector('#parEncrypt').textContent = encrypt(k, 1, input)
})

btnDec.addEventListener('click', (event) => {
    event.preventDefault()
    document.querySelector('.parDecrypt').innerHTML = decrypt()
})

inputDec.addEventListener('keypress', event => {
    if (event.keyCode === 13) {
        event.preventDefault()
        document.querySelector('.parDecrypt').innerHTML = decrypt()
    }
})