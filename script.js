function gerarBilhete() {
    var nome = document.getElementById('nome').value;
    var signo = document.getElementById('signo').value;
    var data = document.getElementById('data').value;

    var numeros = '';
    for (var i = 0; i < 6; i++) {
        numeros += Math.floor(Math.random() * 60) + 1 + ' ';
    }

    document.getElementById('bilhete').classList.remove('hidden');
    document.getElementById('numeros').textContent = numeros;
}
