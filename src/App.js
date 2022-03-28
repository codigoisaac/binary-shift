import React from 'react';
import { Form } from './shifter/Form';
import './index.css';

function App() {
  return (
    <div className="bg-neutral-900 min-h-screen">
      <div className="text-neutral-500 font-['Space_Grotesk'] p-3 w-fit mx-auto mb-12">
        <div className="text-3xl md:text-6xl font-bold">Binary Shift</div>
        <div>by codigoisaac</div>
      </div>

      <div className="flex justify-center items-center px-2">
        <div className="w-screen md:w-9/12 lg:w-5/12">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
