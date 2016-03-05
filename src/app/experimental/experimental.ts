import {Component} from 'angular2/core';
import {HelloWorld} from '../components/helloWorld';

console.log(HelloWorld);


/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`Experimental` component loaded');

@Component({
	selector: 'experimental',
	directives: [HelloWorld],
	template: `
				Hello <b>Experimental view!</b>,
				<hello-world></hello-world>
			`
})
export class Experimental {
	constructor() {
		console.log('hello `Experimental` component from CONSTRUCTOR');
	}

	ngOnInit() {
		console.log('hello `Experimental` component...');
	}

}
