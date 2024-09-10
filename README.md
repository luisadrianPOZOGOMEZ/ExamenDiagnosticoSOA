Florista API
Esta API RESTful proporciona funcionalidades de catálogo y pedidos para un negocio de florista.
Requisitos previos

Node.js (v14 o superior)
MySQL

Configuración

Clona este repositorio:
git clone https://github.com/luisadrianPOZOGOMEZ/ExamenDiagnosticoSOA.git

Instala las dependencias:
npm install

Crea un archivo .env en la raíz del proyecto con la siguiente información:
CopyDB_HOST=localhost
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_NAME=florista_db
PORT=3000

Crea la base de datos y las tablas necesarias:

CREATE DATABASE florista_db;
USE florista_db;

CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  stock INT NOT NULL
);

CREATE TABLE orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  total DECIMAL(10, 2) NOT NULL,
  status ENUM('pending', 'completed', 'cancelled') DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


Ejecución
Para iniciar el servidor, ejecuta:
npm start
El servidor estará disponible en http://localhost:3000 (o el puerto que hayas configurado en el archivo .env).

Endpoints

Catálogo

GET /api/products: Obtener todos los productos disponibles
GET /api/products/:id: Obtener un producto por ID
POST /api/products: Crear un nuevo producto
PUT /api/products/:id: Actualizar un producto existente
DELETE /api/products/:id: Eliminar un producto

Pedidos

POST /api/orders: Crear un nuevo pedido
GET /api/orders/:id: Obtener un pedido por ID
GET /api/users/:userId/orders: Obtener todos los pedidos de un usuario

Pruebas

Para ejecutar las pruebas (asegúrate de haber configurado previamente las pruebas):
npm test

