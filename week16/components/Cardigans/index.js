import React, { useState, useEffect }  from "react";
import { Text, View, Button } from 'react-native';

const { useReducer, useRef } = React

const initialState = {
  additionalPrice: 0,
Cardigans: {
    price: 13,
    name: "Cardigans",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd1hAR6du0Eth3VBB7Y3n8ExNnV3bewChiow&usqp=CAU",
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
   Cardigans: { ...state.Cardigans, features: state.Cardigans.features.filter((x) => x.id !== action.item.id)},
        store: [...state.store, action.item]
      };
    case "BUY_ITEM":
      return {
        ...state,
        additionalPrice: state.additionalPrice + action.item.price,
    Cardigans: { ...state.Cardigans, features: [...state.Cardigans.features, action.item] },
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
          <img src={state.Cardigans.image} />
        </figure>
        <h2>{state.Cardigans.name}</h2>
        <p>Amount: ${state.Cardigans.price}</p>
        <div className="content">
          <h6>Added features:</h6>
          {state.Cardigans.features.length ? 
            (
              <ol type="1">
                {state.Cardigans.features.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => removeFeature(item)}
                      className="button">X
                    </button>
                    {item.name}
                  </li>
                ))}
              </ol>
            ) : <p>Ultra Soft and Comfy Fit!</p>
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
            ) : <p>Match with any Outfit!</p>
          }
        </div>

        <div className="content">
        <h4>
          Total Amount: ${state.Cardigans.price + state.additionalPrice}
        </h4>
      </div>
      </div>
    </div>
  );
}
export default App;