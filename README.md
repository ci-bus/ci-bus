# Ci-bus

JavaScript Framework<br>
<br>
Ci-bus es un framework creado en JavaScript aunque también contiene una parte en PHP para usarla de backend<br>
<br>
Su estructura es parecida a MVC<br>
<br>
/module<br>
/module/test <- Module folder<br>
/module/test/store <- Folder of stores (backend data)<br>
/module/test/view <- Folder of views<br>
/module/test/view/component <- Folder of components (fragments view)<br>
/module/test/controller <- Folder of controllers<br>
<br>
Las carpetas view y controller contienen archivos .js, la carpeta store contiene archivos .php<br>
<br>
Menos el controlador, los demás archivos llevaran el tipo en el nombre, ejemplo:<br>
/module/test/view/homeView.js<br>
/module/test/view/component/buttonComponent.js<br>
/module/test/controller/test.js <- Only name file without type<br>
/module/test/store/homeStore.php<br>
<br>
En este framework se utiliza software de terceros: Bootstrap y jQuery<br>
