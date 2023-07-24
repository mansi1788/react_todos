// //import logo from './logo.svg';
// import './App.css';
// import Header from "./mycomponents/Header"
// import {Todos} from "./mycomponents/Todos";
// import {Footer} from "./mycomponents/Footer";
// import {AddTodo} from "./mycomponents/AddTodo";
// import React, { useState } from 'react';

// function App() {
//   let initTodo;
//  if( localStorage.setItem("todos")===null){
//   initTodo=[];
//  }
//  else{
//   initTodo=JSON.parse( localStorage.getItem("todos"));
//  }


//  }
//   const onDelete = (todo)=>{
//     console.log("I am onDelete of todo",todo);
//     // let index = todos.indexOf(todo);

//     setTodos(todos.filter((e)=>{
//     return e!==todo;
//   }));
//   localStorage.setItem("todos",JSON.stringify(todos));
// }

// const addTodo = (title,desc)=>{

//   console.log("I am adding this todo",title ,desc)
//   let sno;

//   if(todos.length==0){
//     sno = 0;
//   }
//   else{
//     sno = todos[todos.length-1].sno+1;
//   }

//   sno = todos[todos.length-1].sno+1;
// }
//   const myTodo = {
//     sno: sno,
//     title: title,
//     desc: desc,
//   }
//   setTodos([...todos,myTodo]);
//   console.log(myTodo);


//   localStorage.setItem("todos",JSON.stringify(todos));
 
// }


//   // const [todos, setTodos] = useState([
//   // {
//   //   sno: 1,
//   //   title: "Go to the market",
//   //   desc: "You need to go to the market to get this job done"
//   // },
//   // {
//   //   sno: 2,
//   //   title: "Go to the mall",
//   //   desc: "You need to go to the market to get this job done"
//   // },
//   // {
//   //   sno: 3,
//   //   title: "Go to the ghat",
//   //   desc: "You need to go to the market to get this job done"
//   // },
//   const [todos, setTodos] = useState(initTodo);


//   return (
//     <>

//     <Header title="My Todos List" searchBar={false}/>
//     <AddTodo addtodo={addTodo}/>
//     <Todos todos= {todos} onDelete = {onDelete}/>
//     <Footer/>
    
//     </>
//   );
  

// export default App;


import './App.css';
import Header from "./mycomponents/Header"
import {Todos} from "./mycomponents/Todos";
import {Footer} from "./mycomponents/Footer";
import {AddTodo} from "./mycomponents/AddTodo";
import {About} from "./mycomponents/About";
import { BrowserRouter as Router, Switch, Route, Link } from 
'react-router-dom';
import React, { useState } from 'react';
import {useEffect} from 'react';
  

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("I am ondelete of todo", todo);
    // Deleting this way in react does not work
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    console.log("deleted", todos)
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc)
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return ( 
    <> 
    <Router>
      <Header title="My Todos List" searchBar={false} /> 
      <Switch>
          <Route exact path="/" render={()=>{
            return(
            <>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} /> 
            </>)
          }}> 
          </Route>
          <Route exact path="/about">
            <About />
          </Route> 
        </Switch> 
      <Footer />
    </Router>
    </>
  );
}

export default App;
