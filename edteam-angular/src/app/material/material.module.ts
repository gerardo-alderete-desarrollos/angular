import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';

import { MaterialDemoComponent } from './material-demo/material-demo.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports: [
    MatToolbarModule
  ],
  declarations: [MaterialDemoComponent]
})
export class MaterialModule { }
