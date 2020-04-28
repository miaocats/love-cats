import React from 'react';
import './CatHeader.scss';
import  cat from '../img/cat.jpg';


const CatHeader =({clicks}) =>{
    return(
        <div className='cat-header'>
    <ul>
                <li onClick={()=>{clicks('&mime_types=gif')}}><img src={cat} alt='icons' />animated</li>
                <li onClick={()=>{clicks('&category_ids=3')}}><img src={cat} alt='icons' /> funny</li>
                <li onClick={()=>{clicks('&category_ids=14')}}><img src={cat} alt='icons' />sinks</li>
                <li onClick={()=>{clicks('&category_ids=7')}}><img src={cat} alt='icons' />ties</li>
                <li onClick={()=>{clicks('&category_ids=5')}}><img src={cat} alt='icons' />boxes</li>
                <li onClick={()=>{clicks('&category_ids=1')}}><img src={cat} alt='icons' />hates</li>
    </ul>
        </div>
    )
};
export default CatHeader;