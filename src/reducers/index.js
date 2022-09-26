import counter from './Counter'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({ counter })
export default store
