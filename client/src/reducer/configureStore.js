import centralStore from "./reducer" 
import {configureStore} from '@reduxjs/toolkit'

export const store=configureStore({reducer:{centralStore:centralStore}})