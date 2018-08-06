function Mostrar()
{
	var precio;
	var porcentajeDescuento;
	var descuentoEnDinero;
	var precioConDescuento;
	var iva;
	var precioMasIva;

	precio=parseInt(prompt("ingrese el precio"));
	porcentajeDescuento=parseInt(prompt("ingrese descuento"));

	descuentoEnDinero=(precio*porcentajeDescuento)/100;
	precioConDescuento=precio-descuentoEnDinero;
	iva=(precioConDescuento*21)/100;
	precioMasIva=precioConDescuento+iva;
	alert("el descuento en dinero es: "+descuentoEnDinero+" el precio con el descuento es: "+precioConDescuento+" el iva es :"+iva);
	document.getElementById('elPrecioFinal').value=precioMasIva;
}
