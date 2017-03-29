# Ci-bus

JavaScript Framework

Ci-bus es un framework creado en JavaScript aunque también contiene una parte en PHP para usarla de backend

Su estructura es parecida a MVC

/module /module/test <- Module folder
/module/test/store <- Folder of stores (backend data)
/module/test/view <- Folder of views
/module/test/view/component <- Folder of components (fragments view)
/module/test/controller <- Folder of controllers

Las carpetas view y controller contienen archivos .js, la carpeta store contiene archivos .php

Menos el controlador, los demás archivos llevaran el tipo en el nombre, ejemplo:
/module/test/view/homeView.js
/module/test/view/component/buttonComponent.js
/module/test/controller/test.js <- Only name file without type
/module/test/store/homeStore.php

En este framework se utiliza software de terceros: Bootstrap y jQuery

Esta tarde subiré los archivos con un login de ejemplo
