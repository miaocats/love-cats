import React, {useEffect, useState} from 'react';
import './FirstPages.scss'
const FirstPages= ({catTypes}) =>{




const [imgs,setImgs]= useState([]);

const [urls ,setUrls] = useState(`https://api.thecatapi.com/v1/images/search?limit=19&page=10&order=Desc`);




   useEffect(()=> {
       if (1===1){
           setUrls(`https://api.thecatapi.com/v1/images/search?category_ids=2&limit=19&page=10&order=Desc`)
       };
        const getimgs = async () => {
            const response = await fetch(
                urls
            );
            const data = await response.json();
            const nums = data.length;
            // console.log(data.length);
            // console.log(data[0]['url']);

            let imgsArray = [];
            for (let i = 0 ; i<nums;i++){
                imgsArray.push(data[i]['url']);
            };
            setImgs(imgsArray);
            console.log(window.innerWidth);
        };
        getimgs();
    },[urls]
);


/*
    let imgsClass = 'img-first';
    let imgsList = 'imglist-first';
    let listImgs;
    if (window.innerWidth>900){
        imgsClass='img-second';
        imgsList='imglist-second';

        let imgListFirst = [];
        for(let i = 0 ;i <imgs.length;i+=2){
            imgListFirst.push(imgs[i]);
        };
        let imgListSecond = [];
        for(let i = 1 ;i <imgs.length;i+=2){
            imgListSecond.push(imgs[i]);
        };
        listImgs = imgs.map(
            (imgsSingle)=>
                <li>
                    <img className={imgsClass} alt="Loading-----Cat" loading="lazy" src={imgsSingle}/>
                    <img className={imgsClass} alt="Loading-----Cat" loading="lazy" src={imgsSingle}/>
                </li>

        )
    }else{
         listImgs = imgs.map(
            (imgsSingle)=>
                <li>
                    <img className={imgsClass} alt="Loading-----Cat" loading="lazy" src={imgsSingle}/>

                </li>
        );
        console.log(typeof(listImgs));
    };

*/

    let listImgs = imgs.map(
        (imgsSingle)=>
            <li>
                <img  alt="Loading" loading="lazy" src={imgsSingle}/>

            </li>
    );

    return(
        <div className='first-pages'>
            <p>{catTypes}</p>
            <ul >
            {listImgs}
            </ul>
        </div>
    )
};
export default FirstPages;