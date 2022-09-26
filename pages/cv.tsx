import { GetStaticProps } from 'next/types'
import prisma from '../lib/prisma'

export const getStaticProps: GetStaticProps = async () => {
  const header = await prisma.cvHeader.findMany()
  const skills = await prisma.cvSkills.findMany()
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

export default function Cv({ header, skills, works, educations }) {
  console.log(header, skills, works, educations)
  return <div className="mx-auto max-w-5xl">CV</div>
}
