import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    console.log('📄 LAYOUT COMPONENT RENDERING');
    return (
        <div style={{ padding: '20px', color: 'white', background: 'blue', minHeight: '100vh' }}>
            <h2>LAYOUT COMPONENT IS WORKING</h2>
            <p>If you see this blue background, Layout is rendering correctly.</p>
            <hr style={{ margin: '20px 0', borderColor: 'white' }} />
            <div style={{ padding: '20px', background: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}>
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;