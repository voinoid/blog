import Image from '../Image'
import Link from '../Link'

const TutorCard = ({ name, description, avatar, href }) => (
  <div className="md p-2 md:w-1/2" style={{ maxWidth: '544px' }}>
    <div
      className={`${
        avatar && 'h-full'
      } overflow-hidden rounded-md border-2 border-gray-300 border-opacity-60 dark:border-gray-700`}
    >
      <div className="flex flex-col items-center p-4">
        {avatar &&
          (href ? (
            <Link href={href} aria-label={`Link to ${name}`}>
              <Image src={avatar} alt="avatar" width="300px" height="300px" className="h-48 w-48" />
            </Link>
          ) : (
            <Image src={avatar} alt="avatar" width="300px" height="300px" className="h-48 w-48" />
          ))}
        <h3 className="pt-4 pb-2 text-2xl font-bold leading-7 tracking-tight">{name}</h3>
        <div className="text-gray-500 dark:text-gray-400">{description}</div>
        <div className="text-gray-500 dark:text-gray-400">{href}</div>
      </div>
    </div>
  </div>
)

export default TutorCard
