import React from 'react';
import FormButton from '../FormButton';
import PlusIcon from '../../../../public/images/PlusIcon.svg';
import LeftArrow from '../../../../public/images/LeftArrow.svg';
import RightArrow from '../../../../public/images/RightArrow.svg';
import PlaylistDropdown from './PlaylistDropdown';
import axios from 'axios';
import { v4 as uuid4 } from 'uuid';


interface playlistQProps {
    user: any
    onMerge: any
}


function PlaylistQuestion(props: playlistQProps) {
    const [playlists, setPlaylists] = React.useState<Array<any>>([]); 
    const [selectedLists, setSelected] = React.useState<Array<any>>([]);

    function addDropdown() {
        if(selectedLists.length < 5) {
            setSelected((previousList: any) => {
                let id = uuid4();
                return([...previousList, <PlaylistDropdown playlists={playlists} selectID={id} key={id} onRemove={removeDropdown}/>]);
            });
        }
    }

    function removeDropdown(e: MouseEvent) {
        const target = e.target as HTMLImageElement;
        if(target) {
            let id = target.parentElement?.id.slice(6);
            if(id != null) {
                setSelected((previousList: any) => {
                    let newList = previousList.filter((list: any) => {
                        return(list.props.selectID != id);
                    });
                    console.log(newList);
                    return newList;
                });
            }
        }
    }

    React.useEffect(() => {
        axios({
            method: 'GET',
            url: 'http://localhost:5000/get-playlists',
            headers: {
                'User': props.user.userID
            }
        }).then((returnedLists: any) => {
            setPlaylists(returnedLists.data.playlists);
        }).catch((err: any) => {
            console.log(err);
        });
    }, []);

    if(playlists.length > 0 && selectedLists.length < 2) {
        addDropdown();
    }

    function renderAdd() {
        if(selectedLists.length < 5) {
            return <FormButton text="" iconLoc='left' icon={PlusIcon} onClick={addDropdown} buttonID={null}/>
        }
    }

    function click() {
        console.log('click');
    }


    return(
        <div className='playlist-question'>
            {selectedLists.map((list: any, i: number) => {
                if(list != null) {
                    return(list);
                }
            })}
            <div className='button-panel'>
                <FormButton text="Previous" iconLoc='left' icon={LeftArrow} onClick={click} buttonID={null}/>
                {renderAdd()}
                <FormButton text="Merge" iconLoc='right' icon={RightArrow} onClick={props.onMerge} buttonID={null}/>
            </div>
        </div>
    );
}

export default PlaylistQuestion;