import * as React from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from './theme'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './store'
import { TodoView } from './view/Todo.view'

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <TodoView />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  )
}
