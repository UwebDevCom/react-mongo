


import React , {Component} from 'react';


class Home extends Component{
    render(){
        return <div>
          <h1>Fethed Users List</h1>
          <form onSubmit={e=>this.createUser(e)}>
          <input ref={this.inputName} className="input-name" name="name" placeholder="enter a pro name:" />
          <input ref={this.inputLast} className="input-name" name="name" placeholder="enter a pro lastName:" />
          <input type="submit" />
        </form>
        </div>
    }
}


export default Home;