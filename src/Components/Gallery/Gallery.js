import React from 'react';
import { Container } from 'reactstrap';
import './Gallery.css'
function Gallery(props){
    return <Container>
            <div className="box">
                {props.albumn.map((fotos, index)=>(<div key={index} className="card"><img alt="gatinho" src={'https://farm'+fotos.farm+'.staticflickr.com/'+fotos.server+'/'+fotos.id+'_'+fotos.secret+'.jpg'} ></img>
                <h2>{fotos.title}</h2></div>))}
            </div>
    </Container>
}

export default Gallery