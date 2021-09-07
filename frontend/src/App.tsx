import DataTable from 'components/DataTable';
import Footer from 'components/Footer';
import NavBar from 'components/NavBar';
import React from 'react';

function App() {
    return (
        <>
            <NavBar></NavBar>
            <div className="App container">
                <h1 className="text-primary">Olá mundo!</h1>
                <DataTable></DataTable>
            </div>
            <Footer></Footer>
        </>
    );
}

export default App;
