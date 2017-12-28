import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule, MatMenuModule } from '@angular/material';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatMenuModule],
    exports: [MatButtonModule, MatCheckboxModule, MatMenuModule],
})
export class MaterialImports { }