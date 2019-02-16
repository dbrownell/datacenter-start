import { Component, ViewChild } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // View Child to reference component
  @ViewChild(DashboardComponent) dashboard: DashboardComponent;
  refresh() {
    this.dashboard.generateData();
  }
}
