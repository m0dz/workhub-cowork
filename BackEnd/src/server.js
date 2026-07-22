//cargar env - compatible con local y producción
try {
  require('dotenv').config();
} catch (error) {
  console.log('Variables de entorno ya configuradas (producción)');
}

// Levantar el servidor

const app = require("./app");

const PORT = process.env.PORT || 3000;
const { connect } = require("./database/mongoose");

app.listen(PORT, ()=> {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
