import { CvEducation, CvHeader, CvSkills, CvWork } from '@prisma/client'
import { GetStaticProps } from 'next/types'
import prisma from '../lib/prisma'
import Image from 'next/future/image'
import Link from 'next/link'

export const getStaticProps: GetStaticProps = async () => {
  const header = await prisma.cvHeader.findFirst()
  const skills = await prisma.cvSkills.findFirst()
  const work = await prisma.cvWork.findMany()
  const education = await prisma.cvEducation.findMany()

  return {
    props: {
      header: JSON.parse(JSON.stringify(header)),
      skills: JSON.parse(JSON.stringify(skills)),
      works: JSON.parse(JSON.stringify(work)),
      educations: JSON.parse(JSON.stringify(education))
    }
  }
}

type CvProps = {
  header: Omit<CvHeader, 'id' | 'createdAt' | 'updatedAt'>
  skills: Omit<CvSkills, 'id' | 'createdAt' | 'updatedAt'>
  works: Omit<CvWork, 'createdAt' | 'updatedAt'>[]
  educations: Omit<CvEducation, 'createdAt' | 'updatedAt'>[]
}

export default function Cv({ header, skills, works, educations }: CvProps) {
  console.log(skills)
  return (
    <div className="mx-auto max-w-5xl">
      <nav className="block space-x-4">
        <Link href="/cv">
          <a>CV</a>
        </Link>
        <Link href="/cover-letter">
          <a>Cover letter</a>
        </Link>
      </nav>
      <aside>
        <div className="w-[202px] h-[134px] relative">
          <Image src="/jag.png" fill alt="jag" />
        </div>
      </aside>
      <main>
        <section>
          <p>{header.name}</p>
          <p>{header.address}</p>
          <p>{header.phone}</p>
          <p>{header.email}</p>
          <p>{header.dateofbirth}</p>
          <p>{header.github}</p>
          <p>{header.linkedin}</p>
          <p>{header.lang}</p>
          <p>{header.driverslic}</p>
        </section>
        <section>
          <p>{skills.programming}</p>
          <p>{skills.frontend}</p>
          <p>{skills.backend}</p>
          <p>{skills.db}</p>
          <p>{skills.tools}</p>
          <p>{skills.test}</p>
          <p>{skills.server}</p>
          <p>{skills.other}</p>
        </section>
        <section>
          {works.map((work) => (
            <div key={work.id}>
              <p>{work.date}</p>
              <p>{work.employee}</p>
              <p>{work.position}</p>
              <p>{work.description}</p>
            </div>
          ))}
        </section>
        <section>
          {educations.map((education) => (
            <div key={education.id}>
              <p>{education.date}</p>
              <p>{education.education}</p>
              <p>{education.school}</p>
              <p>{education.points}</p>
              <p>{education.description}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  )
}
