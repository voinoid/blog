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
  const { slug, fileName, title, paper, images, tags } = frontMatter

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
              {paper}
            </h3>
          </div>
        </header>
        <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
          <div className="prose max-w-none pt-5 dark:prose-dark">{children}</div>
        </div>
      </article>
    </SectionContainer>
  )
}
