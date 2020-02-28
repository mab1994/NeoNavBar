import React, { Component } from 'react';
import NavBar from './navBar'

const Menus = [
  {title: "Home", link:""},
  {title: "Services", link:"", subMenu:['For Entrepreneurs', 'For Students', 'For Hobbyists']},
  {title: "Contacts", link:""},
  

]


class App extends Component {
   render() {
    return (
      <div className="App divStyle" >
       <NavBar data = {Menus}/>
      </div>
    );
   }
  
}

export default App;

