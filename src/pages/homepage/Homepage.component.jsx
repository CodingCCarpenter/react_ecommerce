// REACT IMPORTS
import React from 'react';
import { withRouter } from 'react-router-dom';

// STYLE IMPORT
import './homepage.styles.scss';

// IMPORT COMPONENTS
import Directory from '../../components/directory/directory.component'

const HomePage = () => (
    <div className='homepage'>
        < Directory />
        
    </div>
)

export default HomePage;