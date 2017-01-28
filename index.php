<?php
// session start
session_start();

/**
 * initialise autoload 
 * Pass debug=1 as parameter in URL to enable, and see useful error messages
 * Pass debug=0 as parameter to disable debugging
 * see init.php for implementation
 */


//require_once(__DIR__.'/app/debug/debugMode.php');	

require_once('init.php');

// Route Object
$routeObj = new Route();
//Retrieving Route, sending scriptName and requestUri 
$route = $routeObj->appRoute($_SERVER['SCRIPT_NAME'],$_SERVER['REQUEST_URI']);


switch($route)
{
	// Route for index page
	case '/': 
		// Some SEO stuff	
$seo = array('title' => 'Connect with Naman Malhotra at letsconnect.co - naman03malhotra',
			 'keywords' => 'Connect with Naman Malhota, letsconnect, ecounsellors, Senti , helpdesk software, twitter hashtag search, sentiment analysis, twitter app',
			 'description' => 'This portfolio depicts the work that has been done by Naman Malhotra uptil now.',
			 'site_name' => 'https://letsconnect.co/'
			 );

		$view = "index.php";
			//RenderView Object
		$renderViewObj = new RenderView();
			// Rendering index.php and passing SEO array
		$renderViewObj->render("$view", $seo);
		break;

	// Route for api call	
	case '/getData':
			
			$getDataObj = new getData();
			$result = $getDataObj->displayData();
			print_r($result);
			break;



	// If no route is matched
	default:
		require '404.html';

}

