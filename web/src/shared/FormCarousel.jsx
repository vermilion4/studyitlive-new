import { Image, Carousel } from "react-bootstrap";

const FormCarousel = () => {
    return (
        <Carousel controls={false} fade>
            <Carousel.Item>
                <Image
                    className="d-block w-100 carousel-pic"
                    src="images/boyWithHeadPhones.webp"
                    alt="A Boy Wearing Headphones"
                />
                <Carousel.Caption>
                    <h3 className="lato-900">Start your course from here</h3>
                    <p className="lato-600">
                        Join StudyItLive today and start taking classes from the
                        comfort of your home, office, and on the go.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className="d-block w-100 carousel-pic"
                    src="images/studentsAtTable.webp"
                    alt="Students Gathered Around A Table"
                />
                <Carousel.Caption>
                    <h3 className="lato-900">Start your course from here</h3>
                    <p className="lato-600">
                        Join StudyItLive today and start taking classes from the
                        comfort of your home, office, and on the go.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className="d-block w-100 carousel-pic"
                    src="images/girlOnComputer.webp"
                    alt="A Girl Using A Computer"
                />
                <Carousel.Caption>
                    <h3 className="lato-900">Engage with tutors and collegues</h3>
                    <p className="lato-600">
                        Join StudyItLive today and start taking classes from the
                        comfort of your home, office, and on the go.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default FormCarousel;