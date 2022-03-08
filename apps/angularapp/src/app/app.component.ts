import { Component } from '@angular/core';
import {getSharedSubtitle} from "@angular-react-experiment/shared-lib";

@Component({
  selector: 'angular-react-experiment-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angularapp';
  subtitle = getSharedSubtitle();
}
