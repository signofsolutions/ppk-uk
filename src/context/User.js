import React, { useEffect } from 'react';
import { createContext, useReducer } from 'react';
import { usersProfileView, getBooking } from 'services';
import axios from 'util/Api';
import { message } from 'antd';

const initialStateContext = {
  login: () => { },
  logOut: () => { }
}

const UserContext = createContext(initialStateContext);

function UserProvider({ children }) {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'login': return action.value;
      case 'logOut': return {};
      default: throw new Error('Unexpected action');
    }
  };
  const reducerLoader = (state, action) => {
    switch (action.type) {
      case 'start': return true;
      case 'finish': return false;
      default: throw new Error('Unexpected action');
    }
  };
  const reducerCart = (state, action) => {
    switch (action.type) {
      case 'change': return action.value;
      default: throw new Error('Unexpected action');
    }
  };
  const [user, dispatch] = useReducer(reducer, false);
  const [cart, dispatchCart] = useReducer(reducerCart, []);
  const [loader, dispatchLoader] = useReducer(reducerLoader, true);

  const login = (data) => {
    dispatch({ type: 'login', value: data })
  }
  const logOut = () => {

  }
  const changeCart = (id) => {
    let newArr = [...cart]
    if(newArr.indexOf(id)>-1){
      newArr = newArr.filter(el => el.id !== id)
    }else{
      newArr.push(id)
    }
    dispatchCart({ type: 'change', value: newArr })
    
  }
  useEffect(()=>{
    if (user) { 
      getBooking()
      .then(res=>{
        try{
          let newArr = res.items.map(el => {return el.id});
          dispatchCart({ type: 'change', value: newArr })
        }
        catch{
          console.log("erro is get booking")
        }
      })
    }
   
  },[user])
  useEffect(() => {
    if (localStorage.getItem('tokenpppn') || sessionStorage.getItem('tokenpppn') ) {      
      axios.defaults.headers.common['authorization'] = "Bearer " + (localStorage.getItem('tokenpppn')!==null ? localStorage.getItem('tokenpppn'): sessionStorage.getItem('tokenpppn'));      
      usersProfileView()
        .then(res => {
          login(res)
          dispatchLoader({type: "finish"})
        })  
        .catch(err => console.log(err))    
    }else{
      dispatchLoader({type: "finish"})
    }
  }, [])
  return (
    <UserContext.Provider value={{ login, logOut, user, cart, loader, changeCart }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserProvider, UserContext }

