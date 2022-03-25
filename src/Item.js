import { useState} from 'react';

function Item(){
    let [items, setItems] = useState([])

    function addItem(){
        setItems([
            ...items,
           {
               id: items.length,
               value: Math.floor(Math.random()*10) +1
           }
        ])
    }

    return(
        <div>
            <button onClick={addItem}>Add a number</button>
            {
                items.map(i => (
                    <div 
                    key={i.id}
                    style ={{textAlign: "center",
                    background:(i.value % 2 === 0) ? "silver" : "yellow" }}
                    >
                        {i.value}
                    
                    </div>
                ))
            
            }
            

        </div>
    )
}

export default Item;