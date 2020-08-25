import React from 'react';

// STYLE IMPORT
import './homepage.styles.scss';

// IMPORT COMPONENTS
import MenuItem from '../../components/menu-item'
const HomePage = () => (
    <div className='homepage'>
        <div className='directory-menu'>
            <MenuItem />
        </div>
        
    </div>
)

export default HomePage;