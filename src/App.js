import React from 'react';
import { Form } from './shifter/Form';
import { Logo } from './components/Logo';
import './index.css';

function App() {
  return (
    <div className="bg-neutral-900 min-h-screen">
      <Logo />
      <div className="flex justify-center items-center px-2">
        <div className="w-screen md:w-9/12 lg:w-5/12">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
