import React, { useState } from "react"

const StarRating = ({rate}) => {
  const localRating = localStorage.rating ? JSON.parse(localStorage.rating) : []

  const [rating, setRating] = useState(Math.floor(rate))
  const [hover, setHover] = useState(Math.floor(rate))

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1
        return (
          <button
            key={index}
            className={index <= ((rating && hover) || hover) ? "text-yellow-500" : "text-gray-50"}
            // onClick={() => setRating(index)}
            // onMouseEnter={() => setHover(index)}
            // onMouseLeave={() => setHover(rating)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 inline">
              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
            </svg>
          </button>
        )
      })}
    </div>
  )
};

export default StarRating