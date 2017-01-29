import { Component, ViewContainerRef } from '@angular/core';
import { Config } from './shared/config/env.config';
import './operators';

// import { ComponentsHelper } from 'ng2-bootstrap/ng2-bootstrap';


/**
 * This class represents the main application component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
})
export class AppComponent {

  constructor() {
    // this.hackToFixNg221BugForNg2Bootstrap();

    console.log('Environment config', Config);
  }

  // private hackToFixNg221BugForNg2Bootstrap(): void {
  //   ComponentsHelper.prototype.getRootViewContainerRef = function () {
  //     // https://github.com/angular/angular/issues/9293
  //     if (this.root) {
  //       return this.root;
  //     }
  //     let comps = this.applicationRef.components;
  //     if (!comps.length) {
  //       throw new Error('ApplicationRef instance not found');
  //     }
  //     try {
  //       /* one more ugly hack, read issue above for details */
  //       let rootComponent = this.applicationRef._rootComponents[0];
  //       // this.root = rootComponent._hostElement.vcRef;
  //       this.root = rootComponent._component.viewContainerRef;
  //       return this.root;
  //     } catch (e) {
  //       throw new Error('ApplicationRef instance not found');
  //     }
  //   };
  // }
}
