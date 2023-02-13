import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import CardLayout from '@/layouts/CardLayout'

export const TUTORS_PER_PAGE = 6

export async function getStaticProps() {
  const tutors = await getAllFilesFrontMatter('tutor', 'rank')

  // Remove the inactive Tutors.
  var tutorsToRemove = tutors.filter((x) => x.active === false)
  tutorsToRemove.forEach((x) =>
    tutors.splice(
      tutors.findIndex((n) => n === x),
      1
    )
  )

  const initialDisplayTutors = tutors.slice(0, TUTORS_PER_PAGE)

  return { props: { tutors, initialDisplayTutors } }
}

export default function Tutors({ tutors, initialDisplayTutors }) {
  return (
    <>
      <PageSEO title={`Tutors`} description={`Below are some Tutors eager to help you.`} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-1 pt-0 pb-8">
          <h1 className="text-3xl font-extrabold leading-10 tracking-tight text-gray-900 dark:text-gray-100">
            Tutors
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Below are some Tutors eager to help you!
          </p>
        </div>
        <div className="container py-8">
          <CardLayout posts={tutors} initialDisplayPosts={initialDisplayTutors} />
        </div>
      </div>
    </>
  )
}
