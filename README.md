# NuestroRepositorio
Creamos un Repositorio, para mostrar nuestro Repositorio y poner nuestros resumenes y mas 


Primera instalación -----> 
En el directorio te vas a encontrar con dos carpetas: 

backend
frontend

Requicitos: Backend
Tener instalada la version 3.11.5 de Python ---> En la instalación de python tienen que checkear la caja que dice CREATE PATH. Sino lo van a tener que hacer manualmente. 
Instalar poetry

Requicitos: FrontEnd
Tener instalada la ultima version de React
Instalar Yarn

Despues de instalar se recomienda reiniciar la pc y luego seguir con los pasos de abajo. 

Para iniciar el backend ----> C:\repositorio\backend 

Para instalar las dependencias:
-poetry init
-poetry install

Para inicialiar el virutal enviroment
-poetry init
-poetry shell en el virtual enviroment (o sea siempre)


ir a la carpeta donde esta el manage.py 
C:\repositorio\backend\CoreRoot

SOLO SI SE ACTUALIZO/HUBIERON CAMBIOS EN LA BASE DE DATOS
-python manage.py makemigrations
-python mange.py migrate
-python manage.py runserver

Comando para correr el backend:
-python manage.py runserver


Para el frontend: 
C:\repositorio\frontend\repositorioapp
Instalar dependencias:
-yarn init
-yarn install (SOLO LA PRIMERA VEZ)
-yarn start


Cada vez que quieras correr el frontend: 
-yarn init
-yarn start


