/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
var a;
var b;
var resultado;
a=document.getElementById('NumeroUno').value;
a=parseInt(a);
b=document.getElementById('NumeroDos').value;
b=parseInt(b);
resultado=a+b
alert(resultado);
}