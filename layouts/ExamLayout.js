import Link from '@/components/Link'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import Comments from '@/components/comments'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import formatDate from '@/lib/utils/formatDate'

const examDateTemplate = { year: 'numeric', month: 'long' }
const FOLDER = 'exam'

export default function ExamLayout({ frontMatter, tutorDetails, next, prev, children }) {
  const { slug, fileName, date_written, title, paper, images, tags } = frontMatter

  return (
    <SectionContainer>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/${FOLDER}/${slug}`}
        tutorDetails={tutorDetails}
        {...frontMatter}
      />
      <ScrollTopAndComment />
      <article>
        <header>
          <div className="space-y-1">
            <h3 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl md:text-3xl">
              <dt className="sr-only">Written on</dt>
              <time dateTime={date_written}>
                {new Date(date_written).toLocaleDateString(siteMetadata.locale, examDateTemplate)}
              </time>
              <br></br>
              {paper}
            </h3>
          </div>
        </header>
        <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
          <div className="prose max-w-none pt-10 pb-8 dark:prose-dark">{children}</div>
        </div>
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
              <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
                <div>
                  <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    Previous Article
                  </h2>
                  {prev && (
                    <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                      <Link href={`/${FOLDER}/${prev.slug}`}>{prev.title}</Link>
                    </div>
                  )}
                </div>
                <div>
                  <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    Next Article
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
      </article>
    </SectionContainer>
  )
}
