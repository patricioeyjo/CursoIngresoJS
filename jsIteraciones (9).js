function Mostrar()
{

	// declarar variables
	var contador=0;
	var menor;
	var mayor;
	var respuesta="si";
	var bandera=0;

	while(respuesta!='n')
	{
		numero=prompt("ingrese numero #");
		numero=parseInt(numero);
		if(bandera==0)
		{
			menor=numero;
			mayor=numero;
			bandera=1;	
		}

			
			if(numero<menor)
			{
				menor=numero;
			}
				if(numero>mayor)
				{
					mayor=numero;
				}
	respuesta=prompt("desea continuar?");
	}
	

document.getElementById('maximo').value=mayor;
document.getElementById('minimo').value=menor;


}//FIN DE LA FUNCIÓN