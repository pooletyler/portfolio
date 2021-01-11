export interface ISetStringAction {
  type: string;
  payload: string;
}

export interface ISetNumberAction {
  type: string;
  payload: number;
}

export interface ISetBooleanAction {
  type: string;
  payload: boolean;
}

export interface ISetArrayAction {
  type: string;
  payload: any[];
}

export interface ISetAnyAction {
  type: string;
  payload: any;
}
