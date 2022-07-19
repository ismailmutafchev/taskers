import React from 'react'
import { SlideService } from './SlideService'

export function SlideWindow() {

    const [slideNumber, setActive] = React.useState(1)


    setTimeout(() => {
        if (slideNumber === 1) {
            setActive(slideNumber = 2)
        } else if (slideNumber === 2) {
            setActive(slideNumber = 3)
        } else if (slideNumber === 3) {
            setActive(slideNumber = 1)
        }
    }, 1000)

    return (
        <div className="carousel-inner">
            <div className={slideNumber === 1 ? 'carousel-item active' : 'carousel-item'} >
                <SlideService
                    img='https://thumbs.dreamstime.com/b/furniture-assembly-man-drill-vector-flat-style-illustration-furniture-assembly-man-drill-136777920.jpg'
                    name='John Smith'
                    serviceOne='Furniture'
                    serviceTwo='Assembly'
                    description='My duties include adjusting, trimming, fitting parts, inspecting wood, ensuring quality standards, handling material orders, placing orders on pallets, and using equipment such as screwdrivers, drawer machines, and staple guns.'
                    rating={((Math.random() * 3)+2).toFixed(1)}
                />
            </div>
            <div className={slideNumber === 2 ? 'carousel-item active' : 'carousel-item'} >
                <SlideService
                    img='https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX39246923.jpg'
                    name='Ang and Brat'
                    serviceOne='Home'
                    serviceTwo='Cleaning'
                    description='Cleaning, stocking and supplying designated facility areas (dusting, sweeping, vacuuming, mopping, cleaning ceiling vents, restroom cleaning etc) Performing and documenting routine inspection and maintenance activities. Carry out heavy cleaning tasks and special projects'
                    rating={((Math.random() * 3)+2).toFixed(1)}
                    />
            </div>
            <div className={slideNumber === 3 ? 'carousel-item active' : 'carousel-item'}>
                <SlideService
                    img='https://thumbs.dreamstime.com/z/floor-installer-male-working-panels-poster-vector-illustration-person-wearing-special-uniform-protective-helmet-flooring-126994416.jpg'
                    name='Bobby Savov'
                    serviceOne='Floor'
                    serviceTwo='Instalation'
                    description='Laying wood, carpeting, tiles, concrete, and other types of flooring. Ensuring that the flooring materials are well-positioned, secure, and clean. Completing the installation by applying appropriate finishes. Educating clients about suitable care for their floors.'
                    rating={((Math.random() * 3)+2).toFixed(1)}
                    />
            </div>
        </div>)
}