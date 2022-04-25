const historico = []
function cliquebtn() { 
    n = input()
    let cores = document.getElementById('porcentagens')

    calculo = ((n / 100) * 120)
    if (calculo > 60) {
     cores.innerText =Math.floor(calculo /60) + " hora(s) e " + Math.floor(calculo%60) +" minutos"}
    else{
     cores.innerText=Math.floor (calculo) + " minutos"}
    if (n >= 60) {
     cores.className="verde"
    }
    else if (n >= 30){
     cores.className="amarelo"
    }
    else {
     cores.className="vermelho"
    }
}
function input () {
    return document.getElementById('input').value
}
function historia()
{
    var selectColocou = document.getElementById("opcoes")
    var valueColocou = selectColocou.options[selectColocou.selectedIndex].value;
    console.log(valueColocou)
    var selectnome = document.getElementById("nomes")
    var valueseg = selectnome.options[selectnome.selectedIndex].value;
    console.log(valueseg)
    let registro = {
        nome: valueseg, carregou:valueColocou
    }
    historico.push(registro)
    console.log(historico)
}
function registrodehistorico() {
    let itens = ""
    historico.forEach((item)=>{
    console.log(item.carregou)
    console.log(item.nome)
    let linha="<li> nome: "+ item.nome + " carregou:" + item.carregou + "</li>"
    itens += linha
    })
console.log(itens)
let lista1 = document.getElementById("lista")
lista1.innerHTML=itens
}






