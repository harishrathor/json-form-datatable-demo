
import { DTBL00000001Component } from "./components/DTBL00000001/DTBL00000001.component";

import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';

import { CommonModule } from "@angular/common";

const config = {
    declarations: [DTBL00000001Component],
    imports: [CommonModule, HttpClientModule, DataTablesModule],
    exports: [DTBL00000001Component],
    providers: []
};
export default config;
