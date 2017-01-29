import { Component, OnInit } from '@angular/core';
import { Networth } from '../shared/models/networth';
/**
 * This class represents the lazy loaded StartComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-start',
  templateUrl: 'start.component.html',
  styleUrls: ['start.component.css']
})
export class StartComponent implements OnInit {

  newName: string = '';
  errorMessage: string;
  names: any[] = [];
  showNetworthPanel: boolean = false;
  networth: Networth = new Networth;

  constructor() {}

  ngOnInit() {
  }

  openModal(modal: any) {
    modal.show();
  }

}
