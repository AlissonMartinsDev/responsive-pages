let botao = document.querySelector('#botao_menu');
botao.onclick = exibirMenu;

function exibirMenu(){
	let menuLista = document.querySelector('.menu ul');
	if (menuLista.style.display == 'block'){
		menuLista.style.display = 'none';
	}else{
		menuLista.style.display = 'block';
	}
};