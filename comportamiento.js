function actualizar(unElemem) {
  document.getElementById('spanNombre').innerHTML=unElemem.nombre;
  document.getElementById('spanApellido').innerHTML=unElemem.apellido;
  document.getElementById('spanEdad').innerHTML=unElemem.edad;
  document.getElementById('spanPers').innerHTML=unElemem.pers;
  document.getElementById('imgGrande').src=unElemem.img;

  var cuerp = document.getElementById("cuerpo");

  // año de cursada
  switch (unElemem.ano) {
    case 1:
      document.getElementById('spanCurso').innerHTML= "1ro";
      break;
    case 2:
      document.getElementById('spanCurso').innerHTML= "2do";
      break;
    case 3:
      document.getElementById('spanCurso').innerHTML= "3ro";
      break;
    case 4:
      document.getElementById('spanCurso').innerHTML= "Sup";
      break;
    default:
      document.getElementById('spanCurso').innerHTML= "N/A";
      break;
  }

  // faccion
  switch (unElemem.fac) {
    case 'araña':
      cuerp.style.backgroundColor = '#555555';
      document.getElementById('spanFaccion').innerHTML= '<i class="em em-spider"></i>';
      break;
    case 'unicornio':
      cuerp.style.backgroundColor = '#450063';
      document.getElementById('spanFaccion').innerHTML= '<i class="em em-unicorn_face"></i>';
      break;
    case 'zorra':
      cuerp.style.backgroundColor = '#ce2002';
      document.getElementById('spanFaccion').innerHTML= '<i class="em em-fox_face"></i>';
      break;
    case 'conejo':
      cuerp.style.backgroundColor = '#f41d6c';
      document.getElementById('spanFaccion').innerHTML= '<i class="em em-rabbit"></i>';
      break;
    default:
      cuerp.style.backgroundColor = '#252525';
      document.getElementById('spanFaccion').innerHTML= "N/A";
      break;
  }

  // signo zodiacal
  switch (unElemem.sig) {
    case 1:
      document.getElementById('spanSigno').innerHTML= '<i class="em em-aries"></i>';
      break;
    case 2:
      document.getElementById('spanSigno').innerHTML= '<i class="em em-taurus"></i>';
      break;
    case 3:
      document.getElementById('spanSigno').innerHTML= '<i class="em em-gemini"></i>';
      break;
    case 4:
      document.getElementById('spanSigno').innerHTML= '<i class="em em-cancer"></i>';
      break;
    case 5:
      document.getElementById('spanSigno').innerHTML= '<i class="em em-leo"></i>';
      break;
    case 6:
      document.getElementById('spanSigno').innerHTML= '<i class="em em-virgo"></i>';
      break;
    case 7:
      document.getElementById('spanSigno').innerHTML= '<i class="em em-libra"></i>';
      break;
    case 8:
      document.getElementById('spanSigno').innerHTML= '<i class="em em-scorpius"></i>';
      break;
    case 9:
      document.getElementById('spanSigno').innerHTML= '<i class="em em-sagittarius"></i>';
      break;
    case 10:
      document.getElementById('spanSigno').innerHTML= '<i class="em em-capricorn"></i>';
      break;
    case 11:
      document.getElementById('spanSigno').innerHTML= '<i class="em em-aquarius"></i>';
      break;
    case 12:
      document.getElementById('spanSigno').innerHTML= '<i class="em em-pisces"></i>';
      break;
    default:
      document.getElementById('spanSigno').innerHTML= 'N/A';
      break;
    }
}

function agregarElementoGaleria(unElemento) {
  var i = document.createElement("img");
  i.src = unElemento.img;
  var nuevaImg = document.createElement("div");
  nuevaImg.className = "elemGal";
  nuevaImg.appendChild(i);
  var param = unElemento;
  nuevaImg.onclick = function() { actualizar(param) };
  document.getElementById("navbarLeft").appendChild(nuevaImg);
}
for (i=0;i<l.length;i++) {
  agregarElementoGaleria(l[i]);
}
actualizar(l[0]);

var u=1;
var z=1;
var c=1;
var a=1;
for (i=0;i<l.length;i++) {
  switch (l[i].fac) {
    case 'unicornio':
    u++;break;
    case 'araña':
    a++;break;
    case 'conejo':
    c++;break;
    case 'zorra':
    z++;
    default:
    ;
  }
}
console.log("z=",z);
console.log("a=",a);
console.log("c=",c);
console.log("u=",u);
