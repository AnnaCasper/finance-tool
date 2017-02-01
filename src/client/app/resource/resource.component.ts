import { Component, OnInit } from '@angular/core';
import { NameListService } from '../shared/name-list/name-list.service';
import { Networth } from '../shared/models/networth';

/**
 * This class represents the lazy loaded resourceComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-resource',
  templateUrl: 'resource.component.html',
  styleUrls: ['resource.component.css'],
})
export class ResourceComponent implements OnInit {

  newName: string = '';
  errorMessage: string;
  names: any[] = [];
  highestNumber: number = 0;
  currentNetworth: Networth = {
    checking: 300,
    checkingPercent: null,
    savings: 4000,
    savingsPercent: null,
    ownHome: true,
    homeValues: [
      {
        name: 'My House',
        value: 300000,
      },
    ],
    homeValuesPercent: null,
    ownCar: true,
    carValues: [
      {
        name: 'Subaru',
        value: 20000,
      },
    ],
    carValuesPercent: null,
    haveRetirementAccounts: true,
    retirementAccountsValues: [
      {
        name: 'Roth IRA',
        value: 3200,
      },
      {
        name: '401K',
        value: 12400,
      },
    ],
    retirementAccountsPercent: null,
    haveOtherInvestments: false,
    otherInvestmentsValues: [],
    otherInvestmentsPercent: null,
    haveAdditionalAsset: true,
    additionalAssetsValues: [
      {
        name: 'Computer',
        value: 1500,
      },
    ],
    additionalAssetPercent: null,
    totalAssets: 323400,
    totalAssetsPercent: null,
    haveCreditCards: true,
    creditCardsValues: [
      {
        name: 'Capital One',
        value: 650,
        interestRate: 24
      }
    ],
    creditCardsPercent: null,
    haveCarLoan: true,
    carLoansValues: [
      {
        name: 'Subaru',
        value: 15000,
        interestRate: 4
      }
    ],
    carLoansPercent: null,
    haveHomeLoan: true,
    homeLoansValues: [
      {
        name: 'My House',
        value: 275000,
        interestRate: 4
      }
    ],
    homeLoansPercent: null,
    haveSchoolLoans: true,
    schoolLoansValues: [
      {
        name: 'School Loan',
        value: 8000,
        interestRate: 2
      }
    ],
    schoolLoansPercent: null,
    haveAdditionalDebt: false,
    additionalDebtsValues: [],
    additionalDebtPercent: null,
    totalDebt: 298650,
    totalDebtPercent: null,
    networth: 24750,
    networthPercent: null,
  }

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
    this.calculateTotalAssetAndDebt();
  }

calculateTotalAssetAndDebt() {
  var total = this.currentNetworth.totalAssets + this.currentNetworth.totalDebt;
  this.calculateAssetPercentages(total);
  this.calculateDebtPercentages(total);
}

calculateAssetPercentages(num: any) {
  var homeTotal = 0;
  var carTotal = 0;
  var retireTotal = 0;
  var investTotal = 0;
  var addTotal = 0;
  this.currentNetworth.checkingPercent = (this.currentNetworth.checking / num) * 100;
  this.currentNetworth.savingsPercent = (this.currentNetworth.savings / num) * 100;
  if(this.currentNetworth.homeValues) {
    for(var home of this.currentNetworth.homeValues) {
      homeTotal += home.value;
    }
  }
  this.currentNetworth.homeValuesPercent = (homeTotal / num) * 100;
  if(this.currentNetworth.carValues) {
    for(var car of this.currentNetworth.carValues) {
      carTotal += car.value;
    }
  }
  this.currentNetworth.carValuesPercent = (carTotal / num) * 100;
  if(this.currentNetworth.retirementAccountsValues) {
    for(var retire of this.currentNetworth.retirementAccountsValues) {
      retireTotal += retire.value;
    }
  }
  this.currentNetworth.retirementAccountsPercent = (retireTotal / num) * 100;
  if(this.currentNetworth.otherInvestmentsValues) {
    for(var invest of this.currentNetworth.otherInvestmentsValues) {
      investTotal += invest.value;
    }
  }
  this.currentNetworth.otherInvestmentsPercent = (investTotal / num) * 100;
  if(this.currentNetworth.additionalAssetsValues) {
    for(var add of this.currentNetworth.additionalAssetsValues) {
      addTotal += add.value;
    }
  }
  this.currentNetworth.additionalAssetPercent = (addTotal / num) * 100;
}

calculateDebtPercentages(num: any) {
  var creditTotal = 0;
  var carTotal = 0;
  var homeTotal = 0;
  var schoolTotal = 0;
  var addTotal = 0;
  if(this.currentNetworth.creditCardsValues) {
    for(var credit of this.currentNetworth.creditCardsValues) {
      creditTotal += credit.value;
    }
  }
  this.currentNetworth.creditCardsPercent = (creditTotal / num) * 100;
  if(this.currentNetworth.carLoansValues) {
    for(var carLoan of this.currentNetworth.carLoansValues) {
      carTotal += carLoan.value;
    }
  }
  this.currentNetworth.carLoansPercent = (carTotal / num) * 100;
  if(this.currentNetworth.homeLoansValues) {
    for(var homeLoan of this.currentNetworth.homeLoansValues) {
      homeTotal += homeLoan.value;
    }
  }
  this.currentNetworth.homeLoansPercent = (homeTotal / num) * 100;
  if(this.currentNetworth.schoolLoansValues) {
    for(var school of this.currentNetworth.schoolLoansValues) {
      schoolTotal += school.value;
    }
  }
  this.currentNetworth.schoolLoansPercent = (schoolTotal / num) * 100;
  if(this.currentNetworth.additionalDebtsValues) {
    for(var add of this.currentNetworth.additionalDebtsValues) {
      addTotal += add.value;
    }
  }
  this.currentNetworth.additionalDebtPercent = (addTotal / num) * 100;
 }

}
