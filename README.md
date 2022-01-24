# Aplicación Angular integrado con Cordova

Prueba Angular/Cordova.

## Tecnologías utilizadas

Node version 14.18.0
Angular versión 12.2.12
Cordova versión 11.0.0
Android Studio versión (según tabla de documentación de Cordova)

## Instalaciones

Para las respectivas instalaciones puede seguir las documentaciones oficiales que dejo aquí.

[NodeJs](https://nodejs.org/es/download/)

[Angular CLI](https://github.com/angular/angular-cli)  

[Cordova](https://cordova.apache.org/#getstarted)

[Andorid Studio](https://cordova.apache.org/docs/en/10.x/guide/platforms/android/index.html)

## Preparación del proyecto

Puede descargar el proyecto o si tiene git instalado ejecute el siguiente comando:

git clone https://github.com/Piscis98/prueba-angular-cordova.git

## Configuración

Luego de tener el proyecto abra la carpeta del proyecto en una terminal  

Lo puede hacer ejecutando:

cd prueba-angular-cordova

Luego de estar en la carpeta ejecute el comando:

npm install

Lo anterior instalará los paquetes necesarios.

Luego puede crear el servidor local del proyecto con el comando

ng serve

O también lo puede hacer con:

npm run start

Luego abra la ruta `http://localhost:4200/` en el navegador.

# Generar aplicación para Andorid

Nota: Debe de tener instalado una versión de android compatible con cordova-android versión 9.0.0 (cordova-android y cordova-cli no es lo mismo).

Deberá seguir la documentación de configuración de Android en `https://cordova.apache.org/docs/en/10.x/guide/platforms/android/index.html`


Una vez tenga todo listo podrá el comando del package.json del proyecto angular:

npm run cordova-run-android

Si sus configuraciones de Android Sudio fueron correctas el comando anterior hará todo lo necesario para convertir la aplicación de angular en aplicación android.