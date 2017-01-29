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
