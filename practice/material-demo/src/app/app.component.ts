import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material-demo';
//added to demonstrate how to make the notification badge more dynamic; its the 1st notification example
  notifications = 1;
//added to demonstrate the progress spinner
  showSpinner = false;
//added this for the first method of opening and closing sidenav; its the first button
  opened= false;

//added showSpinner and the load data elements to simulate the button loading data and the spinner appears
  loadData() {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 5000)
  }
}
