import React from 'react';
import ProductListItem from '../ProductListItem/ProductListItem';

function ListItem(props)  {
    return (
        <div>
          {
            props.product.map(product => 
              <ProductListItem
                product={product} />
            )
          }
        </div>
    )
}

export default  ListItem;