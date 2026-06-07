Configuré el repositorio para que cada uno tenga su propia copia y lo uniremos al final,por favor sigan los pasos para no tener problemas al fusionar el archivo.
NUNCA TRABAJAR SOBRE MAIN
Cada integrante tiene su propia rama, por favor solo trabajen en esa.
INDICACIONES (Sacadas con chatGPT, si hay problemas preguntenle o busquen en internet, es mi primera vez haciendo esto y recien estoy aprendiendo como funciona)

1. Descargar el proyecto (solo la primera vez)
Abrir una terminal y ejecutar:
git clone URL_DEL_REPOSITORIO

Entrar a la carpeta del proyecto:
cd NOMBRE_DEL_PROYECTO

Verificar las ramas disponibles:
git branch -a

2. Cambiar a tu rama
Juan:
git checkout juan

María:
git checkout maria

Verificar en qué rama estás:
git branch

Debe aparecer un asterisco (*) junto a tu rama.
Ejemplo:
* juan
  main
  maria
Si aparece * main, DETENERSE y cambiar a la rama correcta.


3. Antes de empezar a trabajar cada día
Actualizar el repositorio:
git checkout main
git pull origin main

Volver a tu rama:
git checkout TU_RAMA

Actualizar tu rama con los cambios más recientes:
git merge main

Si aparecen conflictos, avisar antes de continuar.


4. Realizar cambios
Modificar únicamente los archivos correspondientes a tu tarea.
Guardar todos los cambios.

5. Verificar los archivos modificados
Antes de subir cambios:
git status

Revisar cuidadosamente qué archivos aparecen.
Si hay archivos que no deberían subirse, detenerse y consultar.


6. Guardar cambios en Git
Agregar cambios:
git add .

Crear un commit descriptivo:
git commit -m "Descripción clara de los cambios"

Ejemplos:
git commit -m "Agrega formulario de login"
git commit -m "Implementa conexión a base de datos"

Evitar mensajes como:
cambios
update
arreglo


7. Subir cambios
Juan:
git push origin juan

María:
git push origin maria

Verificar que Git indique que la subida fue exitosa.


8. Crear Pull Request
Entrar al repositorio en GitHub.
Ir a:
Pull Requests

Seleccionar:
Create Pull Request

Verificar que diga:
TU_RAMA → main

NO hacer merge.
Crear el Pull Request y esperar revisión.


9. PROHIBICIONES
NO trabajar en main.
NO hacer:
git push origin main
NO borrar ramas.
NO hacer merge sin aprobación.
NO modificar archivos asignados a otro integrante sin avisar.
NO ignorar errores mostrados por Git.


10. Si algo falla
Ejecutar:
git status

Tomar captura de pantalla.
Enviar la captura al grupo antes de intentar soluciones improvisadas.
