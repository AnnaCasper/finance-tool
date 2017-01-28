import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StartComponent } from './start.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'start', component: StartComponent }
    ])
  ],
  exports: [RouterModule]
})
export class StartRoutingModule { }
