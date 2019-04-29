<?php 
	namespace Bahamut0\Reconversion\Controller;
	use \Bahamut0\Core\Controller;
	use \Bahamut0\Core\Request;
	use \Bahamut0\Core\Database;
	class ErrorController extends Controller{
		function error(){
				$this->render("error404");
			}
	}
