let idade = 17
let carteira = false
let auto = true

if (idade < 18) {
    if (auto) {
        console.log("Você é menor de idade porém pode estar no local.")
    } else {
        console.log("Você é menor de idade e não pode estar no local")
    }
} else {
    if (carteira && auto) {
        console.log("Você tem carteira e pode estar no local.")
    } else if (carteira && !auto) {
        console.log("Você tem carteira porém não pode estar no local.")
    } else if (!carteira && auto) {
        console.log("Você não tem carteira e não pode estar no local.")
    } else {
        console.log("Você não tem carteira e nem pode estar no local.")
    }
}
