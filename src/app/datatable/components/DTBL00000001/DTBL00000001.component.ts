import { BaseDataTableComponent } from '../baseDataTable.component';
import config from './DTBL00000001.config';
import { Component } from '@angular/core';


@Component({
    selector: 'DTBL00000001',
    templateUrl: '../default.component.html',
    styleUrls: ['../default.component.css']
})
export class DTBL00000001Component extends BaseDataTableComponent{
    get code() {
        return 'DTBL00000001';
    }

    get config() {
        return config;
    }
}
