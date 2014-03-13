		function decirAlgo()
		{
			return "Dirígete al nordeste por Calle de Agustín de Foxá";
		}
		
		function getElements(quote)
		{
			
			var result =quote.getElementsByTagName("html_instructions");
			var indicaciones = new Array;
				for(i=0;i<result.length;i++)
					indicaciones[i]= quitarHTML(CambiarAbreviaturas(result.item(i).firstChild.data));
					
			return indicaciones;
		}
		function getStatus(quote)
		{
			
			var result =quote.getElementsByTagName("status");
			var status;
			status = result.item(0).firstChild.data;
			return status;
		}
		function getNombres(quote)
		{
			
			var result =quote.getElementsByTagName("name");
			var nombres = new Array;
				for(i=0;i<result.length;i++)
					nombres[i]= result.item(i).firstChild.data;
					
			return nombres;
		}
		function getDistancias(quote)
		{
			var result =quote.getElementsByTagName("distance");
			var distancias = new Array;
			for(i=0;i<result.length;i++) 				
				distancias[i]=result.item(i).getElementsByTagName("value").item(0).firstChild.data;
				
			return distancias;
		}
		function getLatitud(quote)
		{
			var result =quote.getElementsByTagName("start_location");
			var latitud;
			latitud = result.item(0).getElementsByTagName("lat").item(0).firstChild.data;
				
			return latitud;
		}
		function getLongitud(quote)
		{
			var result =quote.getElementsByTagName("start_location");
			var longitud;				
			longitud = result.item(0).getElementsByTagName("lng").item(0).firstChild.data;
				
			return longitud;
		}
		function getLatitudNum(quote,pos)
		{
			var result =quote.getElementsByTagName("lat");
			var latitud;
			latitud = result.item(pos-1).firstChild.data;
				
			return latitud;
		}
		function getLongitudNum(quote,pos)
		{
			var result =quote.getElementsByTagName("lng");
			var longitud;				
			longitud = result.item(pos-1).firstChild.data;
				
			return longitud;
		}
		function getElement(array, id)
		{
			
			return array[id];
		}
		function quitarEspacios(cadena)
		{
			var c = cadena.indexOf(' ');
			while(c!=-1){ 
				cadena= cadena.replace(" ","+"); 
				c =cadena.indexOf(' ');
			}
			
			return cadena;
		}
		function CambiarAbreviaturas(texto)
		{	
			var a =texto.indexOf('Av ');
			while(a!=-1){ 
				texto = texto.replace("Av ","Avenida "); 
				a =texto.indexOf('Av ');
			}
 			var b =texto.indexOf('Sta ');
			while(b!=-1){ 
				texto = texto.replace("Sta ","Santa "); 
				b =texto.indexOf('Sta ');
			}
			return texto;
					
		}
		function quitarComillas(texto)
		{
			texto = texto.replace("\"",""); 
			return texto;
		}
		function getTodo(quote)
		{
			
			var result =quote.getElementsByTagName("html_instructions");
			var indicaciones = new Array;
				for(i=0;i<result.length;i++)
					indicaciones[i]= result.item(i).firstChild.data;
					
			return indicaciones;
		}
		function quitarHTML(texto)
		{
				
			var a =texto.indexOf('<');
			var b =texto.indexOf('>');
			var quitar = ""
			while(a!=-1){ 
				quitar = texto.slice(a,b+1);
				texto = texto.replace(quitar,""); 
			    a =texto.indexOf('<');
			    b =texto.indexOf('>');
			}
			return texto;
		}
	function utf8_encode (argString) {
		// Encodes an ISO-8859-1 string to UTF-8  
		// 
		// version: 1109.2015
		// discuss at: http://phpjs.org/functions/utf8_encode
		// +   original by: Webtoolkit.info (http://www.webtoolkit.info/)
		// +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
		// +   improved by: sowberry
		// +    tweaked by: Jack
		// +   bugfixed by: Onno Marsman
		// +   improved by: Yves Sucaet
		// +   bugfixed by: Onno Marsman
		// +   bugfixed by: Ulrich
		// +   bugfixed by: Rafal Kukawski
		// *     example 1: utf8_encode('Kevin van Zonneveld');
		// *     returns 1: 'Kevin van Zonneveld'
		if (argString === null || typeof argString === "undefined") {
			return "";
		}
	 
		var string = (argString + ''); // .replace(/\r\n/g, "\n").replace(/\r/g, "\n");
		var utftext = "",
			start, end, stringl = 0;
	 
		start = end = 0;
		stringl = string.length;
		for (var n = 0; n < stringl; n++) {
			var c1 = string.charCodeAt(n);
			var enc = null;
	 
			if (c1 < 128) {
				end++;
			} else if (c1 > 127 && c1 < 2048) {
				enc = String.fromCharCode((c1 >> 6) | 192) + String.fromCharCode((c1 & 63) | 128);
			} else {
				enc = String.fromCharCode((c1 >> 12) | 224) + String.fromCharCode(((c1 >> 6) & 63) | 128) + String.fromCharCode((c1 & 63) | 128);
			}
			if (enc !== null) {
				if (end > start) {
					utftext += string.slice(start, end);
				}
				utftext += enc;
				start = end = n + 1;
			}
		}
	 
		if (end > start) {
			utftext += string.slice(start, stringl);
		}
 
		return utftext;
	}
	
	function utf8_decode (str_data) {
		// Converts a UTF-8 encoded string to ISO-8859-1  
		// 
		// version: 1109.2015
		// discuss at: http://phpjs.org/functions/utf8_decode
		// +   original by: Webtoolkit.info (http://www.webtoolkit.info/)
		// +      input by: Aman Gupta
		// +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
		// +   improved by: Norman "zEh" Fuchs
		// +   bugfixed by: hitwork
		// +   bugfixed by: Onno Marsman
		// +      input by: Brett Zamir (http://brett-zamir.me)
		// +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
		// *     example 1: utf8_decode('Kevin van Zonneveld');
		// *     returns 1: 'Kevin van Zonneveld'
		var tmp_arr = [],
			i = 0,
			ac = 0,
			c1 = 0,
			c2 = 0,
			c3 = 0;
	 
		str_data += '';
	 
		while (i < str_data.length) {
			c1 = str_data.charCodeAt(i);
			if (c1 < 128) {
				tmp_arr[ac++] = String.fromCharCode(c1);
				i++;
			} else if (c1 > 191 && c1 < 224) {
				c2 = str_data.charCodeAt(i + 1);
				tmp_arr[ac++] = String.fromCharCode(((c1 & 31) << 6) | (c2 & 63));
				i += 2;
			} else {
				c2 = str_data.charCodeAt(i + 1);
				c3 = str_data.charCodeAt(i + 2);
				tmp_arr[ac++] = String.fromCharCode(((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
				i += 3;
			}
		}
	 
		return tmp_arr.join('');
	}