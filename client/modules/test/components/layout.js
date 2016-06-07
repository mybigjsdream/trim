import React from 'react';

const Layout = ({content = () => null }) => (
    <div>
        <header>
            <h1>Mantra Voice</h1>
        </header>

        <div>
            {content()}
        </div>

        <footer>
            <small>Built with</small>
        </footer>
    </div>
);

export default Layout;