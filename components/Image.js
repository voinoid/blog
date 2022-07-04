import Image from 'next/image'

const normalizeSrc = (src) => {
  // if ../../public in src, remove it
  if (src.includes('../../public')) {
    return src.replace('../../public', '')
  }
  return src
}

const normalizeSrcCloudflare = (src) => {
  return src[0] === '/' ? src.slice(1) : src
}

const cloudflareImageLoader = ({ src, width, quality }) => {
  if (!quality) {
    quality = 75
  }
  src = normalizeSrcCloudflare(src)
  return `https://images.denyed.workers.dev?width=${width}&quality=${quality}&image=https://denyed.xyz/${src}`
}

export default function Img(props) {
  // This normalizes the src to be relative to the public folder
  var src = normalizeSrc(props.src)

  if (process.env.NODE_ENV === 'development') {
    return <Image unoptimized={true} {...props} src={src} />
  } else {
    return <Image {...props} src={src} loader={cloudflareImageLoader} />
  }
}
