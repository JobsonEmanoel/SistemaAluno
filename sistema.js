let nomeDeAluno = ["marcel","franklin","rita","afranio"]

for (let nome of nomeDeAluno) {
console.log(`Esta pessoa se chama ${nome}`)
}

let numeroDeAluno = 10;

let contador = 0;

 while(contador <= numeroDeAluno) {
    //console.log(contador)

    if(contador == 0){
        console.log("O número atual é zero")
    }else if(contador % 2 != 0){
        console.log("O número " + contador + " é par")
    }else{
        console.log(`O número ${contador} é Impar`)
    }
    contador++;
}

for (let contador = 0; contador <= numeroDeAluno; contador++) {
    //console.log(contador)

    if(contador == 0){
        console.log("O número atual é zero")
    }else if(contador % 2 == 0){
        console.log("O número " + contador + " é par")
    }else{
        console.log(`O número ${contador} é Impar`)
    }
}