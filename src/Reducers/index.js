import { SEARCH_REPO, SEARCH_USER, SEARCH_ISSUE } from "../constants";

const initialState = {
	searchRepo: [],
	searchUser: [],
	searchIssue: []
};

export default function Reducer(state = initialState, action) {
	console.log(action);

	switch (action.type) {
		case SEARCH_USER:
			return {
				...state,
				searchUser: action.searchUser
			};

		case SEARCH_REPO:
			return {
				...state,
				searchRepo: action.searchRepo
			};

		case SEARCH_ISSUE:
			return {
				...state,
				searchIssue: action.searchIssue
			};

		default:
			return state;
	}
}
