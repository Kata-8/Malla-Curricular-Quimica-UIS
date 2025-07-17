const materias = [
  // Semestre 1
  { codigo: "25247", nombre: "Química I", creditos: 4, semestre: 1, requisitos: [] },
  { codigo: "24705", nombre: "Laboratorio I de Química", creditos: 2, semestre: 1, requisitos: [] },
  { codigo: "23427", nombre: "Taller de Lenguaje", creditos: 3, semestre: 1, requisitos: [] },
  { codigo: "23424", nombre: "Inglés I", creditos: 4, semestre: 1, requisitos: [] },
  { codigo: "22979", nombre: "Álgebra Lineal I", creditos: 4, semestre: 1, requisitos: [] },
  { codigo: "20252", nombre: "Cálculo I", creditos: 4, semestre: 1, requisitos: [] },
  { codigo: "29205", nombre: "Cátedra UIS", creditos: 0, semestre: 1, requisitos: [] },

  // Semestre 2
  { codigo: "25248", nombre: "Química II", creditos: 4, semestre: 2, requisitos: ["25247"] },
  { codigo: "24706", nombre: "Laboratorio II de Química", creditos: 3, semestre: 2, requisitos: ["25247"] },
  { codigo: "24704", nombre: "Estadística para Químicos", creditos: 3, semestre: 2, requisitos: ["20252"] },
  { codigo: "22950", nombre: "Física I", creditos: 4, semestre: 2, requisitos: ["22979", "20252"] },
  { codigo: "20253", nombre: "Cálculo II", creditos: 4, semestre: 2, requisitos: ["20252", "22979"] },

  // Semestre 3
  { codigo: "24707", nombre: "Análisis Químico I", creditos: 3, semestre: 3, requisitos: ["24704", "25248"] },
  { codigo: "24708", nombre: "Laboratorio I de Análisis Químico", creditos: 3, semestre: 3, requisitos: ["24704", "25248"] },
  { codigo: "23425", nombre: "Inglés II", creditos: 4, semestre: 3, requisitos: ["23424"] },
  { codigo: "22953", nombre: "Física II", creditos: 4, semestre: 3, requisitos: ["22950"] },
  { codigo: "20254", nombre: "Cálculo III", creditos: 4, semestre: 3, requisitos: ["20253"] },
  { codigo: "21936", nombre: "Educación Sexual", creditos: 3, semestre: 3, requisitos: [] },

  // Semestre 4
  { codigo: "24710", nombre: "Análisis Químico II", creditos: 4, semestre: 4, requisitos: ["24707"] },
  { codigo: "24711", nombre: "Laboratorio II de Análisis Químico", creditos: 2, semestre: 4, requisitos: ["24707"] },
  { codigo: "24709", nombre: "Estructuras y Enlaces", creditos: 4, semestre: 4, requisitos: ["25248", "20253"] },
  { codigo: "22956", nombre: "Física III", creditos: 4, semestre: 4, requisitos: ["22953"] },
  { codigo: "20255", nombre: "Ecuaciones Diferenciales", creditos: 4, semestre: 4, requisitos: ["20254"] },
  { codigo: "23423", nombre: "Cultura Física y Deportes", creditos: 1, semestre: 4, requisitos: [] },
  { codigo: "23670", nombre: "Primeros Auxilios", creditos: 3, semestre: 4, requisitos: [] },
  { codigo: "23426", nombre: "Inglés III", creditos: 4, semestre: 4, requisitos: ["23425"] },

  // Semestre 5
  { codigo: "24716", nombre: "Análisis Químico III", creditos: 4, semestre: 5, requisitos: ["24710"] },
  { codigo: "24717", nombre: "Laboratorio III de Análisis Químico", creditos: 2, semestre: 5, requisitos: ["24710"] },
  { codigo: "24714", nombre: "Química Orgánica I", creditos: 5, semestre: 5, requisitos: ["24707"] },
  { codigo: "24715", nombre: "Laboratorio I de Química Orgánica", creditos: 3, semestre: 5, requisitos: ["24707"] },
  { codigo: "24713", nombre: "Seminario I", creditos: 1, semestre: 5, requisitos: [] },
  { codigo: "24712", nombre: "Introducción a la Química Cuántica", creditos: 4, semestre: 5, requisitos: ["20255", "24709"] },
  { codigo: "23057", nombre: "Inglés IV", creditos: 4, semestre: 5, requisitos: ["23426"] },

  // Semestre 6
  { codigo: "24721", nombre: "Química Orgánica II", creditos: 5, semestre: 6, requisitos: ["24714"] },
  { codigo: "24722", nombre: "Laboratorio II de Química Orgánica", creditos: 3, semestre: 6, requisitos: ["24714", "24715"] },
  { codigo: "24720", nombre: "Biología Celular", creditos: 3, semestre: 6, requisitos: ["24714"] },
  { codigo: "24718", nombre: "Termodinámica", creditos: 4, semestre: 6, requisitos: ["24712"] },
  { codigo: "24719", nombre: "Laboratorio I de Fisicoquímica", creditos: 3, semestre: 6, requisitos: ["24712"] },
  { codigo: "23058", nombre: "Inglés V", creditos: 4, semestre: 6, requisitos: ["23057"] },

  // Semestre 7
  { codigo: "24727", nombre: "Química Inorgánica I", creditos: 3, semestre: 7, requisitos: ["24712"] },
  { codigo: "24728", nombre: "Laboratorio I de Química Inorgánica", creditos: 2, semestre: 7, requisitos: ["24712"] },
  { codigo: "24725", nombre: "Bioquímica", creditos: 4, semestre: 7, requisitos: ["24720"] },
  { codigo: "24726", nombre: "Laboratorio de Bioquímica", creditos: 3, semestre: 7, requisitos: ["24720"] },
  { codigo: "24723", nombre: "Equilibrio y Cinética", creditos: 3, semestre: 7, requisitos: ["24718"] },
  { codigo: "24724", nombre: "Laboratorio II de Fisicoquímica", creditos: 3, semestre: 7, requisitos: ["24718", "24719"] },

  // Semestre 8
  { codigo: "24732", nombre: "Química Inorgánica II", creditos: 3, semestre: 8, requisitos: ["24727"] },
  { codigo: "24733", nombre: "Laboratorio II de Química Inorgánica", creditos: 3, semestre: 8, requisitos: ["24727", "24728"] },
  { codigo: "24734", nombre: "Química Ambiental", creditos: 3, semestre: 8, requisitos: ["24707"] },
  { codigo: "24731", nombre: "Seminario II", creditos: 3, semestre: 8, requisitos: ["24713"] },
  { codigo: "24729", nombre: "Tecnología Química", creditos: 4, semestre: 8, requisitos: ["24727"] },
  { codigo: "24730", nombre: "Laboratorio de Tecnología Química", creditos: 2, semestre: 8, requisitos: ["24728"] },

  // Semestre 9
  { codigo: "22975", nombre: "Trabajo de Grado I", creditos: 3, semestre: 9, requisitos: ["24731"] },
  { codigo: "22109", nombre: "Ética Ciudadana", creditos: 3, semestre: 9, requisitos: ["29205"] },
  { codigo: "20411", nombre: "Análisis y Tratamiento de Datos", creditos: 4, semestre: 9, requisitos: [] },

  // Semestre 10
  { codigo: "Electiva2", nombre: "Electiva II", creditos: 4, semestre: 10, requisitos: [] },
  { codigo: "Electiva3", nombre: "Electiva III", creditos: 4, semestre: 10, requisitos: [] },
  { codigo: "22977", nombre: "Trabajo de Grado II", creditos: 7, semestre: 10, requisitos: ["22975"] },

];

const aprobadas = new Set();

function crearMalla() {
  const contenedor = document.getElementById('malla');
  const contador = document.getElementById('contador-creditos');
  const semestres = [...new Set(materias.map(m => m.semestre))].sort((a, b) => a - b);

  semestres.forEach(sem => {
    const col = document.createElement('div');
    col.className = 'semestre';
    col.innerHTML = `<h2>Semestre ${sem}</h2>`;

    materias
      .filter(m => m.semestre === sem)
      .forEach(m => {
        const btn = document.createElement('button');
        btn.className = 'materia';
        btn.id = m.codigo;
        btn.innerHTML = `
          <strong>${m.nombre}</strong><br>
          <em>Código: ${m.codigo}<br>
          Créditos: ${m.creditos}</em>
        `;
        btn.addEventListener('click', () => alternarMateria(m.codigo));
        col.appendChild(btn);
      });

    contenedor.appendChild(col);
  });

  actualizarEstadoBotones();
  actualizarContador(); // Inicializa el contador
}

function alternarMateria(codigo) {
  const boton = document.getElementById(codigo);

  if (aprobadas.has(codigo)) {
    aprobadas.delete(codigo);
    boton.classList.remove('aprobada');
  } else {
    aprobadas.add(codigo);
    boton.classList.add('aprobada');
  }

  actualizarEstadoBotones();
  actualizarContador();
}

function actualizarEstadoBotones() {
  materias.forEach(m => {
    const btn = document.getElementById(m.codigo);
    if (!aprobadas.has(m.codigo)) {
      const habilitada = m.requisitos.every(r => aprobadas.has(r));
      btn.disabled = !habilitada;
    } else {
      btn.disabled = false; // mantener habilitado si está aprobado
    }
  });
}

function actualizarContador() {
  const contador = document.getElementById('contador-creditos');
  const total = Array.from(aprobadas)
    .map(cod => materias.find(m => m.codigo === cod)?.creditos || 0)
    .reduce((a, b) => a + b, 0);
  contador.textContent = `Créditos aprobados: ${total}`;
}

window.onload = crearMalla;
