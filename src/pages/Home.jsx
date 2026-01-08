import React from 'react';

const Home = () => {
    console.log('🏠 HOME COMPONENT RENDERING');
    return (
        <div style={{ padding: '20px', color: 'white', background: 'red' }}>
            <h1>TEST: Home Component is Rendering!</h1>
            <p>If you see this, the component loads successfully.</p>
            <p>Timestamp: {new Date().toISOString()}</p>
        </div>
    );
};

export default Home;