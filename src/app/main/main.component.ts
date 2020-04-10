import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
    trigger('position', [
      // ...
      state('top', style({
        height: '100px',
        width: '100px',
        opacity: 1,
        backgroundColor: 'yellow',
        transform: 'translateY(0) translateX(0)',
        
      })),
      state('bottom', style({
        height: '100px',
        width: '100px',
        opacity: 0.5,
        backgroundColor: 'green',
        transform: 'translateY(90vh) translateX(94vw)'
      })),
      transition('top => bottom', [
        animate('3s linear')
      ]),
      transition('bottom => top', [
        animate('4s linear')
      ]),
    ]),
  ]
})
export class MainComponent implements OnInit {

  

  constructor() { }

  ngOnInit() {
  }

  position = true;

  toggle() {
    this.position = !this.position;
  }
}
