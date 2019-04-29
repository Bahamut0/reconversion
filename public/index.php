<?php 

$routes=[
    "home"=>[
        "path"=>"home",
        "exec"=>"PagesController@home" //le nom de la class + le nom de la méthode séparé par un séparateur ici "@"
    ],
    "preparation"=>[
        "path"=>"preparation",
        "exec"=>"PagesController@preparation" //le nom de la class + le nom de la méthode séparé par un séparateur ici "@"

    ],
    "teachers"=>[
        "path"=>"enseignement",
        "exec"=>"PagesController@teachers" //le nom de la class + le nom de la méthode séparé par un séparateur ici "@"

    ],
    "ide"=>[
        "path"=>"ide-edt",
        "exec"=>"PagesController@ide" //le nom de la class + le nom de la méthode séparé par un séparateur ici "@"

    ],
    "languages"=>[
        "path"=>"langages-et-frameworks",
        "exec"=>"PagesController@languages"
    ],
    "software"=>[
        "path"=>"logiciels",
        "exec"=>"PagesController@software",

    ],
    "portefolio"=>[
        "path"=>"portefolio",
        "exec"=>"PagesController@portefolio",
        
    ]

];
	include("../autoload.php");
    define("BASE_URL", "/reconversion/public");
	//Pas besoin d'include mes fichiers request, routeur... L'autoload les demandes les inclus en fonction des classes demandées. L'instanciation des classes routeurs et request ont permis le required de leur fichier comme demandée par les méthodes de l'autoload!!!


	$request= new Bahamut0\Core\Request($routes); //Il set et récupère l'url
	$routeur= new Bahamut0\Core\Routeur($request,$routes); //il conduit l'url récupéré dans divers routes en fonction de celles définies dans le routeur.


    require_once("../core/helpers.php");
	$routeur->run();



	
