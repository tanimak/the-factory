import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule,MatIconModule } from '@angular/material';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule,MatIconModule],
    exports: [MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule ,MatIconModule],
})
export class MaterialImports { }