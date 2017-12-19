import { ADD_FAVORITE } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case ADD_FAVORITE:
      return [
        ...state,
        {
          id: action.payload.id,
          thumbnail: action.payload.thumbnail,
          name: action.payload.name,
          description: action.payload.description
        }
      ];
    default:
      return state;
  }
}
