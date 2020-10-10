export default class Counter extends React.Component{

    constructor(props) {
    super(props);
    
      this.state= {
        counter: 0
    
      };
    }
    
    
    render() {
      return(
       <p>Count: {this.state.counter}</p>
    
      )
    }
    }
    
    export default class Reset extends React.Component{
      constructor(props) { 
      super(props);
      
        this.state= {
          counter: 0
      
        };
      }
    }  
  
  
