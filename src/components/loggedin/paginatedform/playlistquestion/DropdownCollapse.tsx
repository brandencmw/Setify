import React from 'react';
import DropdownOption from './DropdownOption'

interface dropdownProps {
    playlists: Array<any>,
    selectID: number,
    
}

function DropdownCollapse(props: dropdownProps) {

    function renderUI() {
        let dropdown = $('#dropdown' + (props.selectID).toString()) as any;
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

    function getNumSuffix(num: number) {
        let suffix: string;
        if(num == 1) {
            suffix =  'st'
        } else if(num == 2) {
            suffix = 'nd'
        } else if(num == 3) {
            suffix = 'rd'
        } else if(num == 4 || num == 5) {
            suffix = 'th'
        } else {
            suffix = ''
            console.error(`invalid playlist number: ${num}`);
        }
        return suffix;
    }

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

        let dropdown =  $(`dropdown${props.selectID.toString()}`) as any;
      
        dropdown
        .iconselectmenu()
        .iconselectmenu( "menuWidget")
        .addClass( "ui-menu-icons avatar" );
      });

    return(
        <select className='default-dropdown' name={props.selectID.toString()} id={'dropdown' + props.selectID.toString()} defaultValue='default'>
            <option disabled hidden selected key={'default'}>{`${props.selectID}${getNumSuffix(props.selectID)} playlist`}</option>
            {props.playlists?.map((playlist: any) => {
                return(<DropdownOption imgSrc={playlist.imgSrc} optionID={playlist.id} optionText={playlist.name} key={playlist.id}/>);
            })}
        </select>
    )
}

export default DropdownCollapse;