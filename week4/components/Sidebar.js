import Component from './Component.js';

class Sidebar extends Component {

  constructor (props) {
    super(props);
  }

  render () {
   return(
    `<ul> 
    <li>`+this.props.AlbertEggstein+`</li>
   <li> `+this.props.AttilatheHen+`</li>
   <li> `+this.props.AttilatheHen+`</li>
   <li> `+this.props.DixieChick+`</li>
   <li> `+this.props.GregoryPeck+`</li>
   <li> `+this.props.MaryPoopins+`</li>
   </ul>
   `);
    let responseHTML =  '',

    this.props.menu.forEach( (item) => {  
   
      // TODO: Add (concatenate) the value of each item to the variable responseHTML. Each should be wrapped in <li></li>
    });

    return responseHTML;
  }
}

export default Sidebar;
