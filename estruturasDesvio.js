let x1 = 0
if(x1 === 0)
    console.log('X1 é zero!')

let x2 = 0
if(x2 === 0){
    console.log('X2 é zero!')
    x2++
}

let x3 = 0
if(x3 % 2 === 0){
    console.log('X3 é PAR!')
}

for(let i= 1; i <= 20; i++){
    if(i % 2 === 0){
        console.log(i + ' é PAR!')
    }
}

for(let i= 1; i <= 20; i++){
    if(i % 2 === 0){
     console.log(i + ' é PAR!')
    } else {
      console.log(i + ' é ÍMPAR!')
    }
}

for(let i = 0; i < 10; i++){
    if(i >= 5){
        if(i <= 7){
            console.log('FUNCIONOU')
        }
    }
}

for(let i = 0; i < 10; i++){
    if(i >= 5 && i <= 7){
        console.log('FUNCIONOU')
    }
}

let letra = 'A'
switch(letra){
    case 'A': console.log('Vogal A')
    break
    case 'E': console.log('Vogal E')
    break
    case 'I': console.log('Vogal I')
    break
    case 'O': console.log('Vogal O')
    break
    case 'U': console.log('Vogal U')
    break
    default: console.log('Não é uma vogal')
}