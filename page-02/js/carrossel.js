let qtde_slides = document.querySelectorAll('.slide').length;
let largura_slide = document.querySelector('.slide').clientWidth;
let largura = qtde_slides * largura_slide;
let x = document.querySelector('.slides').style.width = `${largura}px`;
let slideAtual = 0;

function avancarSlide() {
	slideAtual++;
	if(slideAtual > (qtde_slides - 1)) {
		slideAtual = 0;
	}
	atualizarCarrossel();
}

function voltarSlide() {
	slideAtual--;
	if(slideAtual < 0) {
		slideAtual = (qtde_slides - 1);
	}
	atualizarCarrossel();
}

function atualizarCarrossel() {
	let novaMargem = largura_slide * slideAtual;
	document.querySelector('.slides').style.marginLeft = `-${novaMargem}px`;
}

setInterval(avancarSlide, 4000);