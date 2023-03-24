import React from 'react'
import '../App.css';
import Header from '../components/Header';
import Form from '../components/Form';
import Result from '../components/Result';

function Home() {
    return (
        <div className="App">
            <Header />
            <Form />
            <Result />
        </div>
    )
  }
  
  export default Home