import PageTitle from '@/components/PageTitle'
import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { formatSlug, getAllFilesFrontMatter, getFileBySlug, getFiles } from '@/lib/mdx'

const DEFAULT_LAYOUT = 'ExamLayout'
const FOLDER = 'exam'

export async function getStaticPaths() {
  const items = getFiles(FOLDER)
  return {
    paths: items.map((i) => ({
      params: {
        slug: formatSlug(i).split('/'),
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const allItems = await getAllFilesFrontMatter(FOLDER)
  const itemIndex = allItems.findIndex((item) => formatSlug(item.slug) === params.slug.join('/'))
  const prev = allItems[itemIndex + 1] || null
  const next = allItems[itemIndex - 1] || null
  const item = await getFileBySlug(FOLDER, params.slug.join('/'))
  const authorList = item.frontMatter.authors || ['default']
  const authorPromise = authorList.map(async (author) => {
    const authorResults = await getFileBySlug('tutor', [author])
    return authorResults.frontMatter
  })
  const authorDetails = await Promise.all(authorPromise)

  return { props: { item, authorDetails, prev, next } }
}

export default function Exam({ item, authorDetails, prev, next }) {
  const { mdxSource, toc, frontMatter } = item

  return (
    <>
      {frontMatter.draft !== true ? (
        <MDXLayoutRenderer
          layout={frontMatter.layout || DEFAULT_LAYOUT}
          toc={toc}
          mdxSource={mdxSource}
          frontMatter={frontMatter}
          tutorDetails={authorDetails}
          prev={prev}
          next={next}
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
