import { Component, OnInit } from '@angular/core';

import { WebService } from '../_service/web.service';

@Component({
  selector: 'app-module1',
  templateUrl: './module1.component.html',
  styleUrls: ['./module1.component.scss']
})
export class Module1Component implements OnInit {
  constructor(private _http: WebService) { }

  ngOnInit() { }

}
