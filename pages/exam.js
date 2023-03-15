import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'

import Tag from '@/components/Tag'
import { getAllTags } from '@/lib/tags'
import kebabCase from '@/lib/utils/kebabCase'

const MAX_DISPLAY = 1000
const FOLDER = 'exam'

export async function getStaticProps() {
  const items = await getAllFilesFrontMatter(FOLDER)
  const tags = await getAllTags(FOLDER)

  return { props: { items, tags } }
}

export default function Exam({ items, tags }) {
  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a])
  return (
    <>
      <PageSEO
        title={siteMetadata.title}
        description={siteMetadata.description}
        keywords={`exams, matric, NSC, national senior certificate`}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-4xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:leading-10 md:leading-14">
            Exam Questions
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            All exam questions come directly out of Grade 12 NSC Examination Papers. Original Papers
            and Memoranda and be found at the following links: <br></br>(
            <a
              href="https://www.education.gov.za/Curriculum/NationalSeniorCertificate(NSC)Examinations/NSCPastExaminationpapers.aspx"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.education.gov.za
            </a>
            ) or (
            <a
              href="https://wcedonline.westerncape.gov.za/grade-12-question-papers"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://wcedonline.westerncape.gov.za
            </a>
            )
          </p>
          <div className="flex max-w-lg flex-wrap">
            {Object.keys(tags).length === 0 && 'No tags found.'}
            {sortedTags.map((t) => {
              return (
                <div key={t} className="mt-1 mb-1 mr-5">
                  <Tag text={t} folder={FOLDER} count={tags[t]} />
                </div>
              )
            })}
          </div>
          <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100">
            Latest Updates
          </h2>
        </div>
        <div>
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {!items.length && 'No items found.'}
            {items.slice(0, MAX_DISPLAY).map((frontMatter) => {
              const { slug, date, title, summary, tags } = frontMatter
              return (
                <li key={slug} className="py-0">
                  <article>
                    <div className="xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                      <h2 className="text-2xl leading-8 tracking-tight">
                        <Link
                          href={`/${FOLDER}/${slug}`}
                          className="text-gray-900 dark:text-gray-100"
                        >
                          {title} <small> - {summary}</small>
                        </Link>
                      </h2>
                      {/*<div className="flex flex-wrap">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                      </div>*/}
                    </div>
                  </article>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      {items.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href={`/${FOLDER}`}
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all exams"
          >
            all items &rarr;
          </Link>
        </div>
      )}
    </>
  )
}
