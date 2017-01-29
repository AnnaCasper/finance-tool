import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start.component';
import { StartRoutingModule } from './start-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NameListService } from '../shared/name-list/name-list.service';
import { NetworthComponent } from './networth/index';

import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
  imports: [CommonModule, StartRoutingModule, SharedModule],
  declarations: [StartComponent, NetworthComponent],
  exports: [StartComponent, NetworthComponent],
  providers: [NameListService]
})
export class StartModule { }
