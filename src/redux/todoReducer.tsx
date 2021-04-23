const ADD_TASK = "ADD_TASK";

type TasksType = {
  id: number,
  task: string,
  done: boolean
}

type InitialStateType = {
  tasks: Array<TasksType>
}


const initialState: InitialStateType = {
  tasks: []
};

const todoReducer = (state = initialState, action: Object) => {
  switch (action.type) {
    case ADD_TASK:
      return (state = {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: state.tasks.length ? state.tasks[state.tasks.length - 1].id + 1 : 1,
            task: action.task,
            done: false
          },
        ],
      });
    default:
      return state;
  }
};

export function addTask(task: string) {
  return { type: ADD_TASK, task };
}

export default todoReducer;
