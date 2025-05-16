import { CreateStore } from 'react-redux';
import { counterreducer } from "./counterreducer"

export const store = CreateStore(counterreducer);