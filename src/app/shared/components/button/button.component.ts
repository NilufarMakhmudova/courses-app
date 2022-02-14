import { Component, Input, OnInit } from '@angular/core';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faBan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

export class ButtonComponent 

implements OnInit {
  buttonIcon = faPencilAlt;
 
  @Input() buttonText? : string;
  @Input() iconName? : string;

  

  constructor() {
  }


  ngOnInit(): void {
    
    if(this.iconName === "delete")
      {
        this.buttonIcon = faBan;
      }
  }
}
