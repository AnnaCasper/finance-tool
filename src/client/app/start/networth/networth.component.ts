import { Component, OnInit, Input } from '@angular/core';
import { Networth } from '../../shared/models/networth'
import { Asset } from '../../shared/models/asset';

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

  constructor() {}

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
      if(type === 'retirement') {
          this.networth.retirmentAccountsValues = [];
          this.networth.retirmentAccountsValues.push(item);
          console.log(this.networth.retirmentAccountsValues);
      }
  }

  openModal(modal: any) {
    modal.show();
  }

}
