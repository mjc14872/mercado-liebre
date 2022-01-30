# **Proyecto Integrador - Digital House** 
## Mercado Liebre

Diseño final del proyecto de maquetación que se desarrollará en su versión ***mobile first***.

![Diseño Final dispositivo mobil](https://user-images.githubusercontent.com/74206062/151694561-91470659-63eb-432d-8085-8a4899e66a09.png)

## Deberá tener la siguiente estructura:

+ node_modules
+ public
  + css
    + images
    + style.css
+ views
  + home.html
+ app.js
+ package.json
  
Se deberán tener como mínimo las siguientes secciones:

+ header
+ main
+ footer

## En el header se deberá maquetar:

* Logo
* Lugar para la barra de búsqueda
* Párrafo: Compra en cuotas y tarjeta de crédito
* Barra de navegación con las siguientes opciones:
  * Ofertas
  * Tiendas Oficiales
  * Vender
  * Ayuda

  * Creá tu cuenta
  * Ingresá
  * Mis compras

El Mockup del header para móbil es el siguiente:

![header mobil](/ruta/a/la/imagen.jpg "header mobil")

La visualización de los artículos en el móbile, será así:

![articulos mobil](/ruta/a/la/imagen.jpg "articulos mobil")

## La sección Main contendrá lo siguiente:

*Sección: Basado en tu última visita*

+ ![imagen de la cafetera](/ruta/a/la/imagen.jpg "img cafetera")
  + $6.770
  + 40% OFF
  + Cafetera Moulinex
+ ![Imagen de la cafetera](/ruta/a/la/imagen.jpg "img cafetera")
  + $230.000
  + 20% OFF
  + MacBook Pro 2019
+ ![Imagen de Teléfono](/ruta/a/la/imagen.jpg "img cafetera")
  + $70.500
  + 10% OFF
  + Samsung Galaxy S10
+ ![Imagen de SmartTv](/ruta/a/la/imagen.jpg "img cafetera")
  + $23.200
  + 5% OFF
  + SmartTv Samsung 43"

*Sección: Ofertas*

+ ![imagen de la cafetera](/ruta/a/la/imagen.jpg "img cafetera")
  + $6.770
  + 40% OFF
  + Cafetera Moulinex
+ ![Imagen de la cafetera](/ruta/a/la/imagen.jpg "img cafetera")
  + $230.000
  + 20% OFF
  + MacBook Pro 2019
+ ![Imagen de Teléfono](/ruta/a/la/imagen.jpg "img cafetera")
  + $70.500
  + 10% OFF
  + Samsung Galaxy S10
+ ![Imagen de SmartTv](/ruta/a/la/imagen.jpg "img cafetera")
  + $23.200
  + 5% OFF
  + SmartTv Samsung 43"


## Para el Footer

Tendrá las siguientes secciones:

+ **Pagá con tarjeta o en efectivo**
    Con Mercado Liebre Cash, tenés cuotas sin interés con tarjeta o efectivo en puntos de pago. ¡Y siempre es seguro!

+ **Envío gratis desde $ 2.500**
    Solo por estar registrad@ en Mercado Liebre, tenés envíos gratis en miles de productos. Es un beneficio de Mercado Liebre.

+ **Seguridad de principio a fin**
    ¿No te gusta? ¡Devolvelo! En Mercado Liebre no hay nada que no puedas hacer porque estás siempre protegid@.

+ Copyright © 1999-2020 MercadoLiebre S.R.L.

*** 

## Paleta de colores

+ ***Amarillo***: *#EAC926*
+ ***Azul***: *#EAC926*
+ ***Celeste***: *#1259C3*
+ ***Gris oscuro***: *#66666*
+ ***Gris claro***: *#EBEBEB*
+ ***Verde***: *#39B54A*

## Tipografías

***Familia***: *#Roboto*

## Tamaños tipográficos

+ ***Cuerpo del texto***: *#12px*
+ ***Titulares***: *#24px*
+ ***Precio***: *#18px*
+ ***Descuento***: *#16px*
+ ***Descripción***: *#16px*

## Pie de página

+ ***Contenido***: *Centrado*
+ ***Íconos***: *Tamaño 2em y margen inferior de 10px.*

## Diseño adaptativo

+ ***Sección main***: *Centrada, 90% de pantalla.*
+ ***Artículo***: *En cada uno habrá una sepacaión de 10px.*
+ ***Manejar***: *Logo de envío, el precio, el porcentaje de descuento y la descripción del artículo como elementos de una caja dentro de la caja general.*
+ ***Caja general***: *Borde superior de 1px, línea sólida y color #EBEBEB.*
***Contenido***: *Separación de sus bordes en 15px en cada uno de sus lados.*
+ **Puntos de corte***: 
  + *Navegación en tablets: ancho mínimo de 361px.*
  + *Navegación en desktop: ancho mínimo de 769px.*
+ ***Importante***: 
  + *En caso de mobile, la descripción no se visualizará.*
  + *Agregar box-shadow para dispositivos tablets o superiores.*
+ ***Para la versión mobile***: *Ocultar el site y el login navbar.*
+ ***Para la versión desktop***: *Mostrar el site y login navbar, pero ocultar la imagen del menú hamburguesa.*

## Posicionamiento avanzado y flexbox

***Para cada uno de los artículos***: 
*Lograr que el precio y el descuento estén en el mismo renglón, donde precio ocupa el 30% y el descuento ocupa el 70% del total del renglón.*

imagen

***Desarrollar el home utilizando flexbox***: *Recordar que el sitio debe ser 100% responsive, se verá un artículo en versión mobile, dos artículos en tablet y cuatro artículos en desktop.*

***Encabezado***: 
*Logo: debe medir el 50% de su contenedor.*
*Barra de búsqueda: debe medir el 50% de su contenedor.*

imagen

***Para dispositivos igual o mayor a una tablet***: 
*El header debe visualizarse de esta manera: *

imagen

***Visualización de artículos para dispositivos tablet***
imagen

***Visualización de artículos para dispositivos desktop***
imagen

***Formularios***
Al seleccionar la opción *Creá tu cuenta* se mostrará el formulario para ingresar un nuevo usuario.

Al seleccionar la opción *Ingresá*, se mostrará el formulario para ingresar al sitio.

> Analizar cómo se presentarán los formularios al usuario, ya que ahora es importante darle un buen diseño para ambos formularios.

***Transformar el search a un formulario***

*Posible solución: *
imagen

imagen

***Organizando Elementos***
+ *La descripción del producto debe estar oculta a menos que el usuario pase el mouse por arriba.*
+ *Se pide que cuando el usuario pase el mouse por arriba, se visualice la sombra de la tarjeta del producto.*
+ *El ícono del camión de envío debe girar 90° hacia arriba suavemente cuando se pase el mouse por encima.*

imagen

***Para el login.html***
*Lograr que cuando el mouse esté encima del botón de envío del fomulario, su color de fondo cambie a #0022AA.*

***Para el footer***
*Utilizando flexbox, visualizar como se muestra en la imagen, para dispositivos Desktop. Además, cada vez que pase el mouse por los íconos, deben cambiar a otro color (el que mejor combine con la paleta de colores).*

imagen
