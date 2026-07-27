import { getProject, projects } from '@/lib/data/projects'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { ProjectDetail } from '@/components/ProjectDetail'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const project = getProject(id)

  if (!project) {
    notFound()
  }

  return (
    <>
      <Navigation />
      <main className="bg-background pt-24 pb-12">
        <ProjectDetail project={project} />
      </main>
      <Footer />
    </>
  )
}