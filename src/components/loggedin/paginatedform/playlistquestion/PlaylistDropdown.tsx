import React from 'react';
import DropdownCollapse from './DropdownCollapse';
import FormButton from '../FormButton';
import TrashIcon from '../../../../public/images/TrashIcon.svg'

interface dropdownProps {
    playlists: Array<any>,
    selectID: string,
    onRemove: any
}

function PlaylistDropdown(props:dropdownProps) {

    return(
        <div className='playlist-dropdown'>
            <DropdownCollapse playlists={props.playlists} selectID={props.selectID}/>
            <FormButton icon={TrashIcon} iconLoc='left' text='' onClick={props.onRemove} buttonID={props.selectID}/> 
        </div>
    );
}

export default PlaylistDropdown;