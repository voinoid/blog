import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'

const DEFAULT_LAYOUT = 'TutorLayout'

export async function getStaticProps() {
  const tutorDetails = await getFileBySlug('tutor', ['default'])
  return { props: { tutorDetails } }
}

export default function Tutor({ tutorDetails }) {
  const { mdxSource, frontMatter } = tutorDetails

  return (
    <MDXLayoutRenderer
      layout={frontMatter.layout || DEFAULT_LAYOUT}
      mdxSource={mdxSource}
      frontMatter={frontMatter}
    />
  )
}
