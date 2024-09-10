# Florista API

Esta API RESTful proporciona funcionalidades de catálogo y pedidos para un negocio de florista.

## Requisitos previos

- Node.js (v14 o superior)
- MySQL

## Configuración

1. Clona este repositorio:

   ```bash
   git clone https://github.com/luisadrianPOZOGOMEZ/ExamenDiagnosticoSOA.git
2. Instala las dependencias

   ```bash
   npm install
3. Crea un archivo .env en la raíz del proyecto con la siguiente información:
    ```bash
       DB_HOST=localhost
       DB_USER=tu_usuario
       DB_PASSWORD=tu_contraseña
       DB_NAME=florista_db
4. Crea la base de datos y las tablas necesarias:
    ```bash
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
    
5. Ejecución
Para iniciar el servidor, ejecuta:
    ```bash
    npm start
El servidor estará disponible en http://localhost:3000 (o el puerto que hayas configurado en el archivo .env).
    
    ```bash
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=""
    DB_NAME=florista_db
    PORT=3000

## Endpoints

### Catálogo

- **GET** `/api/products`: Obtener todos los productos disponibles
- **GET** `/api/products/:id`: Obtener un producto por ID
- **POST** `/api/products`: Crear un nuevo producto
- **PUT** `/api/products/:id`: Actualizar un producto existente
- **DELETE** `/api/products/:id`: Eliminar un producto

### Pedidos

- **POST** `/api/orders`: Crear un nuevo pedido
- **GET** `/api/orders/:id`: Obtener un pedido por ID
- **GET** `/api/users/:userId/orders`: Obtener todos los pedidos de un usuario



