import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.css']
})
export class ConvertComponent implements OnInit {
clickMessage string ="";
  constructor() { }
onClickeMe(){
  this.clickMessage = "output";
}
  ngOnInit() {
  }

}
