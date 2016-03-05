import {Component} from 'angular2/core';
import {FirstService} from '../services/first.service'

@Component({
	selector: 'hello-world',
	providers: [FirstService],
	template: `
				HELLO WORLD!!!!!!!!!!! :)
				<button (click)="updateSavedValue()">update saved data!</button>
				{{savedData}}
			  `
})
export class HelloWorld {

	savedData: string
	
	constructor(private _firstService: FirstService) {
		_firstService.setData('data set from the HelloWorld constructor')
	}

	onNgInit() {
		console.log('AND THIS IS THE CONSTRUCTOR!');
	}

	updateSavedValue() {
		this.savedData = this._firstService.getData()
		console.log('the saved value is....', this.savedData)
	}
}