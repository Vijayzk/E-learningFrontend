import React from 'react'
import web from '../src/images/img1.avif'
import { NavLink } from 'react-router-dom'

const Card = (props) => {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img src={props.imgSrc} className="card-img-top" alt={props.imgsrc} />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.desc}</p>
                        <NavLink to='' className="btn btn-primary">Know More</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
