import React from "react";
import "./TodoList.css"
import { FcOk } from "react-icons/fc";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import {AiFillCheckCircle} from "react-icons/ai";




const TodoList = ({filteredItem, text, setText, item, setItem}) =>{

    const Delete = (items) =>{
        setItem(item.filter(element => element.key !==  items.key))
    }
    const DeleteTodo = items =>{
        if(window.confirm("You want to Delete Task "+ "\""+items.item+"\""+" ?") === true){
            Delete(items);
    }
};

    const UpdateTodo = element =>{
        text = element.item;
        setText(text);
        {Delete(element)}

    };

    const UpdateStatus = items =>{

            setItem(item.map((element) =>{
                if(element.key === items.key ){
                    if(items.status === false){
                        if((window.confirm("You are done with the Todo Task?") === true) ){
                        return(
                            {
                                ...element,  
                                status: true,
                                
                            }
                        );
                }}
                else{
                    alert("Task already completed");
                    return element;
                }
                
                
            }
            return element;
        }
        
       
        ))
    
    };

return(
        <div>
            {filteredItem.map((element) =>{
        return(
           <div className="list-wrapper">
                <p className={element.status ? "text-for-completed" : "text"}>{element.item}</p>
                <div className="buttons-wrapper">
                <button className="delete-todo" onClick={() => DeleteTodo(element)}><FaTrashAlt/></button>
                <button className="update-todo" onClick={() => UpdateTodo(element)}><FaEdit/></button>
                <button className="status" onClick={() => UpdateStatus(element)}>{element.status ? <FcOk/> : <AiFillCheckCircle/>}</button>
                </div>
                
           </div>
        );        
    })}
    </div>
    );
}





export default TodoList;