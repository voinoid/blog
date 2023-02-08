import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import CardLayout from '@/layouts/CardLayout'

export const TUTORS_PER_PAGE = 6

export async function getStaticProps() {
  const tutors = await getAllFilesFrontMatter('tutor', 'rank')
  const initialDisplayTutors = tutors.slice(0, TUTORS_PER_PAGE)

  return { props: { tutors, initialDisplayTutors } }
}

export default function Tutors({ tutors, initialDisplayTutors }) {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Tutors
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            These are the Tutors keen to help out.
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            <CardLayout posts={tutors} initialDisplayPosts={initialDisplayTutors} />
          </div>
        </div>
      </div>
    </>
  )
}
