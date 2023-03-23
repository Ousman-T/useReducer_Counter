import { createContext, useReducer } from 'react';
import HomePage from './pages/HomePage';
import './App.css';

// initializing our context
export const MyContext = createContext(null);

function App() {
  // initialize our useReducer
  const initialState = 0;
  // pass a reducer function and the initial state to the useReducer
  const [state, dispatch] = useReducer(reducer, initialState)
  // reducer function which will have all the logic to update the state
  function reducer(state, action){
    const {type, payload} = action;
    console.log(action);
    switch(action.type){
      case 'add':
        return state + 1;
      case 'subtract':
        return state - 1;
      case 'add_five':
        return state + payload;
      default:
          return state;
    }
  }
  return (
    <MyContext.Provider value={{state, dispatch}} >
      <div className="App">
      <HomePage />
      </div>
    </MyContext.Provider>
  );
}

export default App;
