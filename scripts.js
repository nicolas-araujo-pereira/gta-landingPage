const imagemPersonagem = document.querySelector(".personagem")
const nomePersonagem = document.querySelector(".nome")
const botoesPersonagem = document.querySelectorAll(".personagemBotao")

const dadosPersonagens = {
        lucia: {
            nome: "lucia",
            imagem: `./Assets/lucia.png`,
            cor: "#ff3cac"
        },

        jason: {
            nome: "jason",
            imagem: `./Assets/jason.png`,
            cor: "#00b2c9"
        },

        cj: {
            nome: "cj",
            imagem: `./Assets/cj.png`,
            cor: "#7ed7ac"
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