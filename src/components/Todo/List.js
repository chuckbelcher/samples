import React from 'react';

const List = (props) => {
    return (
        <ul>
            {props.items.map((item, key) => {
                return (
                    <li key={key} 
                        className={`${item.completed ? 'completed' : 'pending'}`}
                    > 
                        {item.task}
                        <div className='actions'>
                            <span
                                className={item.completed ? 'hide' : 'done'}
                                onClick={()=> props.markAsCompleted(item.id)}
                            >
                             <i className="fa fa-check"></i>
                            </span>
                            {/*
                            * Use a call back for onClick to 
                            * call the removeTask function in
                            * Todo.js
                            */}
                            <span
                                className="trash"
                                onClick={()=> props.removeTask(item.id)}
                            >
                             <i className="fa fa-trash"></i>
                            </span>
                        </div>
                    </li>
            )})}
        </ul>
    )
}

export default List;