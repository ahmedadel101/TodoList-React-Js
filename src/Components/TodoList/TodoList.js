import React from 'react';
import './TodoList.css'

const TodoList = (props) => {
    const {items , deleteItem} = props;
    let legnth = items.length;
    const listItem = legnth ? (
        items.map(item => { 
            return(
                <div  key={item.id}>
                    <div className="List_Todo">
                        <div className="Todo_Name">
                            <h3>{item.name}</h3>
                        </div>                   
                        <div className="Todo_Age">
                            <h3>{item.age}</h3>
                        </div>
                        <div className="click_Dell">
                            <h3  onClick={() => deleteItem(item.id)}>&times;</h3> 
                        </div>                     
                    </div>  
                </div>
            )
        })
    ) : (
        <p className="NoShow"> There is no item to show </p>
    )
       

    


  return (
      <div>
         <div className="List2_Todo">
                        <div className="Todo_Name">
                            <h3>Name</h3>
                        </div>
                   
                        <div className="Todo_Age">
                            <h3>Age</h3>
                        </div>
                        <div className="click_Dell">
                            <h3>Action</h3> 
                        </div>
                
            </div>
        <div className="Todo-List">
            {listItem}
        </div>
    </div>
  );
}

export default TodoList;
