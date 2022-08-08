import { useState } from 'react'
import { SlideService } from './SlideService'

export function SlideWindow({ postData }) {

    const [slideNumber, setActive] = useState(1)


    setTimeout(() => {
        if (slideNumber == 1) {
            setActive(slideNumber = 2)
        } else if (slideNumber == 2) {
            setActive(slideNumber = 3)
        } else if (slideNumber == 3) {
            setActive(slideNumber = 1)
        }
    }, 1000)

    return (
        <div className="carousel-inner">
            <div className={slideNumber === 1 ? 'carousel-item active' : 'carousel-item'} >
                {postData.map(post => {
                    return <SlideService
                        key={post._id}
                        img={post.img}
                        name={post.name}
                        serviceOne={post.serviceOne}
                        serviceTwo={post.serviceTwo}
                        description={post.description}
                        rating={post.rating}
                    />
                })}
            </div>
        </div>)
}