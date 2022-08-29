import { useEffect, useState } from 'react'

const ProgressiveImg = ({ placeholderSrc, src, ...props }) => {
  const [imgSrc, setImgSrc] = useState(placeholderSrc || src)

  useEffect(() => {
    const img = new Image()
    img.src = src
    img.onload = () => {
      setImgSrc(src)
    }
  }, [src])

  const customClass =
    placeholderSrc && imgSrc === placeholderSrc ? 'loading' : 'loaded'

  return (
    <img
      {...{ src: placeholderSrc, ...props }}
      alt={props.alt || ''}
      className={`image ${customClass}`}
    />
  )
}
export default ProgressiveImg
