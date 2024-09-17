import React from 'react'
import {
    MDBCarousel,
    MDBCarouselItem,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
} from "mdb-react-ui-kit";

const Slider = ({people}) => {
    return (
        <div className="slider">
            <MDBContainer className="my-5">
                <MDBCarousel showControls dark>
                    {people.map((person, index) => {
                        return (
                            <MDBCarouselItem
                                className={index===0 ? 'active text-center' : 'text-center'}
                                key={index}>
                                <img
                                    src={person.image}
                                    alt={person.name}
                                    className="rounded-circle shadow-1-strong mb-4 slider-img"
                                />
                                <MDBRow className="d-flex justify-content-center">
                                    <MDBCol lg="8">
                                        <h5 className="slider-name">{person.name}</h5>
                                        <p className="slider-title">{person.title}</p>
                                        <p className="slider-quote">
                                            {person.quote}
                                        </p>
                                        <MDBIcon fas icon="quote-right" className="slider-icon"/>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCarouselItem>
                        )
                    })}
                </MDBCarousel>
            </MDBContainer>
        </div>
    )
}
export default Slider


