// ============================================================
// Sistemas de Fuerza Industrial — Base de Datos y Lógica
// ============================================================

const SFI = {
  whatsappNumber: "528115712636",
  email: "soporte.rentas01@sfindustrial.mx"
};

const EQUIPOS = [
  {
    "tipo": "Generador",
    "marca": "Generac",
    "modelo": "PLY1200",
    "cap_valor": 1200.0,
    "cap_unidad": "KW",
    "voltaje": "480V",
    "frecuencia": "60hz",
    "traslado": "Remolque Tracto",
    "cambio_voltaje": true,
    "cambio_frecuencia": false,
    "economico": 25,
    "ficha": { "motor_marca": "PERKINS", "motor_modelo": "4012-46TA", "combustible_lts": 2656.0, "peso_kg": 17000.0, "amp_max": 1800.0 }
  },
  {
    "tipo": "Generador",
    "marca": "Cummins Onan",
    "modelo": "1000DFJD",
    "cap_valor": 1000.0,
    "cap_unidad": "KW",
    "voltaje": "480V",
    "frecuencia": "60Hz",
    "traslado": "Remolque Tracto",
    "cambio_voltaje": false,
    "cambio_frecuencia": false,
    "economico": 28,
    "ficha": { "motor_marca": "CUMMINS", "motor_modelo": "KTA38G4", "combustible_lts": 4000.0, "amp_max": 1500.0 }
  },
  {
    "tipo": "Generador",
    "marca": "Endress",
    "modelo": "ESE560",
    "cap_valor": 500.0,
    "cap_unidad": "KW",
    "voltaje": "440V",
    "frecuencia": "60Hz",
    "traslado": "Grua",
    "cambio_voltaje": true,
    "cambio_frecuencia": false,
    "economico": 30,
    "ficha": { "combustible_lts": 600.0 }
  },
  {
    "tipo": "Compresor",
    "marca": "Kaeser",
    "modelo": "M150",
    "cap_valor": 375.0,
    "cap_unidad": "CFM",
    "voltaje": "175PSIG",
    "frecuencia": "1500Rpm",
    "traslado": "Grua",
    "cambio_voltaje": false,
    "cambio_frecuencia": false,
    "economico": 15,
    "ficha": { "motor_marca": "DEUTZ", "motor_modelo": "TCD2012", "combustible_lts": 200.0, "peso_kg": 2800.0 }
  },
  {
    "tipo": "Compresor",
    "marca": "Kaeser",
    "modelo": "M50",
    "cap_valor": 185.0,
    "cap_unidad": "CFM",
    "voltaje": "100PSI",
    "frecuencia": "1500Rpm",
    "traslado": "Grua",
    "cambio_voltaje": false,
    "cambio_frecuencia": false,
    "economico": 26,
    "ficha": { "motor_marca": "KUBOTA", "combustible_lts": 70.0 }
  },
  {
    "tipo": "Torre de Iluminación",
    "marca": "Magnum",
    "modelo": "Torre 1076",
    "cap_valor": 6.0,
    "cap_unidad": "KW",
    "voltaje": "110V",
    "frecuencia": "60Hz",
    "traslado": "Remolque",
    "cambio_voltaje": false,
    "cambio_frecuencia": false,
    "economico": 49,
    "ficha": { "motor_marca": "KUBOTA", "combustible_lts": 200.0, "amp_max": 25.0 }
  }
];

let currentFilter = "Todos";
let searchQuery = "";

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => links.classList.toggle("open"));
  }

  initCatalog();
});

function initCatalog() {
  renderGrid();

  document.querySelectorAll(".tb-chip").forEach(chip => {
    chip.addEventListener("click", (e) => {
      document.querySelectorAll(".tb-chip").forEach(c => c.classList.remove("active"));
      e.target.classList.add("active");
      currentFilter = e.target.getAttribute("data-filter") || "Todos";
      renderGrid();
    });
  });

  const searchInput = document.getElementById("catalog-search");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderGrid();
    });
  }
}

function renderGrid() {
  const container = document.getElementById("equip-grid");
  const countLabel = document.getElementById("tb-count");
  if (!container) return;

  const filtered = EQUIPOS.filter(item => {
    const matchesFilter = (currentFilter === "Todos") || (item.tipo.toLowerCase() === currentFilter.toLowerCase());
    const textContent = `${item.tipo} ${item.marca || ''} ${item.modelo || ''} ${item.cap_valor || ''}${item.cap_unidad || ''}`.toLowerCase();
    const matchesSearch = textContent.includes(searchQuery);
    return matchesFilter && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--steel-500);">No se encontraron equipos coincidentes.</div>`;
  } else {
    container.innerHTML = filtered.map(item => nameplateHTML(item)).join("");
  }

  if (countLabel) {
    countLabel.textContent = `Mostrando ${filtered.length} de ${EQUIPOS.length} unidades disponibles`;
  }
}

function nameplateHTML(item) {
  const marca = item.marca || "Especificación Estándar";
  const modelo = item.modelo ? `Modelo ${item.modelo}` : "";
  const cap = `${item.cap_valor} ${item.cap_unidad}`;

  return `
  <div class="nameplate">
    <div class="nameplate-top">
      <div>
        <div class="nameplate-tipo">${item.tipo}</div>
        <div class="nameplate-marca">${marca}</div>
        <div class="nameplate-modelo">${modelo}</div>
      </div>
      <span class="status-pill"><span class="status-dot"></span>Disponible</span>
    </div>
    <div class="nameplate-cap">${cap}</div>
    <div class="nameplate-specs">
      <div>Voltaje<br><b>${item.voltaje || "—"}</b></div>
      <div>Frecuencia<br><b>${item.frecuencia || "—"}</b></div>
      <div>Traslado<br><b>${item.traslado || "—"}</b></div>
      <div>Adaptable<br><b>${item.cambio_voltaje ? 'Voltaje Ajustable' : 'Fijo'}</b></div>
    </div>
    <button class="btn btn-outline btn-block" onclick="openFicha(${item.economico})" style="margin-bottom:8px;">Ver ficha técnica</button>
    <a class="btn btn-primary btn-block" href="#cotizacion" onclick="prellenarCotizacion('${item.tipo}', '${marca}', '${cap}')">Cotizar equipo</a>
  </div>`;
}

function prellenarCotizacion(tipo, marca, cap) {
  document.getElementById("cot-tipo").value = tipo;
  document.getElementById("cot-capacidad").value = cap;
  document.getElementById("cot-detalles").value = `Interesado en cotizar la unidad: ${tipo} ${marca} (${cap}).`;
}

function openFicha(economico) {
  const item = EQUIPOS.find(e => e.economico === economico);
  if (!item || !item.ficha) return;
  
  const overlay = document.getElementById("ficha-overlay");
  document.getElementById("ficha-tipo").textContent = item.tipo;
  document.getElementById("ficha-titulo").textContent = item.marca || "Equipo";
  document.getElementById("ficha-modelo-txt").textContent = item.modelo || "";

  const f = item.ficha;
  document.getElementById("ficha-body").innerHTML = `
    <div class="ficha-grid">
      ${f.motor_marca ? `<div class="ficha-item"><span>Motor</span><b>${f.motor_marca}</b></div>` : ''}
      ${f.motor_modelo ? `<div class="ficha-item"><span>Modelo Motor</span><b>${f.motor_modelo}</b></div>` : ''}
      ${f.combustible_lts ? `<div class="ficha-item"><span>Tanque Diesel</span><b>${f.combustible_lts} L</b></div>` : ''}
      ${f.peso_kg ? `<div class="ficha-item"><span>Peso Aprox</span><b>${f.peso_kg} kg</b></div>` : ''}
      ${f.amp_max ? `<div class="ficha-item"><span>Amperaje Máx</span><b>${f.amp_max} A</b></div>` : ''}
    </div>
  `;
  overlay.classList.add("open");
}

function closeFicha() {
  document.getElementById("ficha-overlay").classList.remove("open");
}

function enviarWhatsApp(e) {
  e.preventDefault();
  const nombre = document.getElementById("cot-nombre").value;
  const empresa = document.getElementById("cot-empresa").value;
  const telefono = document.getElementById("cot-telefono").value;
  const tipo = document.getElementById("cot-tipo").value;
  const capacidad = document.getElementById("cot-capacidad").value;
  const duracion = document.getElementById("cot-duracion").value;
  const ubicacion = document.getElementById("cot-ubicacion").value;
  const detalles = document.getElementById("cot-detalles").value;

  const msg = `*COTIZACIÓN - SFI*\n` +
    `*Nombre:* ${nombre}\n` +
    `*Empresa:* ${empresa || 'N/A'}\n` +
    `*Teléfono:* ${telefono}\n` +
    `*Equipo:* ${tipo}\n` +
    `*Capacidad:* ${capacidad || 'N/A'}\n` +
    `*Ubicación:* ${ubicacion || 'N/A'}\n` +
    `*Detalles:* ${detalles || 'Sin comentarios'}`;

  window.open(`https://wa.me/${SFI.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
}
