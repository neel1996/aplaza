import React from "react";

type InitialStateType = {
  showAddProjectForm: boolean;
};

export const initialState = {
  showAddProjectForm: false,
};

export const AplazaContext = React.createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
}>({ state: initialState, dispatch: () => null });
