function changeContent(section,element){
	var content = document.getElementById("content");
	var active = document.getElementsByClassName("active")[0];
//	console.log(section,element);
	if( element != undefined ){
		active.classList.remove("active");
		element.classList.add("active");
	}
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			content.innerHTML = this.responseText;
			if( section == 3 ){
				buscar();
			}
		}
	}
	xmlhttp.open("GET","./pages/pag"+section+".html", true);
	xmlhttp.send();
}

function buscar(){
	var nov = document.getElementById("nov");
	var sin = document.getElementById("sin");
	console.log(nov);
	nov.addEventListener('keyup',function(){
		var datos = document.getElementsByClassName("novela");
		for( var i=0; i < datos.length ;i++ ){
			var valor_buscado = nov.value.toLowerCase();
			var dato = datos[i].innerHTML.toLowerCase();
			if( dato.indexOf(valor_buscado) == -1 ){
				datos[i].style.display = "none";
				var elem = datos[i].nextElementSibling;
				elem.style.display = "none";
			}else{
				datos[i].style.display = "";
				var elem = datos[i].nextElementSibling;
				elem.style.display = "";
			}
		}
//		console.log(nov.value);
	});
	
	sin.addEventListener('keyup',function(){
		var datos = document.getElementsByClassName("info");
		var titulos = document.getElementsByClassName("novela");
		for( var i=0; i < datos.length ;i++ ){
			var valor_buscado = sin.value.toLowerCase();
			var dato = datos[i].innerHTML.toLowerCase();
			if( dato.indexOf(valor_buscado) == -1 ){
				console.log(titulos);
				titulos[i].style.display = "none";
				var elem = titulos[i].nextElementSibling;
				elem.style.display = "none";
			}else{
				titulos[i].style.display = "";
				var elem = titulos[i].nextElementSibling;
				elem.style.display = "";
			}
		}
	});
}

changeContent(1);