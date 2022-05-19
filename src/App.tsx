import './styles.css'
import React, { useEffect } from 'react'
import PouchDB from 'pouchdb-browser'
import { Provider } from 'use-pouchdb'
import { AddTodo } from './components'
import { TodoList } from './components/TodoList/TodoList'
export default function App() {
  const [db, setDB] = React.useState(() => new PouchDB('local'))

  useEffect(() => {
    const listener = (dbName: string) => {
      if (dbName === 'local') {
        setDB(new PouchDB('local'))
      }
    }

    PouchDB.on('destroyed', listener)

    return () => {
      PouchDB.removeListener('destroyed', listener)
    }
  }, [])

  return (
    <Provider pouchdb={db}>
      <div className='App'>
        <AddTodo />
        <TodoList />
      </div>
    </Provider>
  )
}
