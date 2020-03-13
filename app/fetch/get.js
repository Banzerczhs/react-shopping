import 'whatwg-fetch'
import 'es6-promise'
import config from "../config/config";

export function get(url){
	var result = fetch(config.baseUrl+url,{
		credentials:'include',
		headers:{
			"Accept":"application/json,text/plain.*/*"
		}
	});
	return result;
}