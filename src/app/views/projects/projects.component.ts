import { Component, OnInit } from '@angular/core';
import wicjson from '../../../assets/wic.json';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  public womenList: { name: string, fields: any }[] = wicjson;

  constructor() { 
    console.log(wicjson);
  }

  ngOnInit(): void {
  }

}
