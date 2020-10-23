import React from 'react';
import ReactDom from 'react-dom';
import TodoItem from '../Styling/TodoItem'


function Todo(){
    return(
        <div className= "todo-list">
           {/* Phase 01 */}
           {/* <input type="checkbox"/>
           <p>Water Plant</p>
           <input type="checkbox"/>
           <p>Remember to eat lunch</p>
           <input type="checkbox"/>
           <p>Do a workout</p> */}

           {/* Phase 02 */}
           <TodoItem/>
           <TodoItem/>
           <TodoItem/>
           <TodoItem/>

        </div>
    )
}
export default Todo