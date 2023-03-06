import React from 'react';

import { ItemContainer } from './styles';

function ItemRepo ({repo, handleRemoveRepo}){

    const handleRemove = () => {
        handleRemoveRepo();
        
    }
    
    return(
        <ItemContainer onClick={handleRemove}>
           <h3>{repo.name}</h3>
           <p>{repo.full_name}</p>
            <a href={repo.html_url} rel='noreferrer' target='_blank'>View Repository</a><br/>
            <a href={repo.id} rel='noreferrer' className='remove'>Remove</a>
           <hr/>
        </ItemContainer>
    )
}

export default ItemRepo;