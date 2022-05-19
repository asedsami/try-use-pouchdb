import React from 'react'
import { usePouch } from 'use-pouchdb'

export function AddTodo() {
  const db = usePouch()

  const [input, setInput] = React.useState('')

  const handleAddTodo = async (event: any) => {
    event.preventDefault()

    const doc = {
      _id: new Date().toJSON(),
      type: 'todo',
      text: input,
      done: false,
    }

    await db.put(doc)

    setInput('')
  }

  return (
    <form onSubmit={handleAddTodo}>
      <input
        type='text'
        value={input}
        minLength={1}
        onChange={(event) => {
          setInput(event.target.value)
        }}
      />

      <button>Add Todo</button>
    </form>
  )
}
