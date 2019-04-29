<?php 
	namespace Bahamut0\Reconversion\Controller;
	use \Bahamut0\Core\Request;
	use \Bahamut0\Core\Controller;


    class PagesController extends Controller{


        function home(){

            $this->render("home");
        }
        function preparation(){

            $this->render("preparation");
        }
        function teachers(){

        $this->render("enseignement");
    }
        function ide(){

            $this->render("ide-edt");
        }
        function languages(){

            $this->render("langages-et-frameworks");
        }
        function software(){

            $this->render("logiciels");
        }
        function portefolio(){

            $this->render("portefolio");
        }


	}


