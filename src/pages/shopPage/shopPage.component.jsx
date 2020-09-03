import React from 'react';

// DATA IMPORT
import SHOP_DATA from './shop.data.js'

// COMPONENT IMPORT
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        } 
    }

    render() {
        
        return(
            <div>
                <CollectionPreview />
            </div>
        )
    }
}

export default ShopPage;