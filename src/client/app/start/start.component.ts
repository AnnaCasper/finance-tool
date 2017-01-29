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
    this.initializeArrays();
  }

  initializeArrays(){
      this.networth.carValues = [];
      this.networth.homeValues = [];
      this.networth.retirmentAccountsValues = [];
      this.networth.otherInvestmentsValues = [];
      this.networth.additionalAssetsValues = [];
      this.networth.creditCardsValues = [];
      this.networth.carLoansValues = [];
      this.networth.homeLoansValues = [];
      this.networth.schoolLoansValues = [];
      this.networth.additionalDebtsValues = [];
  }

}
