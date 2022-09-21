const inputText = document.querySelector('#input')
const inputK = document.querySelector('#k')
const btn = document.querySelector('button')
let number = 1

function alphabet(number) {
    const alphAll = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ы', 'ъ', 'э', 'ю', 'я']
    const alphWithoutE = ['а', 'б', 'в', 'г', 'д', 'е', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ы', 'ъ', 'э', 'ю', 'я']
    const alphWithoutQ = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ы', 'ъ', 'э', 'ю', 'я']
    const alphWithoutEQ = ['а', 'б', 'в', 'г', 'д', 'е', 'ж', 'з', 'и', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ы', 'ъ', 'э', 'ю', 'я']
    if (number === 1) return alphAll
    else if(number === 2) return alphWithoutE
    else if(number === 3) return alphWithoutQ
    else if(number === 4) return alphWithoutEQ
    // else alert('Ошибка')
}
console.log(alphabet(number))

function encrypt(k) {
    const alphabet = alphabet(number)
    let input = inputText.value

    let encryptText = `` 
    for (let i = 0; i < input.length; i++) {
        let m = -1
        for (let j = 0; j < alphabet.length; j++) {
            if (input[i] === alphabet[j]) 
            {
                m = j
                break
            }
        }
        encryptText += `${alphabet[(m + k) % alphabet(number).length]}`
    }
    return encryptText
}

btn.addEventListener('click', (event) => {
    event.preventDefault()
    let k = inputK.value
    console.log(encrypt(k))
})

