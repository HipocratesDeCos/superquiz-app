function verificar() {
  const respuestasCorrectas = {
    1: ['A', 'B', 'D'],
    2: ['A', 'B']
  };

  const justificaciones = {
    1: "Las tres primeras partes del PGC (marco conceptual, normas de registro y valoración, y cuentas anuales) son de obligado cumplimiento. El cuadro de cuentas (C) es voluntario, aunque sirve como guía obligada para la formulación de las cuentas anuales.",
    2: "La cuenta de pérdidas y ganancias se forma con los grupos 6 (gastos) y 7 (ingresos). Los grupos 8 y 9 van directamente al patrimonio neto, no pasan por resultados."
  };

  let puntaje = 0;
  let resultadoHTML = '';

  document.querySelectorAll('.pregunta').forEach((pregunta, index) => {
    const num = index + 1;
    const seleccionadas = Array.from(pregunta.querySelectorAll('input[type="checkbox"]:checked'))
      .map(cb => cb.value);
    const correctas = respuestasCorrectas[num];
    const esCorrecto = compararArrays(seleccionadas, correctas);

    if (esCorrecto) puntaje++;

    resultadoHTML += `
      <h3 style="color: ${esCorrecto ? '#2e7d32' : '#c62828'}">
        ${esCorrecto ? '✅ ¡Correcto!' : '❌ Incorrecto'}
      </h3>
      <p>${justificaciones[num]}</p>
      <hr style="margin: 15px 0; border: 1px dashed #ccc;">
    `;
  });

  const contenedor = document.getElementById('resultado');
  contenedor.innerHTML = `<strong>Resultado: ${puntaje} de 2 acertadas.</strong><br><br>${resultadoHTML}`;
  contenedor.style.display = 'block';
}

function compararArrays(a, b) {
  return a.length === b.length && a.sort().every((val, i) => val === b.sort()[i]);
}
