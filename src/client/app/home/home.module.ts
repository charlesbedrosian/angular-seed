import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { jqxSchedulerComponent } from 'jqxscheduler';

@NgModule({
  imports: [HomeRoutingModule, SharedModule],
  declarations: [HomeComponent, jqxSchedulerComponent],
  exports: [HomeComponent],
})
export class HomeModule { }
