/*
	ingreso: 
maria f 15
jose m 33
pepe m 81
	mostrar:
cantidad de mayores de edad: 2
cantidad de menores de edad: 1
cantidad de mujeres: 1
cantidad de hombres: 2
nombre del mayor de edad: pepe
nombre del menor de edad: maria
nombre del hombre menor de edad: jose
*/
function Mostrar()
{
	var nombre;
	var sexo;
	var edad;
	var contador=0;
	var contadorMayoresDeEdad=0;
	var contadorMenoresDeEdad=0;
	var contadorDeMujeres=0;
	var contadorDeHombres=0;
	var nombreMayor;
	var nombreMenor;
	var NombreDelHombreMayor;
	var mayorEdad=0;
	var menorEdad=0;
	var flag=0;

	while(contador<3)
	{
		
		contador++;
		nombre=prompt("ingrese nombre");
		
		sexo=prompt("ingrese sexo");
	
	while(sexo !="f" && sexo != "m")
		{
			sexo=prompt("ingrese sexo");
		}
			
			edad=prompt("ingrese edad");
			while(edad<0 || edad >100)
			{
				edad=prompt("ingrese edad");
			}

				if(edad>18)
				{
					contadorMayoresDeEdad++;
				}
					else
					{
						contadorMenoresDeEdad++;
					}
					if(sexo=="f")
						{
							contadorDeMujeres++;
						}
							else
							{
								contadorDeHombres++;
							}
							if(edad > mayorEdad || flag == 0)
								{
									mayorEdad=edad;
									nombreMenor=nombre;
									flag=1;
								}
								if(edad < menorEdad || flag == 0)
									{
										menorEdad=edad;
										nombreMayor=nombre;
										flag=1;
									}

	}		
	document.write("<br> la cantidad de mayores es: "+contadorMayoresDeEdad);
	document.write("<br> la cantidad de menores es: "+contadorMenoresDeEdad);
	document.write("<br> la cantidad de mujeres es: "+contadorDeMujeres);
	document.write("<br> la cantidad de hombres es: "+contadorDeHombres);
	document.write("<br> el nombre del mayor es: "+nombreMayor);
	document.write("<br> el nombre del menor es: "+nombreMenor);
	

}
