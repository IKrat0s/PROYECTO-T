// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Hace tiempo que mi vida no tiene valor", time: 31.8 },
  { text: "Sera porque dentro mio llevo un gran dolor?", time: 37 },
  { text: "Tu decidiste no volver", time: 43 },
  { text: "Aquella noche yo mori", time: 48 },
  { text: "Desde esa noche nunca mas volvi a reir", time: 54 },
  { text: "Llevo dentro el castigo de no serte fiel", time: 58.5 },
  { text: "Parece que ahora si entendi", time: 65 },
  { text: "Que te he perdido para siempre", time: 71 },
  { text: "Como te digo que me enseñes a vivir?", time: 80 },
  { text: "Si cada noche me muero de recordar", time: 87 },
  { text: "TU gran amor oh, oh, oh TU triste adios oh, oh, oh", time: 92 },
  { text: "¡Ay! tu cariño aun vive en mi", time: 98 },
  { text: "No puedo mas oh, oh, oh VIVIR SIN TI oh, oh, oh", time: 103 },
  { text: "LEJOS DE TI, voy a morir", time: 108 },
  { text: "LEJOS DE TI... voy a morir", time: 114 },
  { text: "¡Ay! como duele VIVIR SIN TI", time: 119 },
  { text: "LEJOS DE TI voy a morir", time: 124 },
  { text: "¡Ay! como duele VIVIR SIN TI", time: 129 },
  { text: "Hace tiempo que mi vida no tiene valor", time: 172 },
  { text: "Sera porque dentro mio llevo una gran dolor", time: 177 },
  { text: "Tu decidiste no volver", time: 183 },
  { text: "Aquella noche yo mori", time: 188 },
  { text: "Desde esa noche nunca mas volvi a reir", time: 194 },
  { text: "Llevo dentro el castigo de no serte fiel", time: 199 },
  { text: "Parece que ahora si entendi que te he perdido para siempre", time: 205 },
  { text: "Como te digo que me enseñes a vivir", time: 217 },
  { text: "Si cada noche me muero de recordar", time: 224 },
  { text: "TU gran amor oh, oh, oh TU triste adios oh, oh, oh", time: 229 },
  { text: "¡Ay! tu cariño aun vive en mi", time: 235 },
  { text: "No puedo mas oh, oh, oh VIVIR SIN TI, oh, oh, oh", time: 240 },
  { text: "Ay tu cariño aun vive en mi", time: 245 },
  { text: "LEJOS DE TI, voy a morir", time: 249 },
  { text: "Ay como duele VIVIR SIN TI", time: 256 },
  { text: "LEJOS DE TI, voy a morir", time: 261 },
  { text: "¡Ay! como duele ESTA VIDA SIN TI", time: 267 },
  { text: "Quiero solo escuchar tu voz", time: 273 },
  { text: "Y mirarte solo un minuto mas", time: 278 },
  { text: "LEJOS DE TI... voy a morir", time: 282 },
  { text: "¡Ay! como duele ESTA VIDA SIN TI", time: 288 },
  { text: "Quiero solo escuchar tu voz", time: 326 },
  { text: "Y mirarte solo un minuto mas...", time: 331 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);