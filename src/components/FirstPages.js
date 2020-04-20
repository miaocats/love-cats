import React, {useEffect, useState} from 'react';
import './FirstPages.scss'
const FirstPages= () =>{

const [imgs,setImgs]= useState(' ')

   useEffect(()=> {
        const getimgs = async () => {
            const response = await fetch(
                `http://api.thecatapi.com/v1/images/search`
            );
            const data = await response.json();
            console.log(data[0]['url']);
            setImgs(data[0]['url']);
        };
        getimgs();
    },[]
);

    return(
        <div>
            <p>432</p>
            <img alt="Loading--Cat" src={imgs}/>


        </div>
    )
};
export default FirstPages;