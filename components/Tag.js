import Link from './Link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text, folder, count = 0 }) => {
  if (count > 0) {
    return (
      <>
        <Link
          href={`/${folder}/${kebabCase(text)}`}
          className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
        >
          {text.split(' ').join('-')}
        </Link>
        <Link
          href={`/${folder}/${kebabCase(text)}`}
          className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300"
        >
          {` (${count})`}
        </Link>
      </>
    )
  } else {
    return (
      <>
        <Link
          href={`/${folder}/${kebabCase(text)}`}
          className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
        >
          {text.split(' ').join('-')}
        </Link>
      </>
    )
  }
}

export default Tag
