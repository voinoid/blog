import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { TutorSEO } from '@/components/SEO'

export default function TutorLayout({ children, frontMatter }) {
  const { name, avatar, occupation, email, twitter, linkedin, github, location, keywords } =
    frontMatter

  return (
    <>
      <TutorSEO
        title={`Tutor - ${name}`}
        description={`Tutor bio and contact information for ${name}.`}
        ogImages={avatar}
        keywords={keywords}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="items-start xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center">
            <Image
              src={avatar}
              alt="avatar"
              width="192px"
              height="192px"
              className="h-48 w-48 rounded-full"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{location}</div>
            <div className="flex space-x-3 pt-6">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="linkedin" href={linkedin} />
              <SocialIcon kind="twitter" href={twitter} />
            </div>
            <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
