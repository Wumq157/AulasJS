//let a = 8
//let b = -15
//let c = 3
//let valorX = ``
//
//let delta = (b * b) - (4 * a * c);
//
//let resultadoMais = (((b *2) - b) + (delta / delta)) / (2 * a);
//let ResultadoMenos = (((b *2) - b) - (delta / delta)) / (2 * a);
//
//valorX = `O resultado dessa formula é de X Mais ${resultadoMais} e X Menos ${ResultadoMenos}`
//
//console.log(valorX);
//

let a = 8;
let b = -15;
let c = 3;
let valorX = ``;

let delta = (b * b) - (4 * a * c);

if (delta >= 0) {
    let resultadoMais = (-b + Math.sqrt(delta)) / (2 * a);
    let resultadoMenos = (-b - Math.sqrt(delta)) / (2 * a);

    valorX = `O resultado dessa equação é X = ${resultadoMais} e X = ${resultadoMenos}`;
} else {
    valorX = "A equação não possui solução real.";
}

console.log(valorX);
