import {Injectable} from 'angular2/core';


@Injectable()
export class FirstService {
	
	data: string

	getData() {
		return this.data	
	}

	setData(data) {
		this.data = data
	}
}