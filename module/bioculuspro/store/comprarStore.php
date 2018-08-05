<?php
	
	class Comprar {
		
		public function __construct($data = array())
		{
			if(!$_SESSION['lang_id']){
				$_SESSION['lang_id'] = 1;
				$this->lang_id = 1;
			}else{
				$this->lang_id = $_SESSION['lang_id'];
			}
			
			$this->id_producto = $data['id_producto'];
			
			if(is_numeric($this->id_producto)){
				$Nombre = $data['Nombre'];
				$Apellidos = $data['Apellidos'];
				$direccion = $data['direccion'];
				$cp = $data['cp'];
				$ciudad = $data['ciudad'];
				$dni = $data['dni'];
				$email = $data['email'];
				$Tlf = $data['Tlf'];
			}
			
			$this->errores = '';
			
			if(!$this->validar_dni($dni)){
				$this->add_error('dni');
			}
			if(!$Nombre){
				$this->add_error('Nombre');
			}
			if(!$Apellidos){
				$this->add_error('Apellidos');
			}
			if(!is_numeric($cp) || !$cp){
				$this->add_error('cp');
			}
			if(!$ciudad){
				$this->add_error('ciudad');
			}
			if(!$direccion){
				$this->add_error('direccion');
			}
			if(!$Tlf){
				$this->add_error('Tlf');
			}
			if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
				$this->add_error('email');
			}
			
			if($this->errores != ''){
				echo $this->parseVar('pago_res', $this->errores);
			}else{
				
				//Validaciones OKS //////
				$this->cliente = array(
						"nombre" => $Nombre,
						"apellidos" => $Apellidos,
						"cp" => $cp,
						"ciudad" => $ciudad,
						"direccion" => $direccion,
						"tlf" => $Tlf
				);
				
				//Checkea que el usuario no este reenviando el mismo formulario
				// o hay algun registro en estado 0 (en proceso)
				$this->select('id');
				$this->where('dni', $dni);
				$this->where('estado', 0);
				$this->where('fecha', date('Y-m-d'));
				$this->where('id_producto', $this->id_producto);
				$this->where('id_idioma',$this->lang_id);
				$this->orderBy('id', 'DESC');
				$this->limit(1);
				$user = $this->get('bio_clientes');
				$this->reset();
				
				//Si ya existe usuario actualizamos su informacion
				if($user && is_numeric($user->id)){
					$user = (array) $user;
					$this->cliente_id = $user['id'];
					$this->where('id', $user['id']);
					$this->update('bio_clientes', array(
						"id_producto" => $this->id_producto,
						"nombre" => $Nombre,
						"apellidos" => $Apellidos,
						"cp" => $cp,
						"ciudad" => $ciudad,
						"direccion" => $direccion,
						"tlf" => $Tlf,
						"fecha" => date('Y-m-d'),
						"hora" => date('H:i')
					));
				}
				//Sino lo creamos
				else {
					$inuser = $this->insert('bio_clientes', array(
						"id_producto" => $this->id_producto,
						"dni" => $dni,
						"email" => $email,
						"nombre" => $Nombre,
						"apellidos" => $Apellidos,
						"cp" => $cp,
						"ciudad" => $ciudad,
						"direccion" => $direccion,
						"tlf" => $Tlf,
						"fecha" => date('Y-m-d'),
						"hora" => date('H:i')
					));
					
					if($inuser){
						$this->cliente_id = $this->getInsertId();
					}
				}
				
				//Si ya tenemos el usuario generamos urls
				if(is_numeric($this->cliente_id)){
					
					//Guardamos id cliente para chechear si se ha pagado en la homeStore
					$_SESSION['id_cliente'] = $this->cliente_id;
					
					if($data['tipo_pago'] == 'redsys'){ //[ REDSYS ]/////////////////////////
						
						$this->reset();
						$this->select('precio');
						$this->from('bio_productos');
						$this->where('id', $this->id_producto);
						$precio = $this->get();
						
						$redsys = $this->get_redsys($precio->precio);
						if($redsys){
							$id_redsys = $redsys['id'];
							$estado_redsys = $redsys['estado'];
							$fecha_pago_redsys = $redsys['fecha_pago'];
							$hora_pago_redsys = $redsys['hora_pago'];
							$precio_pago_redsys = $redsys['precio_pago']*1;
							$precio_fijado_redsys = $redsys['precio_fijado']*1;
							if($REDSYS_PRECIO)$precio_fijado_redsys=$REDSYS_PRECIO*1;
							
							if($estado_redsys == '0000'){
								echo $this->parseVar('pago_res', 'pagado');
							}else{
								//Cogemos url final
								$data_redsys = $this->get_redsys_url($id_redsys,$precio_fijado_redsys,$precio_pago_redsys);
								if($data_redsys){
									echo $this->parseVar('pago_res', $data_redsys);
								}
							}
						}
					}
				}else{
					echo $this->parseVar('pago_res', false);
				}
			}
		}
		
		private function get_redsys($precio){
			
			$this->select('id, estado, fecha_pago, hora_pago, precio_pago, precio_fijado');
			$this->where('id_fila', $this->cliente_id);
			$this->where('precio_fijado', $precio);
			$this->where('tabla', 'bio_clientes');
			$this->where('celda', 'id_redsys');
			$this->orderBy('id', 'DESC');
			$this->limit('1');
			$redsys = (array) $this->get('redsys');
			$this->reset();
			
			if($redsys && is_numeric($redsys['id']))
			{
				return $redsys;
			}
			else
			{
				$inredsys = $this->insert('redsys', array(
					"id_fila" => $this->cliente_id,
					"tabla" => "bio_clientes",
					"celda" => "id_redsys",
					"precio_fijado" => $precio
				));
				if($inredsys){
					$this->reset();
					return $this->get_redsys($precio);
				}else{
					return false;
				}
			}
		}
		
		private function get_redsys_msg($res){
			$errors = array("0000" => "<font style=color:GREEN;>Tansferencia correcta</font>",
					"0101" => "Tarjeta caducada",
					"0102" => "Tarjeta en excepción transitoria o bajo sospecha de fraude",
					"0104" => "Operación no permitida para esa tarjeta o terminal",
					"9104" => "Operación no permitida para esa tarjeta o terminal",
					"0116" => "Disponible insuficiente",
					"0118" => "Tarjeta no registrada",
					"0129" => "Código de seguridad (CVV2/CVC2) incorrecto",
					"0180" => "Tarjeta ajena al servicio",
					"0184" => "Error en la autenticación del titular",
					"0190" => "Denegación sin especificar Motivo",
					"0191" => "Fecha de caducidad errónea",
					"0202" => "Tarjeta en excepción transitoria o bajo sospecha de fraude",
					"0222" => "Las firmas no coinciden",
					"0912" => " Emisor no disponible",
					"9912" => "Emisor no disponible",
					"0913" => "Pedido repetido",
					"9915" => "A petición del usuario se ha cancelado el pago",
					"9093" => "Tarjeta no existente",
					"9997" => "Se está procesando otra transacción en SIS con la misma tarjeta",
					"9998" => "Operación en proceso de solicitud de datos de tarjeta",
					"9078" => "Tipo de operación no permitida para esa tarjeta",
					"9064" => "Número de posiciones de la tarjeta incorrecto",
					"0909" => "Error de sistema");
			if($errors[$res]) return $errors[$res];
			else return "Error desconocido";
		}
		
		private function get_redsys_url($id_redsys,$precio_redsys,$precio_pago_redsys){
			
			//Sacamos datos de redsys
			$this->select("value, variable");
			$this->where("(variable='redsys_nombre' OR variable='redsys_url' OR variable='redsys_terminal' OR variable='redsys_moneda' OR variable='redsys_tipo' OR variable='redsys_codigo' OR variable='redsys_clave') AND id_usuario=0");
			$data_redsys = $this->getArray("config_value");
			$VLRS = array();
			foreach($data_redsys AS $dts){
				$VLRS[$dts->variable] = trim($dts->value);
			}
			
			//Nombre de cliente
			$REDSYS_COMPRADOR=$this->cliente['nombre']." ".$this->cliente['apellidos'];
			
			include 'sistema/librerias/redsys/apiRedsys.php';
			
			$miObj = new RedsysAPI;
			
			$merchantCode 	 = $VLRS['redsys_codigo'];
			$terminal 		 = $VLRS['redsys_terminal'];
			$amount 		 = ($precio_redsys-$precio_pago_redsys)*100;
			$currency 		 = $VLRS['redsys_moneda'];
			$transactionType = $VLRS['redsys_tipo'];
			$merchantURL 	 = "http://".$_SERVER['HTTP_HOST'];
			$urlOK 			 = "http://".$_SERVER['HTTP_HOST'];
			$urlKO 			 = "http://".$_SERVER['HTTP_HOST'];
			$order 			 = $id_redsys.substr(time()."",-5,5);
			$total           = $amount;
			$urlPago         = $VLRS['redsys_url'];
			$version         = "HMAC_SHA256_V1";
			$key             = $VLRS['redsys_clave'];
		
			$miObj->setParameter("DS_MERCHANT_AMOUNT",$amount);
			$miObj->setParameter("DS_MERCHANT_ORDER",strval($order));
			$miObj->setParameter("DS_MERCHANT_MERCHANTCODE",$merchantCode);
			$miObj->setParameter("DS_MERCHANT_CURRENCY",$currency);
			$miObj->setParameter("DS_MERCHANT_TRANSACTIONTYPE",$transactionType);
			$miObj->setParameter("DS_MERCHANT_TERMINAL",$terminal);
			$miObj->setParameter("DS_MERCHANT_MERCHANTURL",$merchantURL);
			$miObj->setParameter("DS_MERCHANT_URLOK",$urlOK);
			$miObj->setParameter("DS_MERCHANT_URLKO",$urlKO);
			
			$request = "";
			$params = $miObj->createMerchantParameters();
			$signature = $miObj->createMerchantSignature($key);
			
			if(is_numeric($id_redsys) && $urlPago && $version && $params && $signature){
				return array(
					"id_redsys" => $id_redsys,
					"url" => $urlPago,
					"Ds_SignatureVersion" => $version,
					"Ds_MerchantParameters" => $params,
					"Ds_Signature" => $signature
				);
			}else{
				return false;
			}
		}
		
		private function add_error($err){
			if($this->errores != ''){
				$this->errores .= ',';
			}
			$this->errores .= $err;
		}
		
		private function validar_dni($dni){
			$dni = strtoupper($dni);
			$letra = substr($dni, -1);
			$numeros = substr($dni, 0, -1);
			if ( substr("TRWAGMYFPDXBNJZSQVHLCKE", $numeros%23, 1) == $letra && strlen($letra) == 1 && strlen ($numeros) == 8 ){
				return true;
			}else{
				return false;
			}
		}

	}