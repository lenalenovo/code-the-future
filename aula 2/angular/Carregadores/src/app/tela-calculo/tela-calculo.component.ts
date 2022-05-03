import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela-calculo',
  templateUrl: './tela-calculo.component.html',
  styleUrls: ['./tela-calculo.component.scss']
})
export class TelaCalculoComponent implements OnInit {

  constructor() { }

  n:number
  cor:string = ""
  valor:string = ''
  nome:string =''
  carregou = ''
  ngOnInit(): void {
  }
   historico = []
  cliquebtn() { 
      console.log(this.n)
      let calculo = ((this.n / 100) * 120)
      if (calculo > 60) {
       this.valor =Math.floor(calculo /60) + " hora(s) e " + Math.floor(calculo%60) +" minutos"}
      else{
       this.valor=Math.floor (calculo) + " minutos"}
      if (this.n >= 60) {
       this.cor="verde"
      }
      else if (this.n >= 30){
       this.cor="amarelo"
      }
      else {
       this.cor="vermelho"
      }
  }

   historia()
  {
      // var selectColocou = document.getElementById("opcoes")
      // var valueColocou = selectColocou.options[selectColocou.selectedIndex].value;
      console.log(this.carregou)
      // var selectnome = document.getElementById("nomes")
      // var valueseg = selectnome.options[selectnome.selectedIndex].value;
      console.log(this.nome)
      let registro = {
          nome: this.nome, carregou:this.carregou
      }
      this.historico.push(registro)
      console.log(this.historico)
  }
   registrodehistorico() {
      let itens = ""
      this.historico.forEach((item)=>{
      console.log(item.carregou)
      console.log(item.nome)
      let linha="<li> nome: "+ item.nome + " carregou:" + item.carregou + "</li>"
      itens += linha
      })
  console.log(itens)
  let lista1 = document.getElementById("lista")
  lista1.innerHTML=itens
  }
}
