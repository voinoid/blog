import PageTitle from '@/components/PageTitle'
import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { formatSlug, getAllFilesFrontMatter, getFileBySlug, getFiles } from '@/lib/mdx'

const DEFAULT_LAYOUT = 'TutorLayout'
const FOLDER = 'tutor'

export async function getStaticPaths() {
  const tutors = getFiles(FOLDER)
  return {
    paths: tutors.map((t) => ({
      params: {
        slug: formatSlug(t).split('/'),
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const allTutors = await getAllFilesFrontMatter(FOLDER)
  const tutorIndex = allTutors.findIndex(
    (tutor) => formatSlug(tutor.slug) === params.slug.join('/')
  )
  const prev = allTutors[tutorIndex + 1] || null
  const next = allTutors[tutorIndex - 1] || null
  const tutor = await getFileBySlug(FOLDER, params.slug.join('/'))

  return { props: { tutor, prev, next } }
}

export default function Tutor({ tutor, prev, next }) {
  const { mdxSource, frontMatter } = tutor

  return (
    <>
      {frontMatter.draft !== true ? (
        <MDXLayoutRenderer
          layout={frontMatter.layout || DEFAULT_LAYOUT}
          mdxSource={mdxSource}
          frontMatter={frontMatter}
        />
      ) : (
        <div className="mt-24 text-center">
          <PageTitle>
            Under Construction{' '}
            <span role="img" aria-label="roadwork sign">
              🚧
            </span>
          </PageTitle>
        </div>
      )}
    </>
  )
}
