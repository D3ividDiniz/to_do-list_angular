import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  @Input() array:any;


  apagar(i:number){
    this.array.splice(i,1)
  }
  feito(i:number){
    let box = document.getElementById(`box-${i}`);
    if(box){
      if(box.style.backgroundColor == "rgba(33, 43, 43, 0.5)"){
        box.style.backgroundColor = "";
        box.textContent = "Marcar Como Feito"

      }else{
        box.style.backgroundColor = "rgba(33, 43, 43, 0.5)"
        box.textContent = "Feito"
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
