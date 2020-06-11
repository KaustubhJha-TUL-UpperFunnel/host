import React,{Component} from 'react';

import CardInfo from '../components/CardInfo';

function Card(props){
    
    return(
        <div className="d-inline-block k-card" onClick={(e)=>props.click(props.item)}>
            <img className="k-card-image" src={props.item.imgSrc} />
            { props.item.selected && <CardInfo title={props.item.title} subtitle={props.item.subtitle} link={props.item.link} /> }
        </div>
    );
    
}

export default Card;