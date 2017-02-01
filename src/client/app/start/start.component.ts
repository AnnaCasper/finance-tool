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
  showNetworthTotals: boolean = false;
  showStartButton: boolean = true;
  networth: Networth = new Networth;

  /**
   * Creates an instance of the ResourceComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */
  constructor(public nameListService: NameListService) {}

  ngOnInit() {
    this.initializeArrays();
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

  start() {
    this.showStartButton = !this.showStartButton;
    this.showNetworthPanel = !this.showNetworthPanel;
  }

  onCalculate(boolean: boolean) {
    this.calculateTotalAssetAndDebt();
    this.showNetworthPanel = !this.showNetworthPanel;
    this.showNetworthTotals = !this.showNetworthTotals;
  }

  calculateTotalAssetAndDebt() {
  var total = this.networth.totalAssets + this.networth.totalDebt;
  this.calculateAssetPercentages(total);
  this.calculateDebtPercentages(total);
}

calculateAssetPercentages(num: any) {
  var homeTotal = 0;
  var carTotal = 0;
  var retireTotal = 0;
  var investTotal = 0;
  var addTotal = 0;
  this.networth.checkingPercent = (this.networth.checking / num) * 100;
  this.networth.savingsPercent = (this.networth.savings / num) * 100;
  if(this.networth.homeValues) {
    for(var home of this.networth.homeValues) {
      homeTotal += home.value;
    }
  }
  this.networth.homeValuesPercent = (homeTotal / num) * 100;
  if(this.networth.carValues) {
    for(var car of this.networth.carValues) {
      carTotal += car.value;
    }
  }
  this.networth.carValuesPercent = (carTotal / num) * 100;
  if(this.networth.retirementAccountsValues) {
    for(var retire of this.networth.retirementAccountsValues) {
      retireTotal += retire.value;
    }
  }
  this.networth.retirementAccountsPercent = (retireTotal / num) * 100;
  if(this.networth.otherInvestmentsValues) {
    for(var invest of this.networth.otherInvestmentsValues) {
      investTotal += invest.value;
    }
  }
  this.networth.otherInvestmentsPercent = (investTotal / num) * 100;
  if(this.networth.additionalAssetsValues) {
    for(var add of this.networth.additionalAssetsValues) {
      addTotal += add.value;
    }
  }
  this.networth.additionalAssetPercent = (addTotal / num) * 100;
}

calculateDebtPercentages(num: any) {
  var creditTotal = 0;
  var carTotal = 0;
  var homeTotal = 0;
  var schoolTotal = 0;
  var addTotal = 0;
  if(this.networth.creditCardsValues) {
    for(var credit of this.networth.creditCardsValues) {
      creditTotal += credit.value;
    }
  }
  this.networth.creditCardsPercent = (creditTotal / num) * 100;
  if(this.networth.carLoansValues) {
    for(var carLoan of this.networth.carLoansValues) {
      carTotal += carLoan.value;
    }
  }
  this.networth.carLoansPercent = (carTotal / num) * 100;
  if(this.networth.homeLoansValues) {
    for(var homeLoan of this.networth.homeLoansValues) {
      homeTotal += homeLoan.value;
    }
  }
  this.networth.homeLoansPercent = (homeTotal / num) * 100;
  if(this.networth.schoolLoansValues) {
    for(var school of this.networth.schoolLoansValues) {
      schoolTotal += school.value;
    }
  }
  this.networth.schoolLoansPercent = (schoolTotal / num) * 100;
  if(this.networth.additionalDebtsValues) {
    for(var add of this.networth.additionalDebtsValues) {
      addTotal += add.value;
    }
  }
  this.networth.additionalDebtPercent = (addTotal / num) * 100;
 }
}
