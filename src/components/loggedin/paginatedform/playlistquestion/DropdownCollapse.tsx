import React from 'react';
import DropdownOption from './DropdownOption'

interface dropdownProps {
    playlists: Array<any>,
    selectID: string,    
}

function DropdownCollapse(props: dropdownProps) {

    function renderUI() {
        let dropdown = $(`#${props.selectID}`) as any;
        console.log(dropdown);
        dropdown.selectmenu({
            _renderItem: function(ul: any, item: any) {
                console.log(`ul: ${ul}}`);
                console.log(`item: ${item}`)
            }
        });
    }

    React.useEffect(() => {
        renderUI();
    });

    $(function () {
        $.widget( "custom.iconselectmenu", $.ui.selectmenu, {
          _renderItem: function( ul: any, item: any ) {
            var li = $( "<li>" ),
                wrapper = $( "<div>", { text: item.label } );
      
            if ( item.disabled ) {
              li.addClass( "ui-state-disabled" );
            }
      
            $( "<span>", {
              style: item.element.attr( "data-style" ),
              "class": "ui-icon " + item.element.attr( "data-class" )
            }).appendTo( wrapper );
      
            return li.append( wrapper ).appendTo( ul );
          }
        });

        let dropdown =  $(`dropdown${props.selectID}`) as any;
      
        dropdown
        .iconselectmenu()
        .iconselectmenu( "menuWidget")
        .addClass( "ui-menu-icons avatar" );
      });

    return(
        <select className='default-dropdown' name={props.selectID} id={props.selectID} defaultValue='default'>
            <option hidden selected key={'default'}>Select your playlist</option>
            {props.playlists?.map((playlist: any) => {
                return(<DropdownOption imgSrc={playlist.imgSrc} optionID={playlist.id} optionText={playlist.name} key={playlist.id}/>);
            })}
        </select>
    )
}

export default DropdownCollapse;