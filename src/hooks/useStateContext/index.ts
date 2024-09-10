
import  { useContext } from 'react';
import { StateContext } from '../../context/StateContext';


export default function useStateContext() {
    const globalState = useContext(StateContext);
    return globalState;
  }
