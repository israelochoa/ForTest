import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Button, Container, Card, Row } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setBookName: '',
      setReview: '',
      fetchData: [],
      reviewUpdate: '',
    };
  }
  handleChange = (event) => {
    let nam = event.target.name;
    let val = event.target.value
    this.setState({
      [nam]: val
    })
    console.log("-------nam: ",nam);
    console.log("-------val: ",val);
  }
  
  handleChange2 = (event) => {
    this.setState({
      reviewUpdate: event.target.value
    })
  }
  componentDidMount(){
    axios.get("http://localhost:5000/getBooks")
        .then((response) => {
            this.setState({
                fetchData: response.data
            })
        })
  }
  

  submit = () => {
    axios.post('http://localhost:5000/insert', this.state)
        .then(() => { alert('success post') });
    console.log(this.state);
    document.location.reload();
  }

  edit = (id) => {
    axios.put(`http://localhost:5000/update/${id}`, this.state)
    document.location.reload();
  }

  render() {
    try {
      
      
      return (
        <div className='App'>
          <h1>Dockerized Fullstack React Application</h1>
          <div className='form'>
              <input name='setBookName' placeholder='Enter Book Name' onChange={this.handleChange} />
              <input name='setReview' placeholder='Enter Review' onChange={this.handleChange} />
          </div>
          <Button className='my-2' variant="primary" onClick={this.submit}>Submit</Button> <br /><br />
          <Container>
              <Row>
                  
              </Row>
          </Container>
        </div>
      );
    }catch (error) {
      console.log(error);
    }
    
  };
 
}
export default App;

