import React from 'react';
import { Catigories, SortPopup, PizzaBlock} from '../Components'


function Home({items}) {
  
    return (
        <div className="container">
        <div className="content__top">
          <Catigories 
          onClickItem = {(name)=> console.log(name)}
          items={['Meat','Vegan','Grill','Spicy','Kolsone']}/>
          <SortPopup items={['popular','price','alphabet']}/>
          
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {
            items.map(
              (obj) => (<PizzaBlock 
                //name={obj.name}
                key = {obj.id}
                {...obj}
               // imageUrl={obj.imageUrl}
                
              />)
            )
          }
      

        </div>
      </div>
    )
}

export default Home
