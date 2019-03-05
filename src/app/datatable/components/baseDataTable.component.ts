import { HttpClient } from "@angular/common/http";
import { OnInit, Injectable, Input, ViewChild, AfterViewInit } from "@angular/core";
import { DataTableDirective } from 'angular-datatables';


@Injectable()
export class BaseDataTableComponent implements OnInit, AfterViewInit {


    @ViewChild(DataTableDirective)
    public datatableElement: DataTableDirective;


    @Input()
    customDtOptions?: any;

    @Input()
    pageComponent: any;

    protected _url: string;
    protected _dtOptions: any;

    public isCollapsed: boolean;
    public instance: any;
    public currentData: any;
    public showDataTable: boolean;

    constructor(protected _http: HttpClient) {
        this.initialize();
    }

    public initialize() {
        try {
            this.instance = this;
            this.isCollapsed = false;
            this.showDataTable = false;
        } catch (error) {
            console.log(error);
        }
    }

    ngOnInit() {
        try {
            this._init();
        } catch (error) {
            console.log(error);
        }
    }

    protected _init() {
        try {
            this.setupConfig();
            this.pageComponent.dataTables[this.code] = this;
        } catch (error) {
            
        }
    }

    public setupConfig() {
        try {
            if (this.customDtOptions) {
                this.dtOptions = this.customDtOptions;
                return true;
            }
            let config = this.config;
            if (config) {
                config = this.customizeConfig(config);
                this.url = config.dtOptions.ajax;
                config.dtOptions.ajax = this.dataCallback.bind(this)
                this.dtOptions = config.dtOptions
                return true;
            }
            return false;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    protected customizeConfig(config: any) {
        try {
            return config;
        } catch (error) {
            console.log(error);
            return config;
        }
    }

    ngAfterViewInit(): void {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        this._afterInit();
    }

    protected _afterInit() {
      try {
       // $(`#` + this.code).DataTable(this.config);
       setTimeout(() => {
         this.showDataTable = true;
       }, 10000);
      } catch(e) {
        console.log(e);
      }
    }

    public dataCallback = (dataTablesParameters: any, callback) => {
       try {
           this._http
               .get(this.url)
               .subscribe(resp => {
                   this.currentData = resp;
                   callback(resp);
               });
       } catch (error) {
           console.log(error);
       }
    }

    public onClick(eventdata) {
        console.log('onClick', eventdata);
    }

    get code() {
        return "DefaultForm";
    }

    get id() {
        return this.code;
    }

    get config() {
        return null;
    }

    get dtOptions() {
        return this._dtOptions;
    }

    set dtOptions(options) {
        this._dtOptions = options;
    }

    get url() {
        return this._url;
    }

    set url(url) {
        this._url = url;
    }

    get label() {
      return this.config.label || '';
    }
}
