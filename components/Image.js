import Image from 'next/image'

const normalizeSrc = (src) => {
  return src[0] === '/' ? src.slice(1) : src
}

const cloudflareImageLoader = ({ src, width, quality }) => {
  if (!quality) {
    quality = 75
  }
  src = normalizeSrc(src)
  return `https://images.denyed.workers.dev?width=${width}&quality=${quality}&image=https://denyed.xyz/${src}`
}

export default function Img(props) {
  if (process.env.NODE_ENV === 'development') {
    return <Image unoptimized={true} {...props} />
  } else {
    return <Image {...props} loader={cloudflareImageLoader} />
  }
}
