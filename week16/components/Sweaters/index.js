import React, { useState, useEffect }  from "react";
import { Text, View, Button } from 'react-native';

const { useReducer, useRef } = React

const initialState = {
  additionalPrice: 0,
Sweaters: {
    price: 13,
    name: "Sweaters",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdgldDygo6DDc6mAozUD13d9sD3qKqZwayeg&usqp=CAU",
    features: []
  },
  store: [
    { id: 1, name: "Small", price: 0},
    { id: 2, name: "Medium", price: 2 },
    { id: 3, name: "Large", price: 3 },
    { id: 4, name: "XL ", price: 5  }
  ]
};

const reducer = (state, action) => {
  switch (action.type) {
    case "REMOVE_ITEM":
      return {
        ...state,
        additionalPrice: state.additionalPrice - action.item.price,
   Sweaters: { ...state.Sweaters, features: state.Sweaters.features.filter((x) => x.id !== action.item.id)},
        store: [...state.store, action.item]
      };
    case "BUY_ITEM":
      return {
        ...state,
        additionalPrice: state.additionalPrice + action.item.price,
      Sweaters: { ...state.Sweaters, features: [...state.Sweaters.features, action.item] },
        store: state.store.filter((x) => x.id !== action.item.id)
      }
    default:
      return state;
  }
}

const App = () => {
  const inputRef = useRef();
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const removeFeature = (item) => {
    dispatch({ type: 'REMOVE_ITEM', item });
  }
  
  const buyItem = (item) => {
    dispatch({ type: 'BUY_ITEM', item })
  }
  
  return (
    <div className="boxes">
      <div className="box">
        <figure className="image is-128x128">
          <img src={state.Sweaters.image} />
        </figure>
        <h2>{state.Sweaters.name}</h2>
        <p>Amount: ${state.Sweaters.price}</p>
        <div className="content">
          <h6>Added features:</h6>
          {state.Sweaters.features.length ? 
            (
              <ol type="1">
                {state.Sweaters.features.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => removeFeature(item)}
                      className="button">X
                    </button>
                    {item.name}
                  </li>
                ))}
              </ol>
            ) : <p>Super Comfy and Warm!</p>
          }
        </div>
      </div>
      <div className="box">
        <div className="content">
          <h4>Additional Features</h4>
          {state.store.length ? 
            (
            <ol type="1">
              {state.store.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => buyItem(item)}
                    className="button">Add</button>
                  {item.name} (+{item.price})
                </li>
              ))}
            </ol>
            ) : <p>Great for Sweater Weather!</p>
          }
        </div>

        <div className="content">
        <h4>
          Total Amount: ${state.Sweaters.price + state.additionalPrice}
        </h4>
      </div>
      </div>
    </div>
  );
}
export default App;