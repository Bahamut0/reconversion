<?php 
	namespace Bahamut0\Core;


	class Request
    {
        public $routes;

        function __construct($routes)
        {
            $url = isset($_GET["url"]) ? $_GET["url"] : "";
            $this->setURL($url);
            $this->routes= $routes;
        }

        function setURL($url)
        {
            $this->url = $url;
        }

        function getURL()
        {
            return $this->url;
        }
        function redirectToRoute($routeName){
            $path=$this->routes[$routeName]["path"];
            header("location:".BASE_URL."/".$path);
            exit();
        }
    }

 ?>