function Mostrar()
{

var sexo = prompt("ingrese f ó m .");
sexo = sexo.tolowercase();

	while (sexo != "f" && sexo != "m")
		{
		sexo = prompt("error,ingrese f ó m .");
		sexo = sexo.tolowercase();
		}

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN