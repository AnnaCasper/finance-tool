import { Component, OnInit } from '@angular/core';
import { Networth } from '../shared/models/networth';
import { NameListService } from '../shared/name-list/name-list.service';

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

  /**
   * Creates an instance of the ResourceComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */
  constructor(public nameListService: NameListService) {}

  ngOnInit() {
  }

  initializeArrays() {
      this.networth.carValues = [];
      this.networth.homeValues = [];
      this.networth.retirementAccountsValues = [];
      this.networth.otherInvestmentsValues = [];
      this.networth.additionalAssetsValues = [];
      this.networth.creditCardsValues = [];
      this.networth.carLoansValues = [];
      this.networth.homeLoansValues = [];
      this.networth.schoolLoansValues = [];
      this.networth.additionalDebtsValues = [];
  }

}
