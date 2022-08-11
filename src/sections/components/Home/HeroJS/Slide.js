import { useEffect, useState } from 'react'
import { SlideService } from './SlideService'

export function SlideWindow({ postData }) {
    return (
        <div className="carousel-inner">
            {postData.map(post => {
                let className = 'carousel-item'
                if (postData.indexOf(post) == 0) {
                    className = 'carousel-item active'
                }

                return <SlideService
                    key={post._id}
                    img={post.img}
                    name={post.name}
                    serviceOne={post.serviceOne}
                    serviceTwo={post.serviceTwo}
                    description={post.description}
                    rating={post.rating}
                    className={className}
                />
            })}
        </div>)
}