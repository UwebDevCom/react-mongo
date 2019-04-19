import React, { Component } from 'react';



class UsersList extends Component{
    render(){
        if (!this.props.users) {
            return  <p> waiting for users...</p>
        } else {
        return(
         <React.Fragment>
        
             <ul>
          {
            this.props.users.map(({name, lastName, _id:id})=> <li key={id}>{name} | {lastName}<button className="icon" onClick={()=>this.props.deleteUser(id)}><img src="https://image.flaticon.com/icons/svg/65/65307.svg" /></button><button  className="icon"><img src="https://image.flaticon.com/icons/svg/61/61456.svg" /></button></li>)    
          }

        </ul>
         </React.Fragment>
        );
        }
    }
}
export default UsersList;