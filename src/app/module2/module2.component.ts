import { Component, OnInit } from '@angular/core';

import { WebService } from '../_service/web.service';

@Component({
  selector: 'app-module2',
  templateUrl: './module2.component.html',
  styleUrls: ['./module2.component.scss']
})
export class Module2Component implements OnInit {
  constructor(private _http: WebService) { }

  ngOnInit() { }

}
