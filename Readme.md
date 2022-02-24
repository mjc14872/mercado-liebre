# **Proyecto Integrador - Digital House** 
## Mercado Liebre

Diseño final del proyecto de maquetación que se desarrollará en su versión *mobile*.

![Enlace Heroku](https://mercado-liebre-mjc.herokuapp.com/)

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

![header mobil](https://user-images.githubusercontent.com/74206062/151695358-84215e99-da0a-4343-ba26-477b84783562.png)

La visualización de los artículos en el móbile, será así:

![articulos mobil](https://user-images.githubusercontent.com/74206062/151695366-444491dd-4461-4c58-ba70-e8659676a2ba.png)

## La sección Main contendrá lo siguiente:

**Sección: Basado en tu última visita**

+ Imagen de la cafetera
  + $6.770
  + 40% OFF
  + Cafetera Moulinex
+ Imagen de MacBook
  + $230.000
  + 20% OFF
  + MacBook Pro 2019
+ Imagen de Teléfono
  + $70.500
  + 10% OFF
  + Samsung Galaxy S10
+ Imagen de SmartTv
  + $23.200
  + 5% OFF
  + SmartTv Samsung 43"

**Sección: Ofertas**

+ Imagen de la cafetera
  + $6.770
  + 40% OFF
  + Cafetera Moulinex
+ Imagen de MacBook
  + $230.000
  + 20% OFF
  + MacBook Pro 2019
+ Imagen de Teléfono
  + $70.500
  + 10% OFF
  + Samsung Galaxy S10
+ Imagen de SmartTv
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

**Configuración mobile adaptativo:**

![configuracion hader y articulos - mobile adaptativo](https://user-images.githubusercontent.com/74206062/151695573-453d3f33-2533-4e39-92df-d57c962ef9d8.png)

**Configuración header: tablet y desktop adaptativo**

![configuracion hader - mobile adaptativo](https://user-images.githubusercontent.com/74206062/151695579-17e07c0c-d68a-4c7c-82bd-ab0639dbad50.png)

![configuracion articulos - mobile adaptativo](https://user-images.githubusercontent.com/74206062/151695583-14293412-8477-431f-89fb-1f6e8b1e492a.png)

## Posicionamiento avanzado y flexbox

***Para cada uno de los artículos***: 
*Lograr que el precio y el descuento estén en el mismo renglón, donde precio ocupa el 30% y el descuento ocupa el 70% del total del renglón.*

![articulos-flexbox](https://user-images.githubusercontent.com/74206062/151695695-546359c9-8656-4770-929e-2b9f309bba73.png)

***Desarrollar el home utilizando flexbox***: *Recordar que el sitio debe ser 100% responsive, se verá un artículo en versión mobile, dos artículos en tablet y cuatro artículos en desktop.*

***Encabezado***: 
*Logo: debe medir el 50% de su contenedor.*
*Barra de búsqueda: debe medir el 50% de su contenedor.*

![header mobil flexbox](https://user-images.githubusercontent.com/74206062/151695696-e7eefadb-b55b-429b-ad9d-20638e441a50.png)

***Para dispositivos igual o mayor a una tablet***: 
*El header debe visualizarse de esta manera: *

![header desktop flexbox](https://user-images.githubusercontent.com/74206062/151695697-ccec68a1-40c6-43f8-bfec-77b79a7ed761.png)

***Visualización de artículos para dispositivos tablet***

![articulos tablet flexbox](https://user-images.githubusercontent.com/74206062/151695698-efc44231-3830-470f-b63f-d5a94263f8d3.png)

***Visualización de artículos para dispositivos desktop***

![articulos desktop flexbox](https://user-images.githubusercontent.com/74206062/151695702-7f2d043e-d2e2-4d98-870b-d838b050ae47.png)

***Formularios***
Al seleccionar la opción *Creá tu cuenta* se mostrará el formulario para ingresar un nuevo usuario.

Al seleccionar la opción *Ingresá*, se mostrará el formulario para ingresar al sitio.

> Analizar cómo se presentarán los formularios al usuario, ya que ahora es importante darle un buen diseño para ambos formularios.

***Transformar el search a un formulario***

*Posible solución: *

![articulos desktop flexbox](https://user-images.githubusercontent.com/74206062/151695706-0931909e-436b-4a95-a3fc-3fc797b9d3e5.png)

![articulos desktop flexbox](https://user-images.githubusercontent.com/74206062/151695707-7ca4e0ab-4564-4cad-ac82-dea58a3e156e.png)

***Organizando Elementos***
+ *La descripción del producto debe estar oculta a menos que el usuario pase el mouse por arriba.*
+ *Se pide que cuando el usuario pase el mouse por arriba, se visualice la sombra de la tarjeta del producto.*
+ *El ícono del camión de envío debe girar 90° hacia arriba suavemente cuando se pase el mouse por encima.*

![organizando elementos](https://user-images.githubusercontent.com/74206062/151695709-e45c7410-cf2f-44cd-bf59-705d16ad6639.png)

***Para el login.html***
*Lograr que cuando el mouse esté encima del botón de envío del fomulario, su color de fondo cambie a #0022AA.*

***Para el footer***
*Utilizando flexbox, visualizar como se muestra en la imagen, para dispositivos Desktop. Además, cada vez que pase el mouse por los íconos, deben cambiar a otro color (el que mejor combine con la paleta de colores).*

![organizando footer](https://user-images.githubusercontent.com/74206062/151695712-40c11490-ad51-4921-ac68-5f820b6df136.png)
