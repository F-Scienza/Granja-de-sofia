/*var z; //formula para obtener aleatorio

for(var i=0; i<10; i++)
{
  z = aleatorio(10, 20);
  document.write(z+"\n");
}
*/
document.addEventListener("keydown", moverSofi)
var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

var vp= document.getElementById("villap");
var papel = vp.getContext("2d");

var cantidad = aleatorio(0,6);
var cantidadCerdos = aleatorio(0,7);
var cantidadPollos = aleatorio(2,8);

var fondo = {url: "tile.webp", cargaOk: false}
var vaca = {url: "vaca.webp", cargaOk: false}// definicion jason. ibjeto literal
var pollo = {url: "pollo.webp", cargaOk: false}
var cerdo = {url: "cerdo.webp", cargaOk: false}
var sofi = {url: "sofi.png", cargaOk: false}

var xSofi=330;
var ySofi=400;

fondo.imagen = new Image();// Image es la definicion del objeto
fondo.imagen.src = fondo.url; // cargamos la imagen tile.png
fondo.imagen.addEventListener("load", cargarFondo); // "load" usamos para cargar la imagen

vaca.objeto = new Image;
vaca.objeto.src = vaca.url;
vaca.objeto.addEventListener("load", cargarVacas);

pollo.imagen = new Image;
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

cerdo.imagen = new Image;
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cergarCerdo);

sofi.imagen = new Image;
sofi.imagen.src = sofi.url;
sofi.imagen.addEventListener("load", cargarSofi);

function cargarFondo()
{
  fondo.cargaOk = true;
  dibujar()
}

function cargarVacas()
{
  vaca.cargaOk = true;
  dibujar();
}

function cargarPollos()
{
  pollo.cargaOk = true;
  dibujar();
}

function cergarCerdo()
{
  cerdo.cargaOk = true;
  dibujar();
}

function cargarSofi()
{
  sofi.cargaOk = true;
  dibujar();
}

function dibujar()
{
  if (fondo.cargaOk == true) // no es necesario poner el true porque un if solo funciona si el valor es true
  { papel.drawImage(fondo.imagen, 0,0) }
  if (vaca.cargaOk)
  {
    console.log("vacas:" + cantidad);
    for (var cv=0; cv<cantidad; cv++)
    {
      var x = aleatorio(0,5);
      var y = aleatorio(0,5);
      var x = x * 80;
      var y = y * 80;
      papel.drawImage(vaca.objeto, x,y)
    }
  if (pollo.cargaOk)
    {
      console.log("pollos: " + cantidadPollos);
      for (var cp=0; cp<cantidadPollos; cp++ )
      {
        var x = aleatorio(0,6);
        var y = aleatorio(0,6);
        var x = x * 80;
        var y = y * 80;
        papel.drawImage(pollo.imagen, x,y);
      }
    }
  if (cerdo.cargaOk)
    {
      console.log("cerdos: " + cantidadCerdos);
      for (var cc=0; cc<cantidadPollos; cc++ )
      {
        var x = aleatorio(0,6);
        var y = aleatorio(0,6);
        var x = x * 80;
        var y = y * 80;
        papel.drawImage(cerdo.imagen, x,y);
      }
    if(sofi.cargaOk)
      {
        papel.drawImage(sofi.imagen, xSofi, ySofi)
        moverSofi;
      }
    }
  }
}




function aleatorio(min,max)
{
  var resultado;
  resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado;
}

function moverSofi(evento)
{
  var movimiento = 20;

  switch (evento.keyCode) {
      case teclas.UP:
        ySofi = ySofi - movimiento;
        papel.drawImage(fondo.imagen, 0,0);
        papel.drawImage(sofi.imagen,xSofi,ySofi);

      break;
      case teclas.DOWN:
        ySofi= ySofi + movimiento; ;
        papel.drawImage(fondo.imagen, 0,0);
        papel.drawImage(sofi.imagen,xSofi,ySofi);

      break;
      case teclas.LEFT:
        xSofi = xSofi - movimiento;
        papel.drawImage(fondo.imagen, 0,0);
        papel.drawImage(sofi.imagen, xSofi, ySofi);

      break;
      case teclas.RIGHT:
        xSofi = xSofi + movimiento;
        papel.drawImage(fondo.imagen, 0,0);
        papel.drawImage(sofi.imagen, xSofi, ySofi);

      break;
      default: console.log("otra tecla wei");
    }
}
