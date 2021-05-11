import { InitialStateType, ActionTypes, ActionTypeTypes } from "../types/types";

const initialState: InitialStateType = {
  tasks: [],
  pageSize: 1,
  currentPage: 1,
};

const todoReducer = (
  state = initialState,
  action: ActionTypes
): InitialStateType => {
  switch (action.type) {
    case ActionTypeTypes.ADD_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: state.tasks.length
              ? state.tasks[+state.tasks.length - 1].id + 1
              : 1,
            time: action.time,
            task: action.task,
            isDone: false,
          },
        ],
        pageSize: action.pageSize,
        currentPage: action.currentPage,
      };
    case ActionTypeTypes.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((it) => it.id !== action.id),
        pageSize: action.pageSize,
        currentPage: action.currentPage,
      };
    case ActionTypeTypes.DONE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((it) =>
          it.id === action.id ? { ...it, isDone: !it.isDone } : it
        ),
      };
    case ActionTypeTypes.CHANGE_PAGE:
      return {
        ...state,
        pageSize: action.pageSize,
        currentPage: action.currentPage,
      };
    case ActionTypeTypes.CHANGE_PAGE_SIZE:
      return { ...state, pageSize: action.pageSize };
    default:
      return state;
  }
};

export function addTask(
  task: string,
  time: string,
  pageSize: number,
  currentPage: number
): ActionTypes {
  return { type: ActionTypeTypes.ADD_TASK, task, time, pageSize, currentPage };
}

export function deleteTask(
  id: number,
  pageSize: number,
  currentPage: number
): ActionTypes {
  return { type: ActionTypeTypes.DELETE_TASK, id, pageSize, currentPage };
}

export function doneTask(id: number): ActionTypes {
  return { type: ActionTypeTypes.DONE_TASK, id };
}

export function changePage(pageSize: number, currentPage: number): ActionTypes {
  return { type: ActionTypeTypes.CHANGE_PAGE, pageSize, currentPage };
}

export function changePageSize(pageSize: number): ActionTypes {
  return { type: ActionTypeTypes.CHANGE_PAGE_SIZE, pageSize };
}

export default todoReducer;
