function somar() {
    let x = Number (document.getElementById ("x").value);
    let resultado = x*2;
    alert(resultado);
}
function aumento() {
    let x = Number (document.getElementById ("z").value);
    let resultado = (x*0.5)+x;
    alert(resultado);
}
function Investimento() {
    let b = Number (document.getElementById ("b").value);
    let resultado = (b*0.3);
    alert(resultado);
    let c = Number (document.getElementById ("c").value);
    let resultado2 = (c*1.3);
    alert(resultado2);
}
function salario() {
    let d = Number (document.getElementById ("d").value);
    let resultado = (d*0.15+d);
    document.getElementById("resultado").value = resultado;


} 
function produto() {
    let m = Number (document.getElementById ("m").value);
    let resultado = (m- m*0.07);
    document.getElementById("p").value = resultado;
}