import { Component, OnInit, Input } from '@angular/core';
import { Networth } from '../../shared/models/networth';
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
      console.log(this.networth)
    this.getNames();
  }

  forward() {
      this.question += 1;
  }

  back() {
      this.question -= 1;
  }

  getNames() {
    this.nameListService.get()
      .subscribe(
        names => this.names = names,
        error => this.errorMessage = <any>error
      );
  }

  addToArray(item: any, type: string, debtOrAsset: string) {
      if(debtOrAsset === 'asset') {
        if(type === 'cars') {
          this.networth.carValues.push(item);
        }
        if(type === 'homes') {
            this.networth.homeValues.push(item);
        }
        if(type === 'retirement') {
            this.networth.retirementAccountsValues.push(item);
        }
        if(type === 'investments') {
            this.networth.otherInvestmentsValues.push(item);
        }
        if(type === 'additionalAssets') {
            this.networth.additionalAssetsValues.push(item);
        }
        this.asset = new Asset;
      }
      
      if(debtOrAsset === 'debt') {
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
        if(type === 'additionalDebts') {
            this.networth.additionalDebtsValues.push(item);
        }
        this.debt = new Debt;
      } 
  }

  calculate() {
      this.networth.totalAssets = this.calculateAssets(this.networth);
      this.networth.totalDebt = this.calculateDebt(this.networth);
      this.calculateNetworth(this.networth.totalAssets, this.networth.totalDebt);
      this.question += 1;
  }

  calculateAssets(net: Networth) {
      var total = 0;
      if(net.checking) {
          total += net.checking;
      }
      if(net.savings) {
          total += net.savings;
      }
      if(net.ownHome) {
          for(var asset of net.homeValues) {
              total += asset.value;
          }
      }
      if(net.ownCar) {
          for(var asset of net.carValues) {
              total += asset.value
          }
      }
      if(net.haveRetirementAccounts) {
          for(var asset of net.retirementAccountsValues) {
              total += asset.value
          }
      }
      if(net.haveOtherInvestments) {
          for(var asset of net.otherInvestmentsValues) {
              total += asset.value;
          }
      }
      if(net.haveAdditionalAsset) {
          for(var asset of net.additionalAssetsValues) {
              total += asset.value
          }
      }
      return total;
  }

  calculateDebt(net:Networth) {
      var total = 0;
      if(net.haveCreditCards) {
          for(var debt of net.creditCardsValues) {
              total += debt.value;
          }
      }
      if(net.haveCarLoan) {
          for(var debt of net.carLoansValues) {
              total += debt.value;
          }
      }
      if(net.haveHomeLoan) {
          for(var debt of net.homeLoansValues) {
              total += debt.value;
          }
      }
      if(net.haveSchoolLoans) {
          for(var debt of net.schoolLoansValues) {
              total += debt.value;
          }
      }
      if(net.haveAdditionalDebt) {
          for(var debt of net.additionalDebtsValues) {
              total += debt.value
          }
      }
      return total;
  }

  calculateNetworth(assets: number, debt: number) {
      this.networth.networth = assets - debt;
  }

}
