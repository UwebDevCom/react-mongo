import React, { Component } from 'react';
import './App.css';
import {UsersService} from './userService';
import Button from './button/Button';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import UsersList from './UsersList';
import home from './home';


const usersService  = new UsersService();
class App extends Component {
  constructor(props){
    super(props);
    this.fetchUsers();
    this.state ={
      users: null,
      dis: false
    }
    this.inputName = React.createRef();
    this.inputLast = React.createRef();
  }

async fetchUsers(){
  const users = await usersService.fetchUsers();
  this.setState({
    users,
  })
}


async createUser(event) {
  event.preventDefault();

  await usersService.createUser({
    name: this.inputEl.current.value
  });

  this.fetchUsers();
}

async deleteUser(userid) {
  await usersService.deleteUser(userid);
  this.fetchUsers();
}

clickHandler(){
  this.setState({
    dis: true
  });
  setTimeout(()=>{
    this.setState({
      dis: false
    });
  },3000);
}
  render() {
      return (
       <Router>
       <div className="App">
          <header>
            <Link to='/users'>Find Users</Link>
            <br />
            <Link to='/'>Home</Link>
          </header>
          <h1> find users from mongo</h1>
          <Button dis={()=>this.clickHandler()} name="Dis it!" isDis={this.state.dis} />
        <Route path='/' exact={true} component={home} />
        <Route path='/users' render={()=> <UsersList users={this.state.users} deleteUser = {(user)=>this.deleteUser(user)} />}/>
        </div>
       </Router>
      );
}
}

export default App;





// async getUsersFromUrl(){
//   let users = await fetch('http://localhost:8080/users');
//   users = await users.json();
//   this.setState({users})
// }
// async createUser(e){
//   e.preventDefault();
//   await fetch('http://localhost:8080/users',{
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       name: this.inputName.current.value,
//       lastName: this.inputLast.current.value
//     })
//   });
//   this.inputName.current.value =0;
//   this.inputLast.current.value= 0;
//   this.getUsersFromUrl();
// }

// async deleteUser(userid) {
//  await fetch('http://localhost:8080/users'+userid , {
//    method: 'DELETE',
//  });
// let users = this.state.users.filter((el)=>el._id!==userid);
// this.setState({
//   users
// })
// console.log(userid);
// }