import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    imports: [MatButtonModule,MatDividerModule,MatCardModule],
    exports: [MatButtonModule,MatDividerModule,MatCardModule]
})
export class HomeMaterialModule{}