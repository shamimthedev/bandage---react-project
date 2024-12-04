import React from 'react'

const Image = ({className, imgAlt, imgSrc}) => {
  return (
    <img src={imgSrc} alt={imgAlt} className={`${className}`} />
  )
}

export default Image