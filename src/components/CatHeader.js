import React from 'react';
import './CatHeader.scss';
import  cat from '../img/cat.jpg';


const CatHeader =({clicks}) =>{
    return(
        <div className='cat-header'>
    <ul>
                <li onClick={()=>{clicks('animated')}}><img src={cat} alt='icons' />animated</li>
                <li onClick={()=>{clicks('funny')}}><img src={cat} alt='icons' /> funny</li>
                <li onClick={()=>{clicks('kittens')}}><img src={cat} alt='icons' />kittens</li>
                <li onClick={()=>{clicks('ties')}}><img src={cat} alt='icons' />ties</li>
                <li onClick={()=>{clicks('boxes')}}><img src={cat} alt='icons' />boxes</li>
                <li onClick={()=>{clicks('ties')}}><img src={cat} alt='icons' />ties</li>
    </ul>
        </div>
    )
};
export default CatHeader;