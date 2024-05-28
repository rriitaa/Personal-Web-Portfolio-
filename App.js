import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header'; // Importa el componente Header desde su archivo
import Footer from './Footer'; // Importa el componente Footer desde su archivo
import MainContent from './MainContent'; // Importa el componente MainContent desde su archivo

const App = () => {
    return (
        <div>
            <Header />
            <MainContent />
            {/* Otros componentes aquí */}
            <Footer />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
