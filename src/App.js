import React from 'react';
import { Form } from './features/shifter/Form';
import './index.css';

function App() {
  return (
    <div className="flex justify-center min-h-screen items-center bg-neutral-900">
      <div className="w-screen md:w-9/12 lg:w-5/12">
        <Form />
      </div>
    </div>
  );
}

export default App;
