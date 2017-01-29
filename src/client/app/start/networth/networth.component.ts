import { Component, OnInit, Input } from '@angular/core';
import { Networth } from '../../shared/models/networth'
import { Asset } from '../../shared/models/asset';
import { Debt } from '../../shared/models/debt';

/**
 * This class represents the lazy loaded NetworthComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-networth',
  templateUrl: 'networth.component.html',
  styleUrls: ['networth.component.css'],
})
export class NetworthComponent implements OnInit {
    @Input() networth: Networth;

  newName: string = '';
  errorMessage: string;
  names: any[] = [];
  question: number = 1;
  asset: Asset = new Asset;
  debt: Debt = new Debt;

  constructor() {}

  /**
   * Get the names OnInit
   */
  ngOnInit() {
      this.initializeArrays(this.networth);
  }

  initializeArrays(networth: Networth){
      this.networth.retirmentAccountsValues = [];
      this.networth.otherInvestmentsValues = [];
      this.networth.additionalAssetsValues = [];
      this.networth.creditCardsValues = [];
      this.networth.carLoansValues = [];
      this.networth.homeLoansValues = [];
      this.networth.schoolLoansValues = [];
      this.networth.additionalDebtsValues = [];
  }

  forward() {
      this.question += 1;
  }

  back() {
      this.question -= 1;
  }

  addToArray(item: any, array: any[]) {
      array.push(item);
  }

  openModal(modal: any) {
    modal.show();
  }

}
