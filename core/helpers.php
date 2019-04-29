<?php
function route($routeName){
    global $routeur;
    return BASE_URL."/".$routeur->routes[$routeName]["path"];
}

