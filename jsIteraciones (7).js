function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;
	var promedio;
	var acumulador;
	
	while(respuesta !="n")
		{
			
			contador=contador+1;
			numero=prompt("ingrese numero"+contador);
			numero=parseInt(numero);
			acumulador=acumulador+numero;
			
			respuesta=prompt("desea seguir ingresando numeros?");
		}
promedio=acumulador/contador;

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN