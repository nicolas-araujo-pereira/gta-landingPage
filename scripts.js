const imagemPersonagem = document.querySelector(".personagem")
const nomePersonagem = document.querySelector(".nome")
const botoesPersonagem = document.querySelectorAll(".personagens")
const voce = document.querySelector("#voce")

const dadosPersonagens = {
        lucia: {
            nome: "lucia",
            imagem: `./Assets/lucia.png`,
            cor: "pink"
        },

        jason: {
            nome: "jason",
            imagem: `./Assets/jason.png`,
            cor: "blue"
        },

        cj: {
            nome: "cj",
            imagem: `./Assets/cj.png`,
            cor: "green"
        },
    }

function trocaPersonagem(idPersonagem) {
    imagemPersonagem.src = dadosPersonagens[idPersonagem].imagem
    nomePersonagem.textContent = dadosPersonagens[idPersonagem].nome
    nomePersonagem.style.color = dadosPersonagens[idPersonagem].cor 
}

botoesPersonagem.forEach(botao => {
    botao.addEventListener("click", () => {
        trocaPersonagem(botao.id)
    })
})