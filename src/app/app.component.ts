import { Component,OnInit } from '@angular/core';
import { DbServiceInformation } from './services/db.service';
import { db } from './dbStructure';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'definitiveCv202';

  constructor(){}
  ngOnInit(): void {
   
  }
}

/*   <app-hearder-app></app-hearder-app>
     <app-das-bord></app-das-bord>
*/
