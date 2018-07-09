import axios from "axios";
import {
	SEARCH_REPO,
	SEARCH_REPO_URL,
	SEARCH_USER,
	SEARCH_USER_URL,
	SEARCH_ISSUE,
	SEARCH_ISSUE_URL
} from "../../constants";

export const searchRepo = q => {
	return dispatch => {
		return axios
			.get(SEARCH_REPO_URL + "?q=" + q)
			.then(response => dispatch(setSearchRepoValues(response.data)));
	};
};

export const searchUser = q => {
	return dispatch => {
		return axios
			.get(SEARCH_USER_URL + "?q=" + q)
			.then(response => dispatch(setSearchUserValues(response.data)));
	};
};

export const searchIssue = q => {
	return dispatch => {
		return axios
			.get(SEARCH_ISSUE_URL + "?q=" + q)
			.then(response => dispatch(setSearchIssueValues(response.data)));
	};
};

export const setSearchRepoValues = response => {
	return {
		type: SEARCH_REPO,
		searchRepo: response
	};
};

export const setSearchUserValues = response => {
	return {
		type: SEARCH_USER,
		searchUser: response
	};
};

export const setSearchIssueValues = response => {
	return {
		type: SEARCH_ISSUE,
		searchIssue: response
	};
};
