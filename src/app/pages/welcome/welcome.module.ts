import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DemoNgZorroAntdModule } from 'src/app/shared/antd.module';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import { BasicComponent } from './components/basic/basic.component';
import { AddressComponent } from './components/address/address.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    DemoNgZorroAntdModule,
    ReactiveFormsModule,
    WelcomeRoutingModule
  ],
  declarations: [WelcomeComponent, BasicComponent, AddressComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
