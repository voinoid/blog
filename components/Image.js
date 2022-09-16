import NextImage from 'next/image'

// const normalizeSrc = src => {
//   // if ../../public in src, remove it
//   if (src.includes('../../public')) {
//     return src.replace('../../public', '')
//   }
//   return src
// }

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
