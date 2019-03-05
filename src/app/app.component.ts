import { Component } from '@angular/core';
import FRM0000001Definition from './FRM0000001.definition';
import FRM0000002Definition from './FRM0000002.definition';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  public name = 'Form Demo';
	public instance: any;
	public schema: any;
	public formData: any;
	public forms: any;
	public form: any;

	constructor() {
		this.initialize();
	}

	public initialize() {
		try {
			(<any>window).pageComponent = this;
			this.forms = {};
			this.form = {};
			this.instance = this;
			this.schema = { 
				FRM0000001: FRM0000001Definition,
				FRM0000002: FRM0000002Definition

			};
			this.formData = {
				
			};

		} catch (error) {
			console.log(error);
		}
	}
}
