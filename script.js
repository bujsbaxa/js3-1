/* for (let i = 0; i < 3; i++) {
    let num1 = random(1,100)
    let num2 = random(1,100)
    let pr = +prompt(num1 + ' + ' + num2 + ' =')
    let answer = (num1 + num2) == pr ? 'Correct' : 'Incorrect'
    alert(num1 + ' + ' + num2 + ' = ' +(num1+num2) + ' Your answer ' +pr + '. ' + answer)
} */




function random(min=1 ,max =100) {
    return Math.floor(Math.random() * (max + 1 - min) + min)
}

function random2(min=1, max=4) {
    return Math.floor(Math.random() * (max + 1 - min) + min)
}


let answer = 0

for (let i = 0; i < 3; i++) {
    let num1 = random()
    let num2 = random()
    let mark = random2()
    
    
    if (mark == 1) {
        answer = +prompt(`${num1} + ${num2} = `)
    }
    else if (mark == 2) {
        answer = +prompt(`${num1} - ${num2} = `)
    }
    else if (mark == 3) {
        answer = +prompt(`${num1} / ${num2} = `)
    }
    else if (mark == 4) {
        answer = +prompt(`${num1} * ${num2} = `)
    }
    if (mark == 1) {
        let user = answer == (num1 + num2) ? 'Correct' : 'Incorrect'
        alert(`${num1} + ${num2} = ${(num1 + num2)} Your answer ${answer}. ${user}`)
    } else if (mark == 2) {
        let user = answer == (num1 - num2) ? 'Correct' : 'Incorrect'
        alert(`${num1} - ${num2} = ${(num1 - num2)} Your answer ${answer}. ${user}`)
    } else if (mark == 3) {
        let user = answer == (num1 / num2) ? 'Correct' : 'Incorrect'
        alert(`${num1} / ${num2} = ${(num1 / num2)} Your answer ${answer}. ${user}`)
    }
    else if (mark == 4) {
        let user = answer == (num1 * num2) ? 'Correct' : 'Incorrect'
        alert(`${num1} * ${num2} = ${(num1 * num2)} Your answer ${answer}. ${user}`)
    }  
}