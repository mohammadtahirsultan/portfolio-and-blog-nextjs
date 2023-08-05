import { RichTextComponent } from '../../../components/RichTextComponent';
import client from '../../../sanity/client';
import { PortableText } from '@portabletext/react'
import { groq } from 'next-sanity'



export const revalidate = 30

export async function generateStaticParams() {
  const query = groq`
    *[_type == 'post'] {
      slug
    }
  `
  const slugs = await client.fetch(query)
  const slugRoutes = slugs.map(slug => slug.slug.current)

  return slugRoutes.map(slug => ({
    slug,
  }))
}

const Blog = async ({ params }) => {

  const blogId = params.blog
  const res = await client.fetch(`*[_type == "post" && slug.current == "${blogId}"]{body}`)



  return (
    <div className='max-w-full mx-10'>

      <PortableText
        value={res[0].body}
        components={RichTextComponent}
      />
    </div>
  )
}

export default Blog