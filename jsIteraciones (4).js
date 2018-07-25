function Mostrar()
{

	var numero = parseInt(prompt("ingrese un número entre 0 y 10."));

	while (numero <= 0 || numero > 10 || iNaN (numero))
		{
			
			numero = parseInt(prompt("error el numero es incorrecto"));

		}
		
		document.getElementById('Numero').value;
		
}//FIN DE LA FUNCIÓN