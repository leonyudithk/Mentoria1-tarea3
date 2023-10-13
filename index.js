function CalcularNota() {
  // declaración de variable
  const p1 = Number(document.getElementById("p1").value);
  const p2 = Number(document.getElementById("p2").value);
  const p3 = Number(document.getElementById("p3").value);
  const exf = parseFloat(document.getElementById("exf").value);
  const tg = parseFloat(document.getElementById("tgrupal").value);
  const mostrar = document.getElementById("resultado");
  const mostrarp1 = document.getElementById("mp1");
  let mensajeNota;

  // operaciones

  const NotaP = (p1 + p2 + p3) / 3;

  const NotaFinal = NotaP * 0.55 + exf * 0.3 + tg * 0.15;

  //-----------Condicional If-------------------//
  if (NotaFinal > 5) {
    mensajeNota = "Aprobado.....";
  } else if (NotaFinal == 5) {
    mensajeNota = "Casi casi.....";
  } else {
    mensajeNota = "Reprobado.";
  }

  //-------------Condicional Casos----------------------//
  switch (p1) {
    case 1:
      mostrarp1.innerHTML += `<h1>&#128561;</h1>`;
      break;
    case 2:
      mostrarp1.innerHTML += `<h1>&#128532;</h1>`;
      break;
    case 3:
      mostrarp1.innerHTML += `<h1>&#128515;</h1>`;
      break;
    case 4:
      mostrarp1.innerHTML += `<h1>&#128540;</h1>`;
      break;
    case 5:
      mostrarp1.innerHTML += `<h1>&#128542;</h1>`;
      break;
    case 6:
      mostrarp1.innerHTML += `<h1>&#128527;</h1>`;
      break;
    case 7:
      mostrarp1.innerHTML += `<h1>&#128514;</h1>`;
      break;
    case 8:
      mostrarp1.innerHTML += `<h1>&#128515;</h1>`;
      break;
    case 9:
      mostrarp1.innerHTML += `<h1>&#128526;</h1>`;
      break;
    case 10:
      mostrarp1.innerHTML += `<h1>&#128525;</h1>`;
      break;

    default:
      break;
  }
  //Resultado Mostrar
  console.log("la nota 1 es: ", NotaP, NotaFinal, mostrar);
  
  mostrar.textContent = `Su Calificación Final es: ${NotaFinal.toFixed(
    1
  )} usted esta: ${mensajeNota}`;
}
