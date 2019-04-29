<?php 
	namespace Bahamut0\Core; 
	class Routeur{

    public $routes;

	function __construct(Request $req, $routes=[]){
		$this->req=$req;
		$this->url=$req->getURL();
        $this->routes= $routes;

	}
    private $routefound= false;
    public function run(){

        foreach ($this->routes as $rName => $value) {
            if ($this->url == $value["path"]) {

                $routeParts = explode("@", $value["exec"]);
                $methodeChemin = $routeParts[1];
                $className = "Bahamut0\Reconversion\Controller\\" . $routeParts[0];
                $controller = new $className();
                $controller->$methodeChemin($this->req);
                $this->routefound = true;
                break;
            }
        }
			if(!$this->routefound){
					$error404= new \Bahamut0\Reconversion\Controller\ErrorController();
					$error404->error();
			}
		}
	}

 ?>