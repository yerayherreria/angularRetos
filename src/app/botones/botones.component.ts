import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-botones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './botones.component.html',
  styleUrl: './botones.component.css'
})
export class BotonesComponent {

  buttons=["😀","😢","🤪"];
  images =["https://i.pinimg.com/originals/f2/ce/c9/f2cec98f06e8f66ff0bcfb2ffdb413eb.jpg","https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sad-dog-1537347496.jpg?resize=480:*","https://townsquare.media/site/757/files/2014/08/names.jpg"]
  boolean=[false,false,false]
  viewImage(index: number): void {
    if(this.boolean[index]==false){
      this.boolean[index]=true;
    } else {
      this.boolean[index]=false;
    }
  }

}
