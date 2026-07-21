// ============================================================
// Sistemas de Fuerza Industrial — Catálogo Integrado Completo
// ============================================================

const SFI = {
  whatsappNumber: "528115712636",
  email: "soporte.rentas01@sfindustrial.mx"
};

// Levantamiento completo de inventario integrado desde excel
const EQUIPOS = [
  { "tipo": "Generador", "marca": "Olympian", "modelo": "D50P1", "cap_valor": 50, "cap_unidad": "KW", "traslado": "Remolque", "estatus": "DISPONIBLE", "voltaje": "440V", "cambio_volt": true, "economico": 1, "ficha": { "motor_marca": "PERKINS", "combustible_lts": 550, "horas": "208" } },
  { "tipo": "Generador", "marca": "Otomotores", "modelo": "CUMMINS 4BT", "cap_valor": 50, "cap_unidad": "KW", "traslado": "Remolque", "estatus": "DISPONIBLE", "voltaje": "220V", "cambio_volt": true, "economico": 2, "ficha": { "motor_marca": "CUMMINS", "combustible_lts": 350, "horas": "246" } },
  { "tipo": "Generador", "marca": "Otomotores", "modelo": "6BT", "cap_valor": 120, "cap_unidad": "KW", "traslado": "Remolque", "estatus": "DISPONIBLE", "voltaje": "220V", "cambio_volt": true, "economico": 3, "ficha": { "motor_marca": "CUMMINS", "combustible_lts": 600, "horas": "176" } },
  { "tipo": "Generador", "marca": "Otomotores", "modelo": "LTA10G1", "cap_valor": 250, "cap_unidad": "KW", "traslado": "Remolque", "estatus": "DISPONIBLE", "voltaje": "220V", "cambio_volt": true, "economico": 4, "ficha": { "motor_marca": "CUMMINS", "combustible_lts": 650, "horas": "222" } },
  { "tipo": "Generador", "marca": "Cummins", "modelo": "300DFCB", "cap_valor": 300, "cap_unidad": "KW", "traslado": "Remolque", "estatus": "DISPONIBLE", "voltaje": "440V", "cambio_volt": true, "economico": 5, "ficha": { "motor_marca": "CUMMINS", "combustible_lts": 720, "horas": "204" } },
  { "tipo": "Generador", "marca": "Caterpillar", "modelo": "3406C", "cap_valor": 125, "cap_unidad": "KW", "traslado": "Remolque", "estatus": "DISPONIBLE", "voltaje": "440V", "cambio_volt": true, "economico": 6, "ficha": { "motor_marca": "CATERPILLAR", "combustible_lts": 800, "horas": "229" } },
  { "tipo": "Generador", "marca": "Generac", "modelo": "P1603737", "cap_valor": 15, "cap_unidad": "KW", "traslado": "Remolque", "estatus": "DISPONIBLE", "voltaje": "220V", "cambio_volt": true, "economico": 7, "ficha": { "motor_marca": "PERKINS", "combustible_lts": 135, "horas": "242" } },
  { "tipo": "Generador", "marca": "Generac", "modelo": "PLY180", "cap_valor": 180, "cap_unidad": "KW", "traslado": "Remolque", "estatus": "DISPONIBLE", "voltaje": "480V", "cambio_volt": true, "economico": 8, "ficha": { "motor_marca": "PERKINS", "combustible_lts": 540, "horas": "111" } },
  { "tipo": "Generador", "marca": "Endress", "modelo": "ESE190", "cap_valor": 136, "cap_unidad": "KW", "traslado": "Remolque", "estatus": "DISPONIBLE", "voltaje": "220V", "cambio_volt": true, "economico": 9, "ficha": { "motor_marca": "CUMMINS", "combustible_lts": 700, "horas": "246" } },
  { "tipo": "Generador", "marca": "Endress", "modelo": "ES190CW/AS", "cap_valor": 136, "cap_unidad": "KW", "traslado": "Remolque", "estatus": "DISPONIBLE", "voltaje": "480V", "cambio_volt": true, "economico": 10, "ficha": { "motor_marca": "CUMMINS", "combustible_lts": 650, "horas": "173" } },
  { "tipo": "Generador", "marca": "Endress", "modelo": "ESE190", "cap_valor": 136, "cap_unidad": "KW", "traslado": "Remolque", "estatus": "DISPONIBLE", "voltaje": "440V", "cambio_volt": true, "economico": 11, "ficha": { "motor_marca": "CUMMINS", "combustible_lts": 650, "horas": "145" } },
  { "tipo": "Generador", "marca": "Endress", "modelo": "ISO828", "cap_valor": 30, "cap_unidad": "KW", "traslado": "Remolque", "estatus": "DISPONIBLE", "voltaje": "220V", "cambio_volt": true, "economico": 12, "ficha": { "motor_marca": "YANMAR", "combustible_lts": 180, "horas": "96" } },
  { "tipo": "Generador", "marca": "Endress", "modelo": "ESE25 YW-B", "cap_valor": 18, "cap_unidad": "KW", "traslado": "Remolque", "estatus": "DISPONIBLE", "voltaje": "220V", "cambio_volt": true, "economico": 13, "ficha": { "motor_marca": "YANMAR", "combustible_lts": 100, "horas": "246" } },
  { "tipo": "Generador", "marca": "Endress", "modelo": "ESE65", "cap_valor": 60, "cap_unidad": "KW", "traslado": "Remolque", "estatus": "DISPONIBLE", "voltaje": "220V", "cambio_volt": true, "economico": 14, "ficha": { "motor_marca": "PERKINS", "combustible_lts": 80, "horas": "117" } },
  { "tipo": "Compresor", "marca": "Kaeser", "modelo": "M150", "cap_valor": 375, "cap_unidad": "CFM", "traslado": "Grua", "estatus": "DISPONIBLE", "voltaje": "175 PSI", "cambio_volt": false, "economico": 15, "ficha": { "motor_marca": "DEUTZ", "combustible_lts": 200, "horas": "250" } },
  { "tipo": "Generador", "marca": "Endress", "modelo": "ESE80", "cap_valor": 80, "cap_unidad": "KW", "traslado": "Remolque", "estatus": "DISPONIBLE", "voltaje": "480V", "cambio_volt": true, "economico": 16, "ficha": { "motor_marca": "PERKINS", "combustible_lts": 220, "horas": "200" } },
  { "tipo": "Generador", "marca": "Modasa", "modelo": "X32054F", "cap_valor": 100, "cap_unidad": "KW", "traslado": "Remolque", "estatus": "DISPONIBLE", "voltaje": "220V", "cambio_volt": true, "economico": 17, "ficha": { "motor_marca": "CUMMINS", "combustible_lts": 100, "horas": "250" } },
  { "tipo": "Generador", "marca": "Modasa", "modelo": "KGEC-80", "cap_valor": 80, "cap_unidad": "KW", "traslado": "Remolque", "estatus": "FUERA DE SERVICIO", "voltaje": "220V", "cambio_volt": true, "economico": 18, "ficha": { "motor_marca": "CUMMINS", "combustible_lts": 100, "horas": "190" } },
  { "tipo": "Generador", "marca": "Perkins", "modelo": "Perkins 100", "cap_valor": 100, "cap_unidad": "KW", "traslado": "Remolque", "estatus": "DISPONIBLE", "voltaje": "220V", "cambio_volt": true, "economico": 19, "ficha": { "motor_marca": "PERKINS", "combustible_lts": 400, "horas": "243" } },
  { "tipo": "Generador", "marca": "Generac", "modelo": "PLY300", "cap_valor": 300, "cap_unidad": "KW", "traslado": "Remolque", "estatus": "DISPONIBLE", "voltaje": "220V", "cambio_volt": true, "economico": 20, "ficha": { "motor_marca": "PERKINS", "combustible_lts": 740, "horas": "226" } },
  { "tipo": "Generador", "marca": "Kohler", "modelo": "K100", "cap_valor": 100, "cap_unidad": "KW", "traslado": "Grúa", "estatus": "DISPONIBLE", "voltaje": "480V", "cambio_volt": true, "economico": 21, "ficha": { "motor_marca": "KOHLER", "combustible_lts": 100, "horas": "235" } },
  { "tipo": "Generador", "marca": "Endress", "modelo": "ESE125", "cap_valor": 100, "cap_unidad": "KW", "traslado": "Grua", "estatus": "DISPONIBLE", "voltaje": "480V", "cambio_volt": true, "economico": 22, "ficha": { "motor_marca": "PERKINS", "combustible_lts": 150, "horas": "224" } },
  { "tipo": "Generador", "marca": "Endress", "modelo": "ESE40", "cap_valor": 30, "cap_unidad": "KW", "traslado": "Grúa", "estatus": "DISPONIBLE", "voltaje": "220V", "cambio_volt": true, "economico": 23, "ficha": { "motor_marca": "PERKINS", "combustible_lts": 80, "horas": "152" } },
  { "tipo": "Compresor", "marca": "Kaeser", "modelo": "M100", "cap_valor": 350, "cap_unidad": "CFM", "traslado": "Grua", "estatus": "DISPONIBLE", "voltaje": "100 PSI", "cambio_volt": false, "economico": 24, "ficha": { "motor_marca": "KUBOTA", "combustible_lts": 200, "horas": "184" } },
  { "tipo": "Generador", "marca": "Generac", "modelo": "PLY1200", "cap_valor": 1200, "cap_unidad": "KW", "traslado": "Remolque Tracto", "estatus": "DISPONIBLE", "voltaje": "480V", "cambio_volt": true, "economico": 25, "ficha": { "motor_marca": "PERKINS", "combustible_lts": 3000, "horas": "102" } },
  { "tipo": "Compresor", "marca": "Kaeser", "modelo": "M50", "cap_valor": 185, "cap_unidad": "CFM", "traslado": "Grua", "estatus": "DISPONIBLE", "voltaje": "100 PSI", "cambio_volt": false, "economico": 26, "ficha": { "motor_marca": "KUBOTA", "combustible_lts": 200, "horas": "201" } },
  { "tipo": "Generador", "marca": "Endress", "modelo": "ESE560", "cap_valor": 440, "cap_unidad": "KW", "traslado": "Remolque", "estatus": "DISPONIBLE", "voltaje": "220V", "cambio_volt": true, "economico": 27, "ficha": { "motor_marca": "CUMMINS", "combustible_lts": 900, "horas": "83" } },
  { "tipo": "Generador", "marca": "Cummins Onan", "modelo": "1000DFJD", "cap_valor": 1000, "cap_unidad": "KW", "traslado": "Remolque Tracto", "estatus": "DISPONIBLE", "voltaje": "480V", "cambio_volt": false, "economico": 28, "ficha": { "motor_marca": "CUMMINS", "combustible_lts": 5000, "horas": "249" } },
  { "tipo": "Generador", "marca": "Cummins Power", "modelo": "C1500 D6", "cap_valor": 1500, "cap_unidad": "KW", "traslado": "Remolque Tracto", "estatus": "MANTENIMIENTO", "voltaje": "480V", "cambio_volt": false, "economico": 29, "ficha": { "motor_marca": "CUMMINS", "combustible_lts": 4000, "horas": "45" } },
  { "tipo": "Generador", "marca": "Endress", "modelo": "ESE560", "cap_valor": 500, "cap_unidad": "KW", "traslado": "Grua", "estatus": "DISPONIBLE", "voltaje": "440V", "cambio_volt": true, "economico": 30, "ficha": { "motor_marca": "VOLVO", "combustible_lts": 600, "horas": "232" } },
  { "tipo": "Generador", "marca": "Generac", "modelo": "PLY60", "cap_valor": 60, "cap_unidad": "KW", "traslado": "Grúa", "estatus": "DISPONIBLE", "voltaje": "220V", "cambio_volt": true, "economico": 31, "ficha": { "motor_marca": "PERKINS", "combustible_lts": 350, "horas": "108" } },
  { "tipo": "Torre de Iluminación", "marca": "Generac", "modelo": "VT evo", "cap_valor": 4.2, "cap_unidad": "KVA", "traslado": "Grua", "estatus": "DISPONIBLE", "voltaje": "110V", "cambio_volt": false, "economico": 32, "ficha": { "motor_marca": "KUBOTA", "combustible_lts": 120, "horas": "107" } },
  { "tipo": "Torre de Iluminación", "marca": "Generac", "modelo": "VT evo", "cap_valor": 4.2, "cap_unidad": "KVA", "traslado": "Grua", "estatus": "DISPONIBLE", "voltaje": "110V", "cambio_volt": false, "economico": 33, "ficha": { "motor_marca": "KUBOTA", "combustible_lts": 120, "horas": "250" } },
  { "tipo": "Torre de Iluminación", "marca": "Generac", "modelo": "VT evo", "cap_valor": 4.2, "cap_unidad": "KVA", "traslado": "Grua", "estatus": "DISPONIBLE", "voltaje": "110V", "cambio_volt": false, "economico": 34, "ficha": { "motor_marca": "KUBOTA", "combustible_lts": 120, "horas": "250" } },
  { "tipo": "Torre de Iluminación", "marca": "Generac", "modelo": "VT evo", "cap_valor": 4.2, "cap_unidad": "KVA", "traslado": "Grúa", "estatus": "DISPONIBLE", "voltaje": "110V", "cambio_volt": false, "economico": 35, "ficha": { "motor_marca": "KUBOTA", "combustible_lts": 120, "horas": "250" } },
  { "tipo": "Torre de Iluminación", "marca": "Generac", "modelo": "VT evo", "cap_valor": 4.2, "cap_unidad": "KVA", "traslado": "Remolque", "estatus": "DISPONIBLE", "voltaje": "110V", "cambio_volt": false, "economico": 36, "ficha": { "motor_marca": "KUBOTA", "combustible_lts": 120, "horas": "206" } },
  { "tipo": "Torre de Iluminación", "marca": "Generac", "modelo": "1948", "cap_valor": 4.2, "cap_unidad": "KVA", "traslado": "Grua", "estatus": "DISPONIBLE", "voltaje": "110V", "cambio_volt": false, "economico": 37, "ficha": { "motor_marca": "KUBOTA", "combustible_lts": 120, "horas": "250" } },
  { "tipo": "Torre de Iluminación", "marca": "Generac", "modelo": "Torre 1954", "cap_valor": 4.2, "cap_unidad": "KVA", "traslado": "Remolque", "estatus": "DISPONIBLE", "voltaje": "110V", "cambio_volt": false, "economico": 38, "ficha": { "motor_marca": "KUBOTA", "combustible_lts": 120, "horas": "239" } },
  { "tipo": "Generador", "marca": "Generac", "modelo": "GMM56P/SNE", "cap_valor": 40, "cap_unidad": "KW", "traslado": "Remolque", "estatus": "DISPONIBLE", "voltaje": "220V", "cambio_volt": true, "economico": 39, "ficha": { "motor_marca": "PERKINS", "combustible_lts": 80, "horas": "249" } },
  { "tipo": "Generador", "marca": "Generac", "modelo": "GMM70P/SNE", "cap_valor": 60, "cap_unidad": "KW", "traslado": "Remolque", "estatus": "DISPONIBLE", "voltaje": "220V", "cambio_volt": true, "economico": 40, "ficha": { "motor_marca": "PERKINS", "combustible_lts": 80, "horas": "249" } },
  { "tipo": "Generador", "marca": "Generac", "modelo": "GMM70P/SNE", "cap_valor": 60, "cap_unidad": "KW", "traslado": "Grua", "estatus": "DISPONIBLE", "voltaje": "440V", "cambio_volt": true, "economico": 41, "ficha": { "motor_marca": "PERKINS", "combustible_lts": 80, "horas": "238" } },
  { "tipo": "Generador", "marca": "Generac", "modelo": "GMM70P/SNE", "cap_valor": 60, "cap_unidad": "KW", "traslado": "Grua", "estatus": "DISPONIBLE", "voltaje": "220V", "cambio_volt": true, "economico": 43, "ficha": { "motor_marca": "PERKINS", "combustible_lts": 80, "horas": "242" } },
  { "tipo": "Generador", "marca": "Generac", "modelo": "GMM115P/SNE", "cap_valor": 100, "cap_unidad": "KW", "traslado": "Grúa", "estatus": "DISPONIBLE", "voltaje": "220V", "cambio_volt": true, "economico": 44, "ficha": { "motor_marca": "PERKINS", "combustible_lts": 350, "horas": "250" } },
  { "tipo": "Generador", "marca": "Generac", "modelo": "GMM115P/SNE", "cap_valor": 100, "cap_unidad": "KW", "traslado": "Grúa", "estatus": "DISPONIBLE", "voltaje": "220V", "cambio_volt": true, "economico": 45, "ficha": { "motor_marca": "PERKINS", "combustible_lts": 350, "horas": "250" } },
  { "tipo": "Generador", "marca": "Endress", "modelo": "ESE30", "cap_valor": 30, "cap_unidad": "KW", "traslado": "Grúa", "estatus": "DISPONIBLE", "voltaje": "220V", "cambio_volt": true, "economico": 46, "ficha": { "motor_marca": "PERKINS", "combustible_lts": 80, "horas": "246" } },
  { "tipo": "Generador", "marca": "Aggreko", "modelo": "Equipos Importados", "cap_valor": 150, "cap_unidad": "KW", "traslado": "Remolque", "estatus": "DISPONIBLE", "voltaje": "220V", "cambio_volt": true, "economico": 47, "ficha": { "motor_marca": "CUMMINS", "combustible_lts": 950, "horas": "216" } },
  { "tipo": "Torre de Iluminación", "marca": "Magnum", "modelo": "Torre 1076", "cap_valor": 6, "cap_unidad": "KW", "traslado": "Remolque", "estatus": "DISPONIBLE", "voltaje": "110V", "cambio_volt": false, "economico": 49, "ficha": { "motor_marca": "KUBOTA", "combustible_lts": 120, "horas": "250" } },
  { "tipo": "Torre de Iluminación", "marca": "Magnum", "modelo": "Torre 3224", "cap_valor": 6, "cap_unidad": "KW", "traslado": "Remolque", "estatus": "DISPONIBLE", "voltaje": "110V", "cambio_volt": false, "economico": 50, "ficha": { "motor_marca": "KUBOTA", "combustible_lts": 120, "horas": "250" } },
  { "tipo": "Generador", "marca": "Magnum", "modelo": "MMG75D", "cap_valor": 50, "cap_unidad": "KW", "traslado": "Grua", "estatus": "DISPONIBLE", "voltaje": "220V", "cambio_volt": true, "economico": 51, "ficha": { "motor_marca": "JOHN DEERE", "combustible_lts": 600, "horas": "250" } },
  { "tipo": "Torre de Iluminación", "marca": "Generac", "modelo": "Torre 2567", "cap_valor": 4.2, "cap_unidad": "KVA", "traslado": "Grua", "estatus": "DISPONIBLE", "voltaje": "110V", "cambio_volt": false, "economico": 52, "ficha": { "motor_marca": "KUBOTA", "combustible_lts": 100, "horas": "243" } },
  { "tipo": "Torre de Iluminación", "marca": "Generac", "modelo": "Torre 2571", "cap_valor": 4.2, "cap_unidad": "KVA", "traslado": "Grua", "estatus": "DISPONIBLE", "voltaje": "110V", "cambio_volt": false, "economico": 53, "ficha": { "motor_marca": "KUBOTA", "combustible_lts": 100, "horas": "244" } },
  { "tipo": "Torre de Iluminación", "marca": "Generac", "modelo": "Torre 2576", "cap_valor": 4.2, "cap_unidad": "KVA", "traslado": "Grua", "estatus": "DISPONIBLE", "voltaje": "110V", "cambio_volt": false, "economico": 54, "ficha": { "motor_marca": "KUBOTA", "combustible_lts": 120, "horas": "194" } },
  { "tipo": "Torre de Iluminación", "marca": "Generac", "modelo": "Torre 2570", "cap_valor": 4.2, "cap_unidad": "KVA", "traslado": "Grua", "estatus": "DISPONIBLE", "voltaje": "110V", "cambio_volt": false, "economico": 55, "ficha": { "motor_marca": "KUBOTA", "combustible_lts": 100, "horas": "244" } },
  { "tipo": "Torre de Iluminación", "marca": "Generac", "modelo": "Torre 2568", "cap_valor": 4.2, "cap_unidad": "KVA", "traslado": "Grua", "estatus": "DISPONIBLE", "voltaje": "110V", "cambio_volt": false, "economico": 56, "ficha": { "motor_marca": "KUBOTA", "combustible_lts": 100, "horas": "243" } },
  { "tipo": "Torre de Iluminación", "marca": "Generac", "modelo": "Torre 0827", "cap_valor": 4.2, "cap_unidad": "KVA", "traslado": "Remolque", "estatus": "DISPONIBLE", "voltaje": "110V", "cambio_volt": false, "economico": 57, "ficha": { "motor_marca": "KUBOTA", "combustible_lts": 100, "horas": "244" } },
  { "tipo": "Generador", "marca": "Generac", "modelo": "GMM-590", "cap_valor": 500, "cap_unidad": "KW", "traslado": "Remolque", "estatus": "DISPONIBLE", "voltaje": "480V", "cambio_volt": true, "economico": 58, "ficha": { "motor_marca": "VOLVO", "combustible_lts": 2300, "horas": "241" } },
  { "tipo": "Generador", "marca": "Atlas Copco", "modelo": "25KVA", "cap_valor": 20, "cap_unidad": "KW", "traslado": "Remolque", "estatus": "DISPONIBLE", "voltaje": "220V", "cambio_volt": true, "economico": 59, "ficha": { "motor_marca": "ISUZU", "combustible_lts": 100, "horas": "250" } },
  { "tipo": "Generador", "marca": "Generac", "modelo": "S590", "cap_valor": 500, "cap_unidad": "KW", "traslado": "Grua", "estatus": "DISPONIBLE", "voltaje": "480V", "cambio_volt": true, "economico": 60, "ficha": { "motor_marca": "VOLVO", "combustible_lts": 630, "horas": "250" } },
  { "tipo": "Generador", "marca": "MQ", "modelo": "DCA-4555IU4F", "cap_valor": 35, "cap_unidad": "KW", "traslado": "Remolque", "estatus": "DISPONIBLE", "voltaje": "220V", "cambio_volt": true, "economico": 61, "ficha": { "motor_marca": "ISUZU", "combustible_lts": 250, "horas": "250" } },
  { "tipo": "Generador", "marca": "Hipower", "modelo": "HRJW-115T6", "cap_valor": 50, "cap_unidad": "KW", "traslado": "Grua", "estatus": "DISPONIBLE", "voltaje": "240V/440V", "cambio_volt": true, "economico": 62, "ficha": { "motor_marca": "JOHN DEERE", "combustible_lts": 800, "horas": "250" } },
  { "tipo": "Generador", "marca": "Wacker", "modelo": "G50", "cap_valor": 30, "cap_unidad": "KW", "traslado": "Remolque", "estatus": "DISPONIBLE", "voltaje": "12V", "cambio_volt": false, "economico": 63, "ficha": { "motor_marca": "JOHN DEERE", "combustible_lts": 300, "horas": "250" } },
  { "tipo": "Generador", "marca": "MQ", "modelo": "DCA-4555IU4F", "cap_valor": 30, "cap_unidad": "KW", "traslado": "Remolque", "estatus": "DISPONIBLE", "voltaje": "220V/480V", "cambio_volt": true, "economico": 64, "ficha": { "motor_marca": "ISUZU", "combustible_lts": 300, "horas": "250" } },
  { "tipo": "Generador", "marca": "MQ", "modelo": "DCA-25SSIU4F", "cap_valor": 20, "cap_unidad": "KW", "traslado": "Remolque", "estatus": "DISPONIBLE", "voltaje": "220V/440V", "cambio_volt": true, "economico": 65, "ficha": { "motor_marca": "ISUZU", "combustible_lts": 150, "horas": "200" } },
  { "tipo": "Generador", "marca": "MQ", "modelo": "DCA-4555IU4F", "cap_valor": 56, "cap_unidad": "KW", "traslado": "Remolque", "estatus": "DISPONIBLE", "voltaje": "220V/440V", "cambio_volt": true, "economico": 66, "ficha": { "motor_marca": "ISUZU", "combustible_lts": 309, "horas": "200" } },
  { "tipo": "Generador", "marca": "MQ", "modelo": "DCA-25SSIU4F", "cap_valor": 20, "cap_unidad": "KW", "traslado": "Remolque", "estatus": "DISPONIBLE", "voltaje": "220V/440V", "cambio_volt": true, "economico": 68, "ficha": { "motor_marca": "ISUZU", "combustible_lts": 150, "horas": "200" } },
  { "tipo": "Torre de Iluminación", "marca": "Magnum", "modelo": "MLT3060K", "cap_valor": 6, "cap_unidad": "KW", "traslado": "Remolque", "estatus": "DISPONIBLE", "voltaje": "110V", "cambio_volt": false, "economico": 69, "ficha": { "motor_marca": "KUBOTA", "combustible_lts": 120, "horas": "240" } },
  { "tipo": "Generador", "marca": "MQ", "modelo": "MQP240", "cap_valor": 240, "cap_unidad": "KW", "traslado": "Remolque", "estatus": "DISPONIBLE", "voltaje": "220V/440V", "cambio_volt": true, "economico": 70, "ficha": { "motor_marca": "CUMMINS", "combustible_lts": 450, "horas": "200" } },
  { "tipo": "Generador", "marca": "Generac", "modelo": "PLY300", "cap_valor": 300, "cap_unidad": "KW", "traslado": "Remolque", "estatus": "DISPONIBLE", "voltaje": "MANUAL", "cambio_volt": true, "economico": 72, "ficha": { "motor_marca": "PERKINS", "combustible_lts": 740, "horas": "200" } },
  { "tipo": "Generador", "marca": "Godwin", "modelo": "GPH65KW-R", "cap_valor": 50, "cap_unidad": "KW", "traslado": "Remolque", "estatus": "DISPONIBLE", "voltaje": "220V/440V", "cambio_volt": true, "economico": 73, "ficha": { "motor_marca": "JOHN DEERE", "combustible_lts": 500, "horas": "200" } },
  { "tipo": "Generador", "marca": "Godwin", "modelo": "GPH65KW-R", "cap_valor": 50, "cap_unidad": "KW", "traslado": "Remolque", "estatus": "DISPONIBLE", "voltaje": "220V/440V", "cambio_volt": true, "economico": 75, "ficha": { "motor_marca": "JOHN DEERE", "combustible_lts": 500, "horas": "200" } },
  { "tipo": "Generador", "marca": "Ingersoll Rand", "modelo": "G/25", "cap_valor": 100, "cap_unidad": "KW", "traslado": "Remolque", "estatus": "DISPONIBLE", "voltaje": "440V", "cambio_volt": true, "economico": 78, "ficha": { "motor_marca": "JOHN DEERE", "combustible_lts": 600, "horas": "228" } },
  { "tipo": "Generador", "marca": "Endress", "modelo": "ESE5060LW/AS", "cap_valor": 454, "cap_unidad": "KW", "traslado": "Remolque", "estatus": "DISPONIBLE", "voltaje": "MANUAL", "cambio_volt": true, "economico": 80, "ficha": { "motor_marca": "CUMMINS", "combustible_lts": 600, "horas": "200" } },
  { "tipo": "Generador", "marca": "Generac", "modelo": "PLY200", "cap_valor": 200, "cap_unidad": "KW", "traslado": "Remolque", "estatus": "DISPONIBLE", "voltaje": "MANUAL", "cambio_volt": true, "economico": 87, "ficha": { "motor_marca": "PERKINS", "combustible_lts": 472, "horas": "250" } }
];

let currentFilter = "Todos";
let searchQuery = "";

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => links.classList.toggle("open"));
  }

  // Cerrar menú al dar clic en enlaces móviles
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      if (links) links.classList.remove("open");
    });
  });

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
    const textContent = `${item.tipo} ${item.marca || ''} ${item.modelo || ''} ${item.cap_valor || ''}${item.cap_unidad || ''} Económico ${item.economico}`.toLowerCase();
    const matchesSearch = textContent.includes(searchQuery);
    return matchesFilter && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--steel-500);">No se encontraron equipos en esta categoría o búsqueda.</div>`;
  } else {
    container.innerHTML = filtered.map(item => nameplateHTML(item)).join("");
  }

  if (countLabel) {
    countLabel.textContent = `Mostrando ${filtered.length} de ${EQUIPOS.length} unidades registradas`;
  }
}

function nameplateHTML(item) {
  const marca = item.marca || "Especificación Estándar";
  const modelo = item.modelo ? `Modelo ${item.modelo}` : "";
  const cap = `${item.cap_valor} ${item.cap_unidad}`;
  
  let statusClass = "disponible";
  let statusText = item.estatus || "Disponible";

  if (statusText.toLowerCase().includes("mantenimiento")) {
    statusClass = "mantenimiento";
  } else if (statusText.toLowerCase().includes("fuera")) {
    statusClass = "fuera";
  }

  return `
  <div class="nameplate">
    <div class="nameplate-top">
      <div>
        <div class="nameplate-tipo">${item.tipo} (Eco. #${item.economico})</div>
        <div class="nameplate-marca">${marca}</div>
        <div class="nameplate-modelo">${modelo}</div>
      </div>
      <span class="status-pill ${statusClass}"><span class="status-dot"></span>${statusText}</span>
    </div>
    <div class="nameplate-cap">${cap}</div>
    <div class="nameplate-specs">
      <div>Voltaje<br><b>${item.voltaje || "—"}</b></div>
      <div>Traslado<br><b>${item.traslado || "—"}</b></div>
      <div>Ajustable<br><b>${item.cambio_volt ? 'Sí' : 'No'}</b></div>
      <div>Horas Disp.<br><b>${item.ficha?.horas || "200"} hrs</b></div>
    </div>
    <button class="btn btn-outline btn-block" onclick="openFicha(${item.economico})" style="margin-bottom:8px;">Más Información</button>
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
  if (!item) return;
  
  const overlay = document.getElementById("ficha-overlay");
  document.getElementById("ficha-tipo").textContent = `${item.tipo} — Económico #${item.economico}`;
  document.getElementById("ficha-titulo").textContent = item.marca || "Equipo Industrial";
  document.getElementById("ficha-modelo-txt").textContent = item.modelo || "Especificación Estándar";

  const f = item.ficha || {};
  document.getElementById("ficha-body").innerHTML = `
    <div class="ficha-grid">
      <div class="ficha-item"><span>Estatus Comercial</span><b>${item.estatus}</b></div>
      <div class="ficha-item"><span>Capacidad</span><b>${item.cap_valor} ${item.cap_unidad}</b></div>
      <div class="ficha-item"><span>Voltaje Actual</span><b>${item.voltaje || 'N/A'}</b></div>
      <div class="ficha-item"><span>Traslado</span><b>${item.traslado || 'N/A'}</b></div>
      ${f.motor_marca ? `<div class="ficha-item"><span>Marca de Motor</span><b>${f.motor_marca}</b></div>` : ''}
      ${f.combustible_lts ? `<div class="ficha-item"><span>Tanque Diésel</span><b>${f.combustible_lts} Lts</b></div>` : ''}
      ${f.horas ? `<div class="ficha-item"><span>Horas Disponibles</span><b>${f.horas} Hrs</b></div>` : ''}
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

  const msg = `*COTIZACIÓN DE RENTA - SFI*\n` +
    `*Nombre:* ${nombre}\n` +
    `*Empresa:* ${empresa || 'N/A'}\n` +
    `*Teléfono:* ${telefono}\n` +
    `*Equipo Requerido:* ${tipo}\n` +
    `*Capacidad:* ${capacidad || 'N/A'}\n` +
    `*Duración:* ${duracion || 'N/A'}\n` +
    `*Ubicación Proyecto:* ${ubicacion || 'N/A'}\n` +
    `*Detalles:* ${detalles || 'Sin comentarios adicionales'}`;

  window.open(`https://wa.me/${SFI.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
}
