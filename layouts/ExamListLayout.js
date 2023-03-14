import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { MDXLayoutRenderer } from '@/components/MDXComponents'

const FOLDER = 'exam'
const DEFAULT_LAYOUT = 'ExamLayout'

export default function ExamListLayout({ items, title }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-4 tracking-tight text-gray-900 dark:text-gray-100 md:text-5xl">
            {title}
          </h1>
        </div>
        <ul>
          {items.map((item) => {
            const { mdxSource, toc, frontMatter } = item
            const { slug, date, title, tags } = frontMatter
            return (
              <li key={slug} className="py-2">
                <article className="space-y-1 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                  <div className="xl:col-span-3">
                    <div>
                      <MDXLayoutRenderer
                        layout={frontMatter.layout || DEFAULT_LAYOUT}
                        toc={toc}
                        mdxSource={mdxSource}
                        frontMatter={frontMatter}
                      />
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
        <div className="pt-4 xl:pt-8">
          <Link
            href={`/${FOLDER}`}
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          >
            &larr; Back to the exams
          </Link>
        </div>
      </div>
    </>
  )
}
