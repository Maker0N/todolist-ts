import React from 'react'
import '../sass/components/todo.scss'

const Todo = (props: any) => {
  return (
    <article className='todo'>{props.itTask}</article>
  )
}

export default Todo