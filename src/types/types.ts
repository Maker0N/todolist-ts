export enum ActionTypeTypes {
  ADD_TASK = "ADD_TASK",
  DELETE_TASK = "DELETE_TASK",
  DONE_TASK = "DONE_TASK",
  CHANGE_PAGE = "CHANGE_PAGE",
  CHANGE_PAGE_SIZE = "CHANGE_PAGE_SIZE",
}

export type TasksType = {
  id: number;
  time: string;
  task: string;
  isDone: boolean;
};

export type InitialStateType = {
  tasks: Array<TasksType>;
  pageSize: number;
  currentPage: number;
};

type AddTaskType = {
  type: ActionTypeTypes.ADD_TASK;
  task: string;
  time: string;
  pageSize: number;
  currentPage: number;
};

type DeleteTaskType = {
  type: ActionTypeTypes.DELETE_TASK;
  id: number;
  pageSize: number;
  currentPage: number;
};

type DoneTaskType = {
  type: ActionTypeTypes.DONE_TASK;
  id: number;
};

type ChangePageType = {
  type: ActionTypeTypes.CHANGE_PAGE;
  pageSize: number;
  currentPage: number;
};

type ChangePageTypeSize = {
  type: ActionTypeTypes.CHANGE_PAGE_SIZE;
  pageSize: number;
};

export type ActionTypes =
  | AddTaskType
  | DeleteTaskType
  | DoneTaskType
  | ChangePageType
  | ChangePageTypeSize;
