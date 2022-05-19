import React from 'react'
import { useAllDocs } from 'use-pouchdb'
const Todo = ({ todo }: any) => {
  return (
    <li className='todo-item'>
      <span className='todo-item__text'>{todo.text}</span>
    </li>
  )
}

export function TodoList() {
  const { rows: todos, loading } = useAllDocs({
    include_docs: true,
  })

  return (
    <ul className='todo-list'>
      {(todos && todos.length) || loading
        ? todos.map((todo) => <Todo key={todo.key} todo={todo.doc} />)
        : 'No todos, yay!'}
    </ul>
  )
}
