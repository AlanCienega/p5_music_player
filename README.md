# p5_music_player
##  Primero necesitas tener python3 ó apache2
### Revisa con 
````
python3 --version
````
### si tienes python entonces solo abre una terminal y clona el repositorio
### si quieres saber si tienes apache ejecuta 
````
systemctl start apache2
````
Si lo tines instalado se debio haber iniciado despues de pedir permisos de usuario
````
git clone https://github.com/AlanCienega/p5_music_player.git
````
## en caso de python, despues de haber clonado
````
cd p5_music_player
python 3 -m http.server
````
se ha levantado un servidor en http://0.0.0.0:8000/circle_amplitude/

## en caso de apache2 antes posisionate en 
````
cd /var/www/html
````
### Ahora si clona el repositorio y abre en tu navegador http://localhost/p5_music_player/circle_amplitude/

![](images/preview.png)


## si quieres reproducir mas musica aparte de la que lleva solo copia tu musica dentro del directorio circle_amplitude/ y en el navegador al final de la url pon
````
?titulo_de_cancion.mp3
````
ejemplo python
````
http://0.0.0.0:8000/circle_amplitude/?otraCancion.mp3
````
ejemplo apache
````
http://localhost/p5_music_player/circle_amplitude/?otraCancion.mp3
````