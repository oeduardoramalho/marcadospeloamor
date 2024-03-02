const button = document.querySelector('#voltar-topo');

function aparecerBotao() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        button.style.display = 'block';
        button.style.opacity = '0';
        button.style.animation = 'fade-in .15s forwards';
    } else {
        button.style.display = 'none';
    }
}

function voltarTopo() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = aparecerBotao

button.onclick = voltarTopo