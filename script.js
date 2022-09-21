const inputText = document.querySelector('#input')
const inputK = document.querySelector('#k')
const btn = document.querySelector('button')
let number = 1
const symbols = [`.`, `,`, `:`, `!`, `?`, `;`, `-`, ` `, `_`]

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

function encrypt(k) {
    const alphabetet = alphabet(number)
    let input = inputText.value.toLowerCase()

    let encryptText = `` 
    for (let i = 0; i < input.length; i++) {
        const j = alphabetet.indexOf(input[i])
        if (j === -1) {
            encryptText += `${input[i]}`
        }
        else {
            encryptText += `${alphabetet[(j + k) % alphabet(number).length]}`
        }
    }
    return encryptText
}

document.addEventListener('keypress', event => {
    if (event.code === 13) {
        let k = Number(inputK.value)
        document.querySelector('#parEncrypt').textContent = encrypt(k)
    }
})

btn.addEventListener('click', (event) => {
    event.preventDefault()
    let k = Number(inputK.value)
    document.querySelector('#parEncrypt').textContent = encrypt(k)
})

