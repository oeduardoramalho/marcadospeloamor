const fechar = document.querySelector('#modal-fechar')
const janelaModal = document.querySelector('#janela-modal')
const aviso = document.querySelector('.aviso')
const modalTexto = document.querySelector('.modal-texto')

const dataFinal = new Date("Feb 23 2024").getTime()
const dataFinalOntem = dataFinal - 86400000
const dataFinalAmanha = dataFinal + 86400000
const dataInicial = dataFinal - (86400000 * 5)

var hoje = new Date().getTime()

modalTexto.innerHTML = aviso.innerHTML
const modalData = modalTexto.querySelector('.data-evento')
const modalDia = modalTexto.querySelector('.dia-evento')

// aparecer e sumir modal nos dias certos
if (hoje >= dataInicial && hoje < dataFinalAmanha) {
    janelaModal.classList.remove('disabled')
    aviso.style.color = 'var(--preto)'
} else if (hoje >= dataFinalAmanha) {
    janelaModal.classList.add('disabled')
    aviso.style.color = 'var(--preto)'
} else {
    janelaModal.classList.add('disabled')
    aviso.style.color = 'var(--vermelho)'
}

// alterar data para "amanha" e "hoje"
if (hoje >= dataFinalOntem && hoje <= dataFinal) {
    modalData.textContent = 'AMANHÃ'
    modalData.setAttribute('style', 'text-decoration: underline')
} else if (hoje >= dataFinal && hoje <= dataFinalAmanha) {
    modalData.textContent = 'HOJE'
    modalData.setAttribute('style', 'text-decoration: underline')
    modalDia.style.display = 'none'
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
