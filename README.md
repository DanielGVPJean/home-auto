# HomeAtuto - Sistema de Casa Inteligente

## Descripción del Proyecto

HomeAtuto es un sistema de casa inteligente que permite controlar y monitorear diversos dispositivos desde una interfaz web. El proyecto incluye control de luces, electrodomésticos y sensores de consumo de gas, agua y electricidad.

## Características

- Control de 7 focos independientes
- Monitoreo de dispositivos: PC, TV, bocinas, regadera, estufa y boiler
- Medición de consumos: gas, agua y electricidad
- Monitoreo de generación renovable: solar y eólica
- Interfaz web responsive diseñada en Webflow

## Estructura del Proyecto

```
index.html                       # Página principal (diseñada en Webflow)
assets/                          # Funcionalidad del sistema
├── css/styles.css               # Estilos personalizados
├── js/script.js                 # Lógica de la aplicación
├── php/                         # Backend PHP
│   ├── casa.sql                 # Script de base de datos
│   ├── conn.php                 # Configuración de conexión
│   ├── esp32.php                # API para ESP32
│   ├── get_device_states.php
│   ├── get_sensor_data.php
│   └── update_device_state.php
└── Casa-inteligente-ESP32.pdf   # Manual del ESP32
css/                             # Estilos de Webflow
images/                          # Recursos gráficos
js/                              # Scripts de Webflow
```

## Configuración

### 1. Base de Datos MySQL

1. Importar la base de datos usando el archivo `assets/php/casa.sql`
2. Crear una base de datos MySQL con las siguientes tablas:
   - `data`: Almacena valores de sensores
   - `devices`: Estados de dispositivos
   - `timeData`: Datos temporales

### 2. Configuración de Conexión

Editar el archivo `assets/php/conn.php` con los datos de tu base de datos:

```php
$servername = "tu_servidor";
$username = "tu_usuario";
$password = "tu_contraseña";
$dbname = "tu_base_de_datos";
```

### 3. Configuración del ESP32

Consultar el documento `assets/Casa-inteligente-ESP32.pdf` para:
- Configurar la conexión WiFi del ESP32
- Establecer comunicación con el servidor
- Configurar sensores de consumo
- Programar la pantalla OLED para mostrar datos

## Uso

1. Asegurar que el servidor web esté ejecutándose con soporte PHP
2. Verificar que la base de datos esté configurada correctamente
3. Abrir `index.html` en un navegador web
4. Configurar el ESP32 según las instrucciones del PDF
5. Interactuar con la interfaz para controlar dispositivos y ver consumos

## Tecnologías Utilizadas

- **Frontend**: HTML5, CSS3, JavaScript, jQuery
- **Diseño**: Webflow
- **Backend**: PHP, MySQL
- **Hardware**: ESP32 con sensores y pantalla OLED

## Notas Importantes

- La página web fue completamente diseñada en Webflow
- Toda la funcionalidad personalizada se encuentra en la carpeta `assets/`
- Es necesario configurar tanto la base de datos como el ESP32 para el funcionamiento completo
- El sistema requiere un servidor web con soporte para PHP y MySQL
