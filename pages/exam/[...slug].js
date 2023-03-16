import PageTitle from '@/components/PageTitle'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
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
  const { tags } = frontMatter
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
      <footer>
        <div className="divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y">
          {tags && (
            <div className="py-4 xl:py-8">
              <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                Tags
              </h2>
              <div className="flex flex-wrap">
                {tags.map((tag) => (
                  <Tag key={tag} folder={FOLDER} text={tag} />
                ))}
              </div>
            </div>
          )}
          {(next || prev) && (
            <div className="flex justify-between py-4">
              <div>
                <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  Previous Question
                </h2>
                {prev && (
                  <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                    <Link href={`/${FOLDER}/${prev.slug}`}>{prev.title}</Link>
                  </div>
                )}
              </div>
              <div>
                <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  Next Question
                </h2>
                {next && (
                  <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                    <Link href={`/${FOLDER}/${next.slug}`}>{next.title}</Link>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        <div className="pt-4 xl:pt-8">
          <Link
            href={`/${FOLDER}`}
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          >
            &larr; Back to the exams
          </Link>
        </div>
      </footer>
    </>
  )
}
