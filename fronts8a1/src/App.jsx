import React from 'react';
import Button from './components/Button';

function App() {
  return (
    <div>
      {/* Usando o componente Button e passando diferentes valores para a prop label*/}
      <Button label="Clique aqui"/>
      <br/>
      <Button label="Enviar"/>
      <br/>
      <Button label="Cancelar"/>
    </div>
  );
}

export default App;
