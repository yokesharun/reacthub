const initialState = {
	searchRepo: []
};

export default function Reducer(state = initialState, action) {
	console.log(action);
	switch (action.type) {
		default :
			return {
				...state,
				searchRepo : action.searchRepo
			};
	}
}