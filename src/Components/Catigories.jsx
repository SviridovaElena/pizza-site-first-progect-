import React from 'react'



function Catigories({items, onClickItem}) {
  //function const state:[any,React.Dispatch<any>]
    const[activeItem, setActiveItem] = React.useState(null);
    //const[count, setCount] = React.useState(0);


    const onSelectItem = (index) =>{
        setActiveItem(index)
        //setCount((num) => ++num);
    }
    return (
        <div>
            <div className="categories">
           
              <ul>
                <li className={activeItem === null ? 'active':''} onClick ={()=>onSelectItem(null)}>Все</li>
                { items.map ((name, index) => (
                <li 
                className={activeItem === index ? 'active':''}
                onClick = {()=> onSelectItem (index)}
                 key = {`${name}_${index}`}> {name}</li>
                ))}
              </ul>
            </div>
        </div>
    )
}

export default Catigories
