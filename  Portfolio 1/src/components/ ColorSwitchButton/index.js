import React from 'react';

class ColorSwitchButton extends React.Component {
    constructor(){
           super();
  
           this.state = {
                redButton: true
           }
      }
  
      changeColor(){
          this.setState({black: !this.state.redButton})
      }
  
      render(){
          let btn_class = this.state.redButton? "greenButton" : "redButton";
  
          return (
               <div>
                   <button className={btn_class}
                           onClick={this.changeColor.bind(this)}>
                           Click me!
                    </button>
               </div>
          )
      }
  }
  
export default ColorSwitchButton;
  