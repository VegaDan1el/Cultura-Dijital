/* SCROLL */
function scrollToSection(id){
  document.getElementById(id).scrollIntoView({behavior:'smooth'});
}

/* PROGRESO */
let progreso = 0;

function accion(){
  if(progreso < 100){
    progreso += 10;
    document.getElementById("barra").style.width = progreso + "%";
    document.getElementById("nivel").innerText = "Progreso: " + progreso + "%";
  }
}

/* QUIZ */
const preguntas = [
  {q:"¿Qué ayuda al planeta?", op:["Reciclar","Contaminar"], c:0},
  {q:"¿Qué debemos cuidar?", op:["Naturaleza","Basura"], c:0}
];

let i = 0;

function cargarPregunta(){
  let p = preguntas[i];
  document.getElementById("pregunta").innerText = p.q;

  let html = "";
  p.op.forEach((op,index)=>{
    html += `<button onclick="responder(${index})">${op}</button>`;
  });

  document.getElementById("respuestas").innerHTML = html;
}

function responder(r){
  if(r === preguntas[i].c){
    document.getElementById("resultado").innerText = "✅ Correcto";
  } else {
    document.getElementById("resultado").innerText = "❌ Incorrecto";
  }

  i++;
  if(i < preguntas.length){
    setTimeout(cargarPregunta,1000);
  } else {
    document.getElementById("pregunta").innerText = "🎉 Terminaste";
    document.getElementById("respuestas").innerHTML = "";
  }
}

cargarPregunta();

/* FORM */
document.getElementById("form").addEventListener("submit", function(e){
  e.preventDefault();
  document.getElementById("mensaje").innerText = "🌱 Gracias por tu compromiso";
});
