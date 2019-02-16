import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-nodes]',
  templateUrl: './nodes.component.html',
  styleUrls: ['./nodes.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NodesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
