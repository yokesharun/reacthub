import axios from 'axios';
import {
	SEARCH_REPO,
	SEARCH_REPO_URL
} from '../../constants';

export const searchRepo = (q) => {
	return (dispatch) => {
		return axios.get(SEARCH_REPO_URL+"?q="+q)
		.then( response => dispatch(setSearchValues(response.data)));
	}
}

export const setSearchValues = (response) => {
	return {
		type: SEARCH_REPO,
		searchRepo: response
	};
}