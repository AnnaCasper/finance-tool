import { Component, OnInit, Input } from '@angular/core';
import { Networth } from '../../shared/models/networth'
import { Asset } from '../../shared/models/asset';
import { Debt } from '../../shared/models/debt';
import { NameListService } from '../../shared/name-list/name-list.service';

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

  /**
   * Creates an instance of the ResourceComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */
  constructor(public nameListService: NameListService) {}

  /**
   * Get the names OnInit
   */
  ngOnInit() {
  }

  forward() {
      this.question += 1;
  }

  back() {
      this.question -= 1;
  }

  addToArray(item: any, type: string) {
      if(type === 'cars') {
          this.networth.carValues.push(item);
      }
      if(type === 'homes') {
          this.networth.homeValues.push(item);
      }
      if(type === 'retirement') {
          this.networth.retirmentAccountsValues.push(item);
      }
      if(type === 'investments') {
          this.networth.otherInvestmentsValues.push(item);
      }
      if(type === 'additionalAssets') {
          this.networth.additionalAssetsValues.push(item);
      }
      if(type === 'creditCards') {
          this.networth.creditCardsValues.push(item);
      }
      if(type === 'carLoan') {
          this.networth.carLoansValues.push(item);
      }
      if(type === 'homeLoan') {
          this.networth.homeLoansValues.push(item);
      }
      if(type === 'schoolLoan') {
          this.networth.schoolLoansValues.push(item);
      }
      if(type === 'additionalDebt') {
          this.networth.additionalDebtsValues.push(item);
      }
  }

  calculate() {
      console.log(this.networth);
  }

  openModal(modal: any) {
    modal.show();
  }

}
