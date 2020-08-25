import React from 'react';

// STYLE IMPORT
import './homepage.styles.scss';

// IMPORT COMPONENTS
import Directory from '../../components/directory/directory.component'

const HomePage = ({ history }) => (
    <div className='homepage'>
        < Directory history={history}/>
        
    </div>
)

export default HomePage;