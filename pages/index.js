import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function Home() {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100">
            Welcome!
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <p>
            Here at Funatic Maths we put the fun into fanatic! Each of our Tutors find joy in
            sharing their subject knowledge. All of our Tutors have classroom teaching experience.
            Feel free to{' '}
            <Link href={'/tutors'}>
              <b> meet our Tutors </b>
            </Link>{' '}
            who are waiting to share their passions for their professions with you!
          </p>
        </div>
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <p>
            We are also in the process of compiling questions from{' '}
            <Link href={'/exam'}>
              <b> Past Matric Exams </b>
            </Link>{' '}
            for easy access and friendly viewing.
          </p>
        </div>
      </div>
    </>
  )
}
