import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-starts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './starts.component.html',
  styleUrl: './starts.component.css'
})
export class StartsComponent implements OnInit{
  @Input() number: number = 0;
  stars :number[]=[]

  ngOnInit():void{
    this.setEstrellas(this.number);
  };
  setEstrellas(valoracion:number):void{
    if(valoracion>=0&&valoracion<=5){
      for(let i=1;i<valoracion;i++){
        this.stars.push(1)
      }
      if(valoracion%1>0.21 && valoracion%1<0.79){
        this.stars.push(0.5);
      } else if(valoracion%1>0.79){
        this.stars.push(1)
      }
      for(let i = this.stars.length;i<5;i++){
        this.stars.push(0);
      }
    }
  }
}
