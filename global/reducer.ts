import { actionType } from "./actions";
export const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionType.SHOW_ADD_FORM_ACTION: {
      return {
        ...state,
        showAddProjectForm: payload,
      };
    }
    default: {
      return state;
    }
  }
};
