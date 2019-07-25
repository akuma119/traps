function trapo(unNombre,unApellido,unaEdad,unAno,unSigno,unaFaccion,unaImg,unaPers) {
  this.nombre = unNombre;
  this.apellido = unApellido;
  this.edad = unaEdad;
  this.ano = unAno;
  this.img = unaImg;
  this.pers = unaPers;
  this.sig = unSigno;
  this.fac = unaFaccion;
}
// l  es la lista de trapos
var l = []
l.push(new trapo("Yuriko","Yagami",14,1,8,'conejo',"imgs/13.jpg",
"Una niña tímida y nerd, excelentes notas, sigue las reglas."));

l.push(new trapo("Ruby","Ranson",15,1,7,'zorra',"imgs/12.jpg",
"Pequeña tsundere amante de los dulces y de los chicos."));

l.push(new trapo("Las","Hanasuku",15,1,5,'',"imgs/ayami.jpg",
"Yami, Yuki, Yana y Yari, cuatrillizas, araña, coneja, unicornia y zorra respectivamente."));

l.push(new trapo("Sara","Ramírez",16,1,12,'unicornio',"imgs/2.jpg",
"Deportista, engreida, competitiva, atrevida, inescrupulosa."));

l.push(new trapo("Luna","Warrington",17,2,11,'zorra',"imgs/9.jpg",
"elegante, femenina, amable, dedicada. Ama los gatos."));

l.push(new trapo("Milfrid","Tyr",16,2,10,'unicornio',"imgs/10.jpg",
"Alegre, diva, coqueta, cantante."));

l.push(new trapo("Valkyria","Vall",15,2,4,'araña',"imgs/5.jpg",
"Competitiva, deportista, solitaria, cortante."+
"<p>Tiene una rivalidad no pedida con Sara Ramírez por ser mejor deportista."+
"<p>Odia a los de la faccion Unicornio por engreidos."));

l.push(new trapo("Canela","Thomas",16,2,6,'araña',"imgs/3.jpg",
"Maternal, cuidadora, amable, hacker y matemática."));

l.push(new trapo("Matilda","Yamato",18,3,4,'araña',"imgs/6.jpg",
"Otaku, pervertida, fujoshi, mirona."));

l.push(new trapo("Merlina","Voyag",17,3,9,'zorra',"imgs/11.jpg",
"Bully, arrogante, mandona, engreida, dictadora."));

l.push(new trapo("Aqua","Lugwin",16,3,3,'unicornio',"imgs/4.jpg",
"DJ, alegre, fiestera, top, popular."));

l.push(new trapo("Colette","Wonderland",17,3,12,'conejo',"imgs/15.jpg",
"Bien portada, adinerada, educada, creyente, pura."));

l.push(new trapo("Kurome","Aishida",18,4,2,'araña',"imgs/7.jpg",
"Correcta, aplicada, secretaria del consejo estudiantil."));

l.push(new trapo("Débora","Kurnicobra",18,4,1,'conejo',"imgs/14.jpg",
"Dulce, amable, ejemplo a seguir, lider del consejo estudiantil."));

l.push(new trapo("Jazmin","Salvi",17,3,8,'unicornio',"imgs/pix.jpg",
"Bromista, poco seria, diva, bailarina, artista, programadora."));

l.push(new trapo("Ganesha","Pictus",26,0,8,'',"imgs/teacher.jpg",
"Profesora, rockera, energica, cool."));

l.push(new trapo("Eugine","Marroc",34,0,12,'',"imgs/doc.jpg",
"doctor muy compasivo y amable, elegante, profesional."));

// chicos
l.push(new trapo("John","Hertz",15,1,1,'conejo',"imgs/c1.jpg",
"Buen chico, amable, educado, timido, inseguro."));

l.push(new trapo("Nyo","Workenhein",16,2,3,'zorra',"imgs/c7.jpg",
"Elocuente, bromista, altanero, skater, popular, sabe lo que quiere."));

l.push(new trapo("Mark","Kiev",17,3,4,'araña',"imgs/c2.jpg",
"callado, poco comunicativo, nerd, morboso, le gustal a ropa interior."));

l.push(new trapo("Lilito","Lugwin",17,3,2,'unicornio',"imgs/c3.jpg",
"Creido, estetico, glamoroso, bailarin, idol, cool."));

l.push(new trapo("Sato","Yamamoto",16,2,11,'conejo',"imgs/c4.jpg",
"correcto, serio, seguidor de las reglas, monitor de pasillo, alumno ejemplar."));

l.push(new trapo("Keitaro","Yamamoto",16,2,11,'zorra',"imgs/c5.jpg",
"rebelde empedernido, problematico, bully, alumno problematico."));

l.push(new trapo("Maximus","Salina",18,3,8,'zorra',"imgs/c6.jpg",
"Serio, agresivo, varonil, cortante, sadico"));