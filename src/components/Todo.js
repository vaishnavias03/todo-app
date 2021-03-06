import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import "./Todo.css"


const TodoInput =() =>{
    const [inputText, setInputText] = useState("");
    const [listItem, setItem] = useState([]);
    const [category, setCategory] = useState("all");
    const [filter, setFilter] = useState([]);


    const GetInput =(e)=>{
        setInputText(e.target.value);
    }

    const AddListItem = () =>{
        if(inputText === ""){
            alert("No Text Identified. Enter text to add Todo");
        }else{
            setItem([...listItem, {item: inputText, key: Math.random(1000*0.1111), status: false}]);
            setInputText("");
        }
    }
    const CategoryChangeHandler =(e)=>{
        setCategory(e.target.value);
    }

    const FilterTodo = ()=>{
            switch(category){
              case 'Completed':
                setFilter(listItem.filter((items) => items.status === true))
                break
              case 'In Progress':
                setFilter(listItem.filter((items) => items.status === false))
                console.log(listItem);
                break
              default:
                setFilter(listItem)
            }
            
    }
    
    useEffect(()=>{
        FilterTodo()
    },[listItem, category])

    return(
    <div className="wrapper">
        <div className="todo-wrapper">
            <input className="input-tag" type='text' value={inputText} onChange={GetInput} ></input>
            <button className="add-button" onClick={AddListItem}>Add Todo</button>
            <select className="category-selector" onChange={CategoryChangeHandler}>
                <option value="All" >All</option>
                <option value="Completed" >Completed</option>
                <option value="In Progress" >In Progress</option>
            </select>
        </div>
        <div className="todos">
            <TodoList filteredItem ={filter} item={listItem} setItem={setItem} text={inputText} setText={setInputText}/>
        </div>
    </div>
    );
}

function Todo(){
    return(
       <TodoInput/>
    );
}

export default Todo;