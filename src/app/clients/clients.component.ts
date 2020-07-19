import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  group2 = "assets/images/clients/group-2.png"
  group2Copy = "assets/images/clients/group-2-copy.png"
  group2Copy2 = "assets/images/clients/group-2-copy-2.png"
  group3 = "assets/images/clients/group-3.png"

  constructor() { }

  ngOnInit(): void {
  }

}
