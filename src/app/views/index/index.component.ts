import { Component, Input, OnInit } from '@angular/core';
import { WpService } from '../../wp.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
})
export class IndexComponent implements OnInit {

  constructor(public wp: WpService) {}

  ngOnInit(): void {}
}
