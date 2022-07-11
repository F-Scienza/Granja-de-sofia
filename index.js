var vp = document.getElementById('villap');
var papel = vp.getContext('2d');
document.addEventListener('keydown', moverSofi);

var teclas = {
	UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGHT: 39,
};

var cantidad = aleatorio(0, 6);
var cantidadCerdos = aleatorio(0, 7);
var cantidadPollos = aleatorio(2, 8);
var cantidadVacas = aleatorio(2, 5);

var fondo = { url: 'tile.webp', cargaOk: false };
var vaca = { url: 'vaca.webp', cargaOk: false }; // definicion jason. ibjeto literal
var pollo = { url: 'pollo.webp', cargaOk: false };
var cerdo = { url: 'cerdo.webp', cargaOk: false };
var sofi = { url: 'sofi.png', cargaOk: false };

var xSofi = 330;
var ySofi = 400;

var xVaca = new Array();
var yVaca = new Array();

var xCerdo = new Array();
var yCerdo = new Array();

var xPollo = new Array();
var yPollo = new Array();

function moverSofi(evento) {
	var movimiento = 20;
	switch (evento.keyCode) {
		case teclas.UP:
			ySofi = ySofi - movimiento;
			dibujar(xSofi, ySofi);
			break;

		case teclas.DOWN:
			ySofi = ySofi + movimiento;
			dibujar(xSofi, ySofi);
			break;

		case teclas.LEFT:
			xSofi = xSofi - movimiento;
			dibujar(xSofi, ySofi);

			break;

		case teclas.RIGHT:
			xSofi = xSofi + movimiento;
			dibujar(xSofi, ySofi);
			break;

		default:
			console.log('otra tecla wei');
	}
}

fondo.imagen = new Image();
fondo.imagen.src = fondo.url; // cargamos la imagen tile.png
fondo.imagen.addEventListener('load', cargarFondo); // "load" usamos para cargar la imagen

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener('load', cargarVacas);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener('load', cargarPollos);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener('load', cergarCerdo);

sofi.imagen = new Image();
sofi.imagen.src = sofi.url;
sofi.imagen.addEventListener('load', cargarSofi);

function cargarFondo() {
	fondo.cargaOk = true;
	dibujar();
}
function cargarVacas() {
	vaca.cargaOk = true;
	mantenerPosicion();
}
function cargarPollos() {
	pollo.cargaOk = true;
	mantenerPosicion();
}
function cergarCerdo() {
	cerdo.cargaOk = true;
	mantenerPosicion();
}
function cargarSofi() {
	sofi.cargaOk = true;
	dibujar();
}

function mantenerPosicion() {
	if (vaca.cargaOk) {
		for (var i = 0; i < cantidadVacas; i++) {
			var x = aleatorio(0, 6);
			var y = aleatorio(0, 6);
			x = x * 70;
			y = y * 70;
			xVaca[i] = x;
			yVaca[i] = y;
		}
	}
	if (cerdo.cargaOk) {
		for (var i = 0; i < cantidadCerdos; i++) {
			var x = aleatorio(0, 6);
			var y = aleatorio(0, 6);
			x = x * 70;
			y = y * 70;
			xCerdo[i] = x;
			yCerdo[i] = y;
		}
	}
	if (pollo.cargaOk) {
		for (var i = 0; i < cantidadPollos; i++) {
			var x = aleatorio(0, 6);
			var y = aleatorio(0, 6);
			x = x * 70;
			y = y * 70;
			xPollo[i] = x;
			yPollo[i] = y;
		}
	}
	dibujar();
}
function dibujar() {
	if (fondo.cargaOk) {
		papel.drawImage(fondo.imagen, 0, 0);
	}
	if (vaca.cargaOk) {
		for (var i = 0; i < 10; i++) {
			papel.drawImage(vaca.imagen, xVaca[i], yVaca[i]);
		}
	}
	if (cerdo.cargaOk) {
		for (var i = 0; i < 10; i++) {
			papel.drawImage(cerdo.imagen, xCerdo[i], yCerdo[i]);
		}
	}
	if (pollo.cargaOk) {
		for (var i = 0; i < 10; i++) {
			papel.drawImage(pollo.imagen, xPollo[i], yPollo[i]);
		}
	}
	if (sofi.cargaOk) {
		papel.drawImage(sofi.imagen, xSofi, ySofi);
	}
}

function aleatorio(min, max) {
	var resultado;
	resultado = Math.floor(Math.random() * (max - min + 1)) + min;
	return resultado;
}
