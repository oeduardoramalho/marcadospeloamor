const fechar = document.querySelector('#modal-fechar')
const janelaModal = document.querySelector('#janela-modal')
const aviso = document.querySelector('.aviso')
const modalTexto = document.querySelector('.modal-texto')

modalTexto.innerHTML = aviso.innerHTML

function fecharModal() {
    janelaModal.style.animation = 'fade-out .2s forwards';
    setTimeout(() => {
        janelaModal.style.display = 'none'
    }, 200)
}

fechar.onclick = fecharModal
janelaModal.onclick = fecharModal