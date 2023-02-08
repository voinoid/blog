import Card from '@/components/Card'
import { useState } from 'react'

export default function CardLayout({ posts, initialDisplayCards = [] }) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((frontMatter) => {
    const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayCards.length > 0 && !searchValue ? initialDisplayCards : filteredBlogPosts

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {!filteredBlogPosts.length && 'No tutors found.'}
        <div className="container py-2">
          <div className="-m-4 flex flex-wrap">
            {displayPosts.map((frontMatter) => {
              const { slug, name, avatar, occupation, subjects, grades } = frontMatter
              return (
                <Card
                  key={name}
                  title={name}
                  description={occupation}
                  imgSrc={avatar}
                  subjects={subjects}
                  grades={grades}
                  href={`/tutors/${slug}`}
                />
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
