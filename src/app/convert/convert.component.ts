import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.css']
})
export class ConvertComponent implements OnInit {
conversionKM: double = 0;
conversionM: double = 0;
  constructor() { }

convertKm(Km: double){
  this.conversionKM = Km*0.62137;
}
convertM(m: double){
  this.conversionM = m*1.60934;
}
  ngOnInit() {
  }

}
