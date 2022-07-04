import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'todi';
storedTheme = localStorage.getItem('theme-color');

  constructor() {}
  ngOnInit() {}
  setTheme(theme: string) {
    localStorage.setItem('theme-color',theme);
    this.storedTheme = localStorage.getItem('theme-color');
  }
}
