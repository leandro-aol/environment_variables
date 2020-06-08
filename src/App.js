import React from 'react';

const App = () => (
    <div>
        <h1>Environment: { process.env.NODE_ENV }</h1>

        <p style={ { color: 'red' } }>Meu Nome: { process.env.MEU_NOME }</p>
        <p>Meu Nome: { process.env.REACT_APP_MEU_NOME }</p>

        <p>URL da nossa API: { process.env.REACT_APP_URL_NOSSA_API }</p>

        <p>URL da API de terceiro: { process.env.REACT_APP_URL_OUTRA_API }</p>
    </div>
);

export default App;
