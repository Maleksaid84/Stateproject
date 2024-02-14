import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

export default class Profile extends Component {

  state= {num:0}  

  componentDidMount() {
    setInterval(() => {
      this.setState({ num: this.state.num + 1 });
    }, 1000);
  }
  
  render() {
    const { name, age, image, bio ,} = this.props; 
    

    return (
      <Card style={{ width: '40rem' }}>
        <Card.Img variant="top" src={image} alt="Profile" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Age: {age}

          </Card.Text>
          <Card.Text>
            <h2>time: {this.state.num}</h2>
            
          </Card.Text>
          <Card.Text>{bio}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
