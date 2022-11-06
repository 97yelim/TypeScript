import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greetings from './Greetings';
import Counter from './Counter';
import MyForm from './MyForm';

const App: React.FC = () => {
  const onSubmit = (form: {name: string, description: string}) => {
    console.log(form)
  }
  return <MyForm onSubmit={onSubmit}/>
   
}

export default App;
