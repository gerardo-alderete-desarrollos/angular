import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatExpansionModule
} from '@angular/material';

import { MaterialDemoComponent } from './material-demo/material-demo.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule
  ],
  declarations: [MaterialDemoComponent]
})
export class MaterialModule { }
