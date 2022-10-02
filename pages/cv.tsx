import { CvEducation, CvHeader, CvSkills, CvWork } from '@prisma/client'
import { GetStaticProps } from 'next/types'
import prisma from '../lib/prisma'
import Image from 'next/future/image'
import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'
import { CvNav } from '../components/CvNav'

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
  return (
    <Layout>
      <Seo
        title="Johan Hanses - CV"
        description="Welcome to Johan Hanses home."
        keywords="Typescript, Developer, React"
      />
      <CvNav />
      <article className="text-base overflow-y-auto">
        <section>
          <div className="border-t border-themeOrange dark:border-themeGreen" />

          <div className="flex flex-col lg:flex-row lg:justify-between my-8">
            <div className="w-full lg:w-4/6 space-y-1">
              <div className="flex justify-between">
                <p className="lg:w-2/6">Address:</p>
                <p className="lg:w-4/6 pl-4">{header.address}</p>
              </div>

              <div className="flex justify-between">
                <p className="lg:w-2/6">Mobile number:</p>
                <p className="lg:w-4/6 pl-4">
                  <a
                    href={`tel:${header.phone}`}
                    className="underline hover:text-themeOrange dark:hover:text-themeGreen"
                  >
                    {header.phone}
                  </a>
                </p>
              </div>

              <div className="flex justify-between">
                <p className="lg:w-2/6">Email:</p>
                <p className="lg:w-4/6 pl-4">
                  <a
                    href={`mailto:${header.email}`}
                    className="underline hover:text-themeOrange dark:hover:text-themeGreen"
                  >
                    {header.email}
                  </a>
                </p>
              </div>

              <div className="flex justify-between">
                <p className="lg:w-2/6">Date of birth:</p>
                <p className="lg:w-4/6 pl-4">{header.dateofbirth}</p>
              </div>

              <div className="flex justify-between">
                <p className="lg:w-2/6">Github:</p>
                <p className="lg:w-4/6 pl-4">
                  <a
                    target="_blank"
                    href="{{ $header->github }}"
                    className="underline hover:text-themeOrange dark:hover:text-themeGreen"
                  >
                    {header.github.replace('https://', '')}
                  </a>
                </p>
              </div>

              <div className="flex justify-between">
                <p className="lg:w-2/6">LinkedIn:</p>
                <p className="lg:w-4/6 pl-4">
                  <a
                    target="_blank"
                    href="{{ $header->linkedin }}"
                    className="underline hover:text-themeOrange dark:hover:text-themeGreen break-all"
                  >
                    {header.linkedin.replace('https://www.', '')}
                  </a>
                </p>
              </div>

              <div className="flex justify-between">
                <p className="lg:w-2/6">Languages:</p>
                <p className="lg:w-4/6 pl-4 break-words">{header.lang}</p>
              </div>

              <div className="flex justify-between">
                <p className="lg:w-2/6">Drivers license:</p>
                <p className="lg:w-4/6 pl-4">{header.driverslic}</p>
              </div>
            </div>

            <div className="order-first lg:order-last mb-6 lg:mb-0 flex justify-center lg:justify-end w-full lg:w-2/6 max-h-[134px]">
              <Image src="/jag.png" alt="me" width={202} height={134} />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold pb-2">Skills</h2>
          <div className="border-t border-themeOrange dark:border-themeGreen" />

          <div className="my-8 space-y-1">
            <p>
              <span className="font-semibold">Programming: </span>
              {skills.programming}
            </p>
            <p>
              <span className="font-semibold">Frontend: </span>
              {skills.frontend}
            </p>
            <p>
              <span className="font-semibold">Backend: </span>
              {skills.backend}
            </p>
            <p>
              <span className="font-semibold">Databases: </span>
              {skills.db}
            </p>
            <p>
              <span className="font-semibold">Tooling: </span>
              {skills.tools}
            </p>
            <p>
              <span className="font-semibold">Testing: </span>
              {skills.test}
            </p>
            <p>
              <span className="font-semibold">Server: </span>
              {skills.server}
            </p>
            <p>
              <span className="font-semibold">Other: </span>
              {skills.other}
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold pb-2">Work experience</h2>

          <div className="border-t border-themeOrange dark:border-themeGreen" />

          {works.map((w, i) => (
            <div key={i} className="my-8">
              <table>
                <tbody>
                  <tr>
                    <td style={{ minWidth: '110px', verticalAlign: 'top' }}>
                      {w.date}
                    </td>
                    <td className="pl-4">
                      <span className="font-semibold">{w.employee}</span>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td className="pl-4">
                      <i>{w.position}</i>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td className="pl-4">{w.description}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-xl font-semibold pb-2">Education</h2>

          <div className="border-t border-themeOrange dark:border-themeGreen" />

          {educations.map((e, i) => (
            <div key={i} className="my-8">
              <table>
                <tbody>
                  <tr>
                    <td style={{ minWidth: '110px', verticalAlign: 'top' }}>
                      {e.date}
                    </td>
                    <td className="pl-4">
                      <span className="font-semibold">{e.education}</span>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td className="pl-4">{e.school}</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td className="pl-4">{e.points}</td>
                  </tr>
                  <tr className="bottom">
                    <td></td>
                    <td className="pl-4">{e.description}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </section>
      </article>
    </Layout>
  )
}
