import React from 'react';

const Layout = ({content = () => null, footer = () => null}) => (
    <div>
        <header>
            <h1>Mantra Voice</h1>
        </header>
        <div>
            {content()}
        </div>
        <footer>
            <small>{footer()}</small>
        </footer>
    </div>
);

export default Layout;