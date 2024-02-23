const piadas = [
    "Porque é que não existem medicamentos na Etiópia? Porque não podem ser tomados em jejum.",
    "Qual a diferença entre um padre e um tenista? As bolas com que o tenista brinca têm pelinhos.",
    "Qual é a parte mais dura de um vegetal? A cadeira de rodas.",
    "O que faz um leproso no banho? Nestum",
    "Porque é que a Anne Frank não acabou o diário? Problemas de concentração.",
    "Porque é que o Hitler se suicidou? Porque viu a conta do gás.",
    "Sabias que sem árabes não tinha acontecido o 11/9? Tinha acontecido o XI/IX.",
    "Qual é a diferença entre uma pizza e um judeu? A pizza quando vai ao forno não grita."
]
let meuBozo = document.getElementById("meuBozo")
let minhaM = document.getElementById("minhaM")

meuBozo.addEventListener('click', function(){

    const random = piadas[Math.floor(Math.random() * piadas.length)]
    
    minhaM.textContent = random
})