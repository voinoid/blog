// Updates the next/image to work with Cloudflare
import NextImage from 'next/image'
import siteMetadata from '@/data/siteMetadata'

const normalizeSrcCloudflare = (src) => {
  return src[0] === '/' ? src.slice(1) : src
}

const cloudflareImageLoader = ({ src, width, quality }) => {
  if (!quality) {
    quality = 75
  }
  src = normalizeSrcCloudflare(src)
  return `${siteMetadata.workerImgUrl}?width=${width}&quality=${quality}&image=${siteMetadata.siteUrl}${src}`
}

const Image = ({ ...props }) => {
  // This normalizes the src to be relative to the public folder

  // var src = normalizeSrc(props.src)
  // console.log(src)
  if (process.env.NODE_ENV === 'development') {
    return <NextImage unoptimized={true} {...props} />
  } else {
    return <NextImage {...props} loader={cloudflareImageLoader} />
  }
}

export default Image
