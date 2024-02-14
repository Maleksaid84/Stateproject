import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Profile from './Profile'; 
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Welcome extends Component {
  state = {
    name: "Bilbo",
    age: 35,
    image: "https://file1.telestar.fr/var/telestar/storage/images/2015/photos/le-hobbit-le-vrai-visage-des-comediens-diaporama-62387/619069-4-fre-FR/Le-Hobbit-le-vrai-visage-des-comediens-Diaporama.jpg?alias=original",
    bio: "Les aventures du hobbit Bilbo (ou Bilbon), entraîné malgré lui par le magicien Gandalf et une compagnie de treize nains dans leur voyage vers la Montagne Solitaire, avec pour but de se réapproprier le trésor volé et gardé par le dragon Smaug.",
   
    showProfile:false
    
  };

  

  handleClick = () => { this.setState({ showProfile: ! this.state.showProfile });  };

  render() {

    return (


      <div s="container ">
        

        <Button onClick={this.handleClick}>Show my Profile</Button>


        
         {this.state.showProfile && (<Profile name={this.state.name}
         age={this.state.age} image={this.state.image} bio={this.state.bio} />
        )}


      </div>
    );
  }
}
