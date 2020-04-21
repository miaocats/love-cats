import React, {useEffect, useState} from 'react';
import './FirstPages.scss'
const FirstPages= () =>{




const [imgs,setImgs]= useState([])

   useEffect(()=> {
        const getimgs = async () => {
            const response = await fetch(
                `https://api.thecatapi.com/v1/images/search?limit=19&page=10&order=Desc`
            );
            const data = await response.json();
            const nums = data.length;
            console.log(data.length);
            console.log(data[0]['url']);
            let i;
            let imgsArray = [];
            for (i = 0 ; i<nums;i++){
                imgsArray.push(data[i]['url']);
            };
            setImgs(imgsArray);
            console.log(window.innerWidth);
        };
        getimgs();
    },[]
);



    let imgsClass = 'img-first';
    let imgsList = 'imglist-first';
    if (window.innerWidth>500){
        imgsClass='img-second';
        imgsList='imglist-second'
    };

const listImgs = imgs.map(
    (imgsSingle)=>
        <img className={imgsClass} alt="Loading--Cat" loading="lazy" src={imgsSingle}/>
);



    return(
        <div >
            <h1>Cat Photos</h1>
            <div className={imgsList}>
            {listImgs}
            </div>
        </div>
    )
};
export default FirstPages;