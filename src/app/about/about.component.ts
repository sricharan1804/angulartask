import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  cc = "assets/images/about/cc-copy.png";
  
  constructor() { }

  ngOnInit(): void {
  }

}
