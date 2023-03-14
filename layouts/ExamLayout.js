import Link from '@/components/Link'
import SectionContainer from '@/components/SectionContainer'
import { ExamSEO } from '@/components/SEO'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import Comments from '@/components/comments'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import formatDate from '@/lib/utils/formatDate'

const examDateTemplate = { year: 'numeric', month: 'long' }
const FOLDER = 'exam'

export default function ExamLayout({ frontMatter, children }) {
  const {
    slug,
    fileName,
    authors,
    title,
    summary,
    paper,
    q_number,
    date_written,
    date_published,
    date_modified,
    images,
    tags,
    keywords,
  } = frontMatter

  return (
    <SectionContainer>
      <ExamSEO
        url={`${siteMetadata.siteUrl}/${FOLDER}/${slug}`}
        authorDetails={authors}
        title={title}
        description={summary}
        date={date_published}
        lastmod={date_modified}
        images={images}
        keywords={keywords}
      />
      <ScrollTopAndComment />
      <article>
        <header>
          <div className="space-y-0">
            <h3 className="text-1xl tracking-tight text-gray-900 dark:text-gray-100">
              <dt className="sr-only">Written on</dt>
              <time dateTime={date_written}>
                {new Date(date_written).toLocaleDateString(siteMetadata.locale, examDateTemplate)}
              </time>
              {` - ${paper}`}
            </h3>
          </div>
        </header>
        <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
          <div className="prose max-w-none pt-1 dark:prose-dark">{children}</div>
        </div>
      </article>
    </SectionContainer>
  )
}
