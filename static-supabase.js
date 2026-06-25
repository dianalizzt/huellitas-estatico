/*
  HUELLITAS - MODO ESTÁTICO
  Este archivo reemplaza Supabase para que el proyecto funcione sin base de datos.
  Los datos se guardan temporalmente en localStorage del navegador.
*/
(function () {
  const DB_KEY = "huellitas_static_db_v3";
  const AUTH_KEY = "huellitas_static_auth_user_v3";

  const today = () => new Date().toISOString().split("T")[0];
  const clone = (value) => JSON.parse(JSON.stringify(value));

  const seed = {
    mascotas: [
      {
        id_mascota: 1,
        nombre: "Luna",
        tipo: "Perro",
        edad: "2 años",
        sexo: "Hembra",
        raza: "Mestiza",
        descripcion: "Perrita tranquila, cariñosa y acostumbrada a convivir con personas.",
        historia: "Fue rescatada cerca del refugio y se recuperó favorablemente. Está lista para encontrar una familia responsable.",
        estado: "disponible"
      },
      {
        id_mascota: 2,
        nombre: "Michi",
        tipo: "Gato",
        edad: "1 año",
        sexo: "Macho",
        raza: "Doméstico mexicano",
        descripcion: "Gato juguetón, curioso y sociable.",
        historia: "Llegó al refugio como cachorro. Ya cuenta con revisión veterinaria básica.",
        estado: "disponible"
      },
      {
        id_mascota: 3,
        nombre: "Rocky",
        tipo: "Perro",
        edad: "4 años",
        sexo: "Macho",
        raza: "Criollo",
        descripcion: "Perro protector, noble y con mucha energía.",
        historia: "Fue abandonado y actualmente se encuentra en proceso de adaptación.",
        estado: "en_proceso"
      },
      {
        id_mascota: 4,
        nombre: "Nube",
        tipo: "Gato",
        edad: "8 meses",
        sexo: "Hembra",
        raza: "Siamés mestizo",
        descripcion: "Gatita pequeña, limpia y muy sociable.",
        historia: "Fue entregada por una familia que no podía cuidarla.",
        estado: "adoptado"
      },
      {
        id_mascota: 5,
        nombre: "Toby",
        tipo: "Perro",
        edad: "3 años",
        sexo: "Macho",
        raza: "Labrador mestizo",
        descripcion: "Convive bien con niños y otros perros.",
        historia: "Rescatado después de permanecer varios días en la calle.",
        estado: "disponible"
      }
    ],
    adoptantes: [
      {
        id_adoptante: 1,
        nombre_completo: "Mariana López Pérez",
        correo: "mariana@example.com",
        telefono: "5512345678",
        direccion: "Av. Central 123, Nezahualcóyotl, Estado de México"
      },
      {
        id_adoptante: 2,
        nombre_completo: "Carlos Hernández Ruiz",
        correo: "carlos@example.com",
        telefono: "5598765432",
        direccion: "Calle Reforma 45, Chimalhuacán, Estado de México"
      },
      {
        id_adoptante: 3,
        nombre_completo: "Ana Martínez Torres",
        correo: "ana@example.com",
        telefono: "5522244455",
        direccion: "Col. Centro, Ciudad de México"
      }
    ],
    empleados: [
      {
        id_empleado: 1,
        numero_empleado: "EMP-0042",
        nombre_completo: "Admin de prueba",
        correo: "admin@huellitas.local",
        telefono: "5500000000",
        direccion: "Refugio Huellitas",
        password: "1234",
        rol: "admin"
      },
      {
        id_empleado: 2,
        numero_empleado: "EMP-0001",
        nombre_completo: "Sofía Ramírez Castillo",
        correo: "sofia@huellitas.local",
        telefono: "5511111111",
        direccion: "Área administrativa",
        password: "admin123",
        rol: "admin"
      },
      {
        id_empleado: 3,
        numero_empleado: "EMP-0002",
        nombre_completo: "Luis García Méndez",
        correo: "luis@huellitas.local",
        telefono: "5522222222",
        direccion: "Área de cuidado animal",
        password: "empleado123",
        rol: "empleado"
      },
      {
        id_empleado: 4,
        numero_empleado: "EMP-0003",
        nombre_completo: "Valeria Sánchez Ortega",
        correo: "valeria@huellitas.local",
        telefono: "5533333333",
        direccion: "Área de seguimiento",
        password: "1234",
        rol: "admin"
      }
    ],
    protocolos: [
      {
        id_protocolo: 1,
        id_adoptante: 1,
        id_mascota: 1,
        animales_actuales: 1,
        motivo: "Quiero darle un hogar estable a una mascota rescatada.",
        seguimiento: true,
        fecha_registro: "2026-06-18"
      },
      {
        id_protocolo: 2,
        id_adoptante: 2,
        id_mascota: 3,
        animales_actuales: 0,
        motivo: "Busco adoptar un perro y tengo espacio suficiente en casa.",
        seguimiento: true,
        fecha_registro: "2026-06-19"
      },
      {
        id_protocolo: 3,
        id_adoptante: 3,
        id_mascota: 2,
        animales_actuales: 2,
        motivo: "Mi familia quiere integrar un gato y hacerse responsable de su cuidado.",
        seguimiento: true,
        fecha_registro: "2026-06-20"
      }
    ],
    entrevistas: [
      {
        id_entrevista: 1,
        id_adoptante: 1,
        id_mascota: 1,
        fecha: "2026-07-05",
        dia: "5",
        hora: "10:00",
        estado: "pendiente",
        fecha_registro: "2026-06-18"
      },
      {
        id_entrevista: 2,
        id_adoptante: 2,
        id_mascota: 3,
        fecha: "2026-07-06",
        dia: "6",
        hora: "12:00",
        estado: "aprobada",
        fecha_registro: "2026-06-19"
      },
      {
        id_entrevista: 3,
        id_adoptante: 3,
        id_mascota: 2,
        fecha: "2026-07-07",
        dia: "7",
        hora: "11:00",
        estado: "rechazada",
        fecha_registro: "2026-06-20"
      }
    ],
    adopciones: [
      {
        id_adopcion: 1,
        id_adoptante: 2,
        id_mascota: 3,
        fecha_adopcion: "2026-06-21",
        estado: "aprobada"
      },
      {
        id_adopcion: 2,
        id_adoptante: 3,
        id_mascota: 2,
        fecha_adopcion: "2026-06-21",
        estado: "rechazada"
      }
    ],
    donaciones: [
      {
        id_donacion: 1,
        nombre_completo: "Persona de prueba",
        correo: "donador@example.com",
        fecha_entrega: "2026-06-25",
        hora_entrega: "12:00",
        mensaje: "Donación de ejemplo para la versión estática.",
        articulos: "Croquetas para perro – Bolsa 3 kg"
      }
    ],
    documentos: []
  };

  const idFields = {
    mascotas: "id_mascota",
    adoptantes: "id_adoptante",
    empleados: "id_empleado",
    protocolos: "id_protocolo",
    entrevistas: "id_entrevista",
    adopciones: "id_adopcion",
    donaciones: "id_donacion",
    documentos: "id_documento"
  };

  function loadDB() {
    try {
      const raw = localStorage.getItem(DB_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        return Object.assign(clone(seed), parsed);
      }
    } catch (e) {
      console.warn("No se pudo leer la base estática. Se reinicia.", e);
    }
    const initial = clone(seed);
    localStorage.setItem(DB_KEY, JSON.stringify(initial));
    return initial;
  }

  function saveDB(db) {
    localStorage.setItem(DB_KEY, JSON.stringify(db));
  }

  function nextId(rows, field) {
    const nums = rows.map((r) => Number(r[field]) || 0);
    return nums.length ? Math.max(...nums) + 1 : 1;
  }

  function sameValue(a, b) {
    if (a === null || a === undefined || b === null || b === undefined) return a === b;
    return String(a) === String(b);
  }

  function matchFilters(row, filters) {
    return filters.every((f) => sameValue(row[f.column], f.value));
  }

  function addRelations(table, row, db) {
    const r = Object.assign({}, row);

    if (["protocolos", "entrevistas", "adopciones"].includes(table)) {
      r.adoptantes = db.adoptantes.find((a) => sameValue(a.id_adoptante, r.id_adoptante)) || null;
      r.mascotas = db.mascotas.find((m) => sameValue(m.id_mascota, r.id_mascota)) || null;
    }

    return r;
  }

  class QueryBuilder {
    constructor(table) {
      this.table = table;
      this._operation = "select";
      this._payload = null;
      this._filters = [];
      this._orders = [];
      this._limit = null;
      this._single = false;
      this._maybeSingle = false;
      this._head = false;
      this._count = null;
      this._onConflict = null;
    }

    select(columns, options) {
      this._operation = this._operation || "select";
      this._select = columns || "*";
      if (options) {
        this._head = !!options.head;
        this._count = options.count || null;
      }
      return this;
    }

    insert(payload) {
      this._operation = "insert";
      this._payload = Array.isArray(payload) ? payload : [payload];
      return this;
    }

    upsert(payload, options) {
      this._operation = "upsert";
      this._payload = Array.isArray(payload) ? payload : [payload];
      this._onConflict = options && options.onConflict ? options.onConflict : null;
      return this;
    }

    update(payload) {
      this._operation = "update";
      this._payload = payload || {};
      return this;
    }

    delete() {
      this._operation = "delete";
      return this;
    }

    eq(column, value) {
      this._filters.push({ column, value });
      return this;
    }

    order(column, options) {
      this._orders.push({ column, ascending: !(options && options.ascending === false) });
      return this;
    }

    limit(n) {
      this._limit = Number(n);
      return this;
    }

    single() {
      this._single = true;
      return this;
    }

    maybeSingle() {
      this._maybeSingle = true;
      return this;
    }

    async _execute() {
      const db = loadDB();
      if (!db[this.table]) db[this.table] = [];
      const rows = db[this.table];
      const idField = idFields[this.table] || "id";

      try {
        if (this._operation === "insert") {
          const inserted = this._payload.map((item) => {
            const row = Object.assign({}, item);
            if (row[idField] === undefined || row[idField] === null || row[idField] === "") {
              row[idField] = nextId(rows, idField);
            }
            if (this.table === "protocolos" && !row.fecha_registro) row.fecha_registro = today();
            if (this.table === "entrevistas" && !row.fecha_registro) row.fecha_registro = today();
            if (this.table === "adopciones" && !row.fecha_adopcion) row.fecha_adopcion = today();
            if (this.table === "donaciones" && !row.fecha_registro) row.fecha_registro = today();
            rows.push(row);
            return addRelations(this.table, row, db);
          });
          saveDB(db);
          return this._finish(inserted);
        }

        if (this._operation === "upsert") {
          const saved = this._payload.map((item) => {
            const row = Object.assign({}, item);
            let existing = null;

            if (this._onConflict && row[this._onConflict] !== undefined) {
              existing = rows.find((r) => sameValue(r[this._onConflict], row[this._onConflict]));
            }

            if (!existing && row[idField] !== undefined) {
              existing = rows.find((r) => sameValue(r[idField], row[idField]));
            }

            if (existing) {
              Object.assign(existing, row);
              return addRelations(this.table, existing, db);
            }

            if (row[idField] === undefined || row[idField] === null || row[idField] === "") {
              row[idField] = nextId(rows, idField);
            }
            rows.push(row);
            return addRelations(this.table, row, db);
          });
          saveDB(db);
          return this._finish(saved);
        }

        if (this._operation === "update") {
          const updated = [];
          rows.forEach((row) => {
            if (matchFilters(row, this._filters)) {
              Object.assign(row, this._payload);
              updated.push(addRelations(this.table, row, db));
            }
          });
          saveDB(db);
          return this._finish(updated);
        }

        if (this._operation === "delete") {
          const deleted = [];
          db[this.table] = rows.filter((row) => {
            if (matchFilters(row, this._filters)) {
              deleted.push(addRelations(this.table, row, db));
              return false;
            }
            return true;
          });
          saveDB(db);
          return this._finish(deleted);
        }

        let result = rows
          .filter((row) => matchFilters(row, this._filters))
          .map((row) => addRelations(this.table, row, db));

        this._orders.forEach((o) => {
          result.sort((a, b) => {
            const av = a[o.column];
            const bv = b[o.column];
            if (av === bv) return 0;
            if (av === undefined || av === null) return o.ascending ? -1 : 1;
            if (bv === undefined || bv === null) return o.ascending ? 1 : -1;
            if (typeof av === "number" && typeof bv === "number") return o.ascending ? av - bv : bv - av;
            return o.ascending ? String(av).localeCompare(String(bv)) : String(bv).localeCompare(String(av));
          });
        });

        const count = result.length;
        if (Number.isFinite(this._limit)) result = result.slice(0, this._limit);

        if (this._head) return { data: null, count, error: null };
        return this._finish(result, count);
      } catch (e) {
        return { data: null, count: null, error: { message: e.message || String(e) } };
      }
    }

    _finish(result, countValue) {
      if (this._single) {
        return { data: result[0] || null, count: countValue ?? (result ? result.length : 0), error: result[0] ? null : { message: "No se encontró registro." } };
      }

      if (this._maybeSingle) {
        return { data: result[0] || null, count: countValue ?? (result ? result.length : 0), error: null };
      }

      return { data: result || [], count: countValue ?? (result ? result.length : 0), error: null };
    }

    then(resolve, reject) {
      return this._execute().then(resolve, reject);
    }

    catch(reject) {
      return this._execute().catch(reject);
    }
  }

  function findAdoptanteByEmail(email) {
    const db = loadDB();
    return db.adoptantes.find((a) => String(a.correo).toLowerCase() === String(email).toLowerCase()) || null;
  }

  function buildAuthUser(email, metadata) {
    const adoptante = findAdoptanteByEmail(email);
    const nombre = metadata?.nombre_completo || adoptante?.nombre_completo || "Usuario de prueba";
    const telefono = metadata?.telefono || adoptante?.telefono || "5500000000";
    const direccion = metadata?.direccion || adoptante?.direccion || "Dirección de prueba";
    return {
      id: "static-user-" + String(email).replace(/[^a-zA-Z0-9]/g, "-"),
      email,
      user_metadata: {
        nombre_completo: nombre,
        telefono,
        direccion
      }
    };
  }

  const fakeAuth = {
    async getUser() {
      let user = null;
      try {
        user = JSON.parse(localStorage.getItem(AUTH_KEY) || "null");
      } catch (e) {
        user = null;
      }

      return { data: { user }, error: null };
    },

    async signInWithPassword({ email, password }) {
      if (!email || !password) {
        return { data: null, error: { message: "Correo y contraseña requeridos." } };
      }
      const user = buildAuthUser(email);
      localStorage.setItem(AUTH_KEY, JSON.stringify(user));
      localStorage.setItem("adoptanteNombre", (user.user_metadata.nombre_completo || "Usuario").split(" ")[0]);
      return { data: { user, session: { access_token: "static-token" } }, error: null };
    },

    async signUp({ email, password, options }) {
      if (!email || !password) {
        return { data: null, error: { message: "Correo y contraseña requeridos." } };
      }
      const metadata = options && options.data ? options.data : {};
      const user = buildAuthUser(email, metadata);
      localStorage.setItem(AUTH_KEY, JSON.stringify(user));
      localStorage.setItem("adoptanteNombre", (user.user_metadata.nombre_completo || "Usuario").split(" ")[0]);
      return { data: { user, session: { access_token: "static-token" } }, error: null };
    },

    async signOut() {
      localStorage.removeItem(AUTH_KEY);
      localStorage.removeItem("adoptanteNombre");
      return { error: null };
    }
  };

  const fakeStorage = {
    from(bucket) {
      return {
        async upload(path, file) {
          const db = loadDB();
          if (!db.documentos) db.documentos = [];
          db.documentos.push({
            id_documento: nextId(db.documentos, "id_documento"),
            bucket,
            path,
            nombre_archivo: file?.name || "archivo_estatico",
            fecha_registro: today()
          });
          saveDB(db);
          return { data: { path }, error: null };
        }
      };
    }
  };

  function createClient() {
    return {
      auth: fakeAuth,
      storage: fakeStorage,
      from(table) {
        return new QueryBuilder(table);
      }
    };
  }

  window.supabase = { createClient };

  window.resetHuellitasStaticDB = function () {
    localStorage.removeItem(DB_KEY);
    localStorage.removeItem(AUTH_KEY);
    localStorage.removeItem("adoptanteNombre");
    loadDB();
    alert("Datos estáticos reiniciados.");
  };

  loadDB();
})();
