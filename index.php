<?php session_start();

	error_reporting(E_ERROR | E_WARNING | E_PARSE);
	ini_set('display_errors', 1);
	ini_set('display_startup_errors', 1);
	
	include "core/Store.php";
	
	header('Content-Type: text/html; charset='.$CB->getConfig('charset'));

	$turi = $_SERVER['REQUEST_URI'];
	$tpath = substr(getcwd(), strlen($turi)*-1);
	
	$urlparts = false;
		
	for($i=0;$i<strlen($tpath);$i++)
	{
		if(substr($tpath, $i) == substr($turi, 0, strlen($tpath) - $i))
		{
			if(substr($turi, strlen(substr($tpath, $i))+1))
			{
				$urlparts = explode("/", substr($turi, strlen(substr($tpath, $i))+1));
			}
		}
	}
			
	if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
		
		if($urlparts[0] == 'require')
		{
			$data = $_POST;
			$value = $data['value'];
			if($data)
			{
				
				for($i=0;$i<count($data);$i++)
				{
					if($data[$i]['xtype'] == 'store')
					{
						if($data[$i]['module'])
						{
							if(!$data[$i]['name']) $data[$i]['name'] = $data[$i]['module'];
							$temp_file = 'module/'.$data[$i]['module'].'/'.strtolower($data[$i]['xtype']).'/'.$data[$i]['name'].'Store.php';
							if(file_exists($temp_file))
							{
								include $temp_file;
								$temp_class = ucwords($data[$i]['name']);
								$store = new $temp_class($data[$i]['data']);
							}
						}
					}
					else
					{
						if(!$data[$i]['name']){
							$data[$i]['name'] = $data[$i]['module'];
						}
						if($data[$i]['xtype'] == 'view'){
							$data[$i]['name'] .= 'View';
						}
						if($data[$i]['xtype'] == 'component'){
							$data[$i]['name'] .= 'Component';
							$data[$i]['xtype'] = 'view/'.$data[$i]['xtype'];
						}
						$temp_file = 'module/'.$data[$i]['module'].'/'.strtolower($data[$i]['xtype']).'/'.$data[$i]['name'].'.js';
						if(file_exists($temp_file))
						{
							include $temp_file;
						}
					}
				}
			}
		}
		else
		{
			if($urlparts[1] == 'view'){
				$urlparts[2] .= 'View';
			}
			if($urlparts[1] == 'component'){
				$urlparts[2] .= 'Component';
				$urlparts[1] = 'view/'.$urlparts[1];
			}
			
			if(file_exists('module/'.$urlparts[0].'/'.$urlparts[1].'/'.$urlparts[2].'.js')){
				include 'module/'.$urlparts[0].'/'.$urlparts[1].'/'.$urlparts[2].'.js';
			
			}else if($urlparts[1] == 'store'){
								
				
				
				if(file_exists('module/'.$urlparts[0].'/'.$urlparts[1].'/'.$urlparts[2].'Store.php'))
				{
					include 'module/'.$urlparts[0].'/'.$urlparts[1].'/'.$urlparts[2].'Store.php';
										
					$temp_class = ucwords($urlparts[2]);
					$store = new $temp_class($CB, $_POST);
				}
				else
				{
					echo 'alert(\'No existe el fichero: module/'.$urlparts[0].'/'.$urlparts[1].'/'.$urlparts[2].'Store.php\')';
				}
			}
		}
		
	} else {
		
				
?>

<!DOCTYPE html>
	<head>
		<title><?php echo $CB->getConfig('title'); ?></title>
		<meta http-equiv="Content-Type" content="text/html; charset=<?php echo $CB->getConfig('charset'); ?>" />
		
		<script src="libraries/jQuery/jQuery.min.js"></script>
		<link rel="stylesheet" href="libraries/bootstrap/css/bootstrap.min.css">
		<link rel="stylesheet" href="libraries/bootstrap/css/extra.css">
		<link rel="stylesheet" href="libraries/fa-icons/css/font-awesome.min.css">
		<link rel="stylesheet" href="assets/css/style.css">
		
		<script type="text/javascript" src="libraries/system/cookie.js"></script>
		<script type="text/javascript" src="libraries/system/cacheJs.js"></script>
		<script type="text/javascript" src="libraries/system/base.js"></script>
		
		<style>@viewport {width:device-width;}</style>
		<link name="apple-touch-icon" href="src/folder_program/bandeja/img/icono.png" />
		<link name="apple-touch-startup-image" href="src/folder_program/bandeja/img/icono.png" />
		<meta name="apple-mobile-web-app-capable" content="yes" />
		<meta name="apple-mobile-web-app-status-bar-style" content="default" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">

		<script type="text/javascript">
			
			$(document).ready(function(){
				<?php
					if($urlparts[0])
					{
						echo "cb.load('controller', '".$urlparts[0]."');";
					}
					else
					{
						echo "cb.load('controller', '".$CB->getConfig('default_controller')."');";
					}
				?>
				$.cachedScript("libraries/bootstrap/js/bootstrap.min.js");
			});
			
		</script>
	</head>
	<body>

	</body>
</html>

<?php
	}
?>