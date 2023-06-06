//Slider

var imagenes = ["img/taxis.png",
                "img/Porvenir.png",
                "img/huawei.png",
                "img/ibm.png",
                "img/Universidad.png",
                "img/mintic.png"
               ];

document.Imagen.src = imagenes[0];

var SliderIzquierdo = document.querySelector(".slider-izquierdo");
var SliderDerecho = document.querySelector(".slider-derecho");
var Contador = 0;

function MoverDerecha()
  {
     Contador++;
     if(Contador > imagenes.length - 1)
        {
           Contador = 0;
        }
     document.Imagen.src = imagenes[Contador];
  }

  // Establecer el tamaño de la imagen
  document.Imagen.style.width = "400px";
  document.Imagen.style.height = "180px"; 

var Intervalo = setInterval(MoverDerecha, 2000);

SliderDerecho.addEventListener("click", function()
  {
     clearInterval(Intervalo);
     MoverDerecha();
     Intervalo = setInterval(MoverDerecha, 2000);
  });


function MoverIzquierda()
  {
     Contador--;
     if(Contador < 0)
       {
         Contador = imagenes.length - 1;
       }
     document.Imagen.src = imagenes[Contador];
  }
SliderIzquierdo.addEventListener("click", function()
  {
     clearInterval(Intervalo);
     MoverIzquierda();
     Intervalo = setInterval(MoverDerecha, 3000);
  });
  