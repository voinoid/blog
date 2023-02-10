import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, subjects, grades, href }) => (
  <div className="md flex flex-col p-4 md:w-1/2" style={{ maxWidth: '544px' }}>
    <div
      className={`${
        imgSrc && 'h-full'
      } overflow-hidden rounded-md border-2 border-gray-300 border-opacity-60 dark:border-gray-700`}
    >
      <div className="flex flex-col items-center p-2">
        {imgSrc &&
          (href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              <Image
                src={imgSrc}
                alt="image"
                width="300px"
                height="300px"
                className="h-48 w-48 rounded-md"
              />
            </Link>
          ) : (
            <Image
              src={imgSrc}
              alt="image"
              width="300px"
              height="300px"
              className="h-48 w-48 rounded-md"
            />
          ))}
        <h3 className="pt-4 pb-2 text-2xl font-bold leading-7 tracking-tight">{title}</h3>
        <div className="text-gray-500 dark:text-gray-400">{description}</div>
        <div className="text-gray-500 dark:text-gray-400">{subjects}</div>
        <div className="text-gray-500 dark:text-gray-400">{grades}</div>
        {href && (
          <Link
            href={href}
            className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={`Link to ${title}`}
          >
            More Info &rarr;
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default Card
