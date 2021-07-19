//Component for Header 
//import React from 'react'; //this is for Functional component
import React, {Component} from 'react'; ////this is for Class component

//Functional component
const Header = function(props){
  const headerStyle = {
    textAlign: 'center',
    padding: 20,
    background: '#000',
    color: '#fff',
    textTransform: 'uppercase'
 };
    return(
      <div style={headerStyle}>
      {props.heading}
   </div>
    )
}

//Class Component
// class Header2 extends Component{
  
//   render() {
//     const headerStyle = {
//       textAlign: 'center',
//       padding: 20,
//       background: '#000',
//       color: '#fff',
//       textTransform: 'uppercase'
//    };
//     return (
//         <div className="header2" style={headerStyle}>
//             {this.props.heading}
//         </div>
//     )
// }
// }
export default Header;



