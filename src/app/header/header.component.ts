import { Component, OnInit, Output } from '@angular/core';
import { CheckboxControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //config inicial
  public titulo = "";
  public desc = "";
  public data = "";
  public tarefas:any = [];
  public cont = 0;
  
  check(){
    if(this.titulo==""  || this.desc == ""  || this.data == ""){
      return false;
    }else{
      return true;
    }
  }


  add(dic:any){
    //adiciona numeração ao index;
    this.cont +=1;
    dic['id'] = this.cont;
    return dic
  }

  addtask(obj:object){
    if(this.check() == false){
      alert('preencha todos os campos')
    }else{    
    //envio do objeto
    let tarefa  = this.add(obj)
    this.tarefas.push(tarefa)

    //limpeza para nova tarefa
    for(let i = 0; i<3; i++){
      document.getElementsByTagName('input')[i].value = "";
    }
    this.titulo = "";
    this.desc = "";
    this.data = "";
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
