const manhaBt = document.querySelector('.--botao-manha')
const noiteBt = document.querySelector('.--botao-noite')
const conteudoManha = document.querySelector('.conteudo-manha')
const conteudoNoite = document.querySelector('.conteudo-noite')

manhaBt.addEventListener('click', () => {
    if (manhaBt.classList.contains('opcoes-link-ativo')) {
        manhaBt.classList.remove('opcoes-link-ativo')
        conteudoManha.style.animation = 'fade-out .4s forwards'
        setTimeout(() => {
            conteudoManha.style.display = 'none'
        }, 400)
    } else if (noiteBt.classList.contains('opcoes-link-ativo')) {
        setTimeout(() => {
            manhaBt.classList.add('opcoes-link-ativo')
            conteudoManha.style.display = 'flex'
            conteudoManha.style.animation = 'fade-in .4s forwards'
        }, 150)
        noiteBt.classList.remove('opcoes-link-ativo')
        conteudoNoite.style.animation = 'fade-out .2s forwards'
        setTimeout(() => {
            conteudoNoite.style.display = 'none'
        }, 200)
    } else if (!manhaBt.classList.contains('opcoes-link-ativo') && !noiteBt.classList.contains('opcoes-link-ativo')) {
        manhaBt.classList.add('opcoes-link-ativo')
        conteudoManha.style.display = 'flex'
        conteudoManha.style.animation = 'fade-in .4s forwards'
    }
})

noiteBt.addEventListener('click', () => {
    if (noiteBt.classList.contains('opcoes-link-ativo')) {
        noiteBt.classList.remove('opcoes-link-ativo')
        conteudoNoite.style.animation = 'fade-out .4s forwards'
        setTimeout(() => {
            conteudoNoite.style.display = 'none'
        }, 400)
    } else if (manhaBt.classList.contains('opcoes-link-ativo')) {
        setTimeout(() => {
            noiteBt.classList.add('opcoes-link-ativo')
            conteudoNoite.style.display = 'flex'
            conteudoNoite.style.animation = 'fade-in .4s forwards'
        }, 150)
        manhaBt.classList.remove('opcoes-link-ativo')
        conteudoManha.style.animation = 'fade-out .2s forwards'
        setTimeout(() => {
            conteudoManha.style.display = 'none'
        }, 200)
    } else if (!noiteBt.classList.contains('opcoes-link-ativo') && !manhaBt.classList.contains('opcoes-link-ativo')) {
        noiteBt.classList.add('opcoes-link-ativo')
        conteudoNoite.style.display = 'flex'
        conteudoNoite.style.animation = 'fade-in .4s forwards'
    }
})
