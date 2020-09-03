import React from 'react';

// IMPORT STYLES
import './collection-preview.styles.scss';

// COMPONENT IMPORT
import CollectionItem from '../collection-item/Collection-item.component';

const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items
                .filter((item, index) => index < 4)
                .map(({ id, ...otherItemProps }) => (
                    <CollectionItem key={id} {...otherItemProps} />
                ))}
        </div>
    </div>
)

export default CollectionPreview;