const fechar = document.querySelector('#modal-fechar')
const janelaModal = document.querySelector('#janela-modal')
const aviso = document.querySelector('.aviso')
const modalTexto = document.querySelector('.modal-texto')

const dataFinal = new Date("Feb 23 2024").getTime()
const dataFinalOntem = dataFinal - 86400000
const dataFinalAmanha = dataFinal + 86400000
const dataInicial = dataFinal - (86400000 * 5)

var hoje = new Date().getTime()


if (hoje >= dataInicial && hoje < dataFinalAmanha) {
    janelaModal.classList.remove('disabled')
} else {
    janelaModal.classList.add('disabled')
}

if (hoje >= dataFinalOntem && hoje <= dataFinal) {
    modalTexto.innerHTML = `Reunião Geral <span style="text-decoration: underline">AMANHÃ</span> (sexta-feira) às 20h<br>
    Local: Igreja`
} else if (hoje >= dataFinal && hoje <= dataFinalAmanha) {
    modalTexto.innerHTML = `Reunião Geral <span style="text-decoration: underline">HOJE</span> às 20h<br>
    Local: Igreja`
} else {
    modalTexto.innerHTML = aviso.innerHTML
}


function fecharModal() {
    janelaModal.style.animation = 'fade-out .2s forwards';
    setTimeout(() => {
        janelaModal.style.display = 'none'
    }, 200)
}

fechar.onclick = fecharModal
janelaModal.onclick = fecharModal