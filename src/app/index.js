import React,{Suspense} from "react";
import {  Route, Switch } from "react-router-dom";
//styles
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/index.scss";
//views
import Home from "views/home/Home";

function App() {
  console.log("app",this)
  return (
    <Suspense fallback={<div style={{width:"100%", height:"400px", display:"flex", justifyContent:"center", alignItems:"center"}}></div>}>
       <Switch>
          <Route  path="/" component={Home} />
        </Switch>
    </Suspense>
  );
}

export default App;
