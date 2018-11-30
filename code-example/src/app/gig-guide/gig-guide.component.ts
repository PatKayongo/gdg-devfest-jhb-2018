import { Component } from '@angular/core';
import { GigCreationService } from './gig-creation.service';

@Component({
  selector: 'app-gig-guide',
  template: `
    <app-form-input (change)="handleInputChange($event)"></app-form-input>
    <button (click)="handleButtonClick()"></button>
  `
})
export class GigGuideComponent {
  name;

  constructor(private gigCreationService: GigCreationService) {}

  handleInputChange(event) {
    this.name = event.value;
  }

  handleButtonClick() {
    this.gigCreationService.createNewGig({ name: this.name });
  }
}
