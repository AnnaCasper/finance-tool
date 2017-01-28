import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourceComponent } from './resource.component';
import { ResourceRoutingModule } from './resource-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NameListService } from '../shared/name-list/name-list.service';

import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
  imports: [CommonModule, ResourceRoutingModule, SharedModule],
  declarations: [ResourceComponent],
  exports: [ResourceComponent],
  providers: [NameListService]
})
export class ResourceModule { }
