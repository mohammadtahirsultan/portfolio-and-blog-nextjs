import { RichTextComponent } from '../../../components/RichTextComponent';
import client from '../../../sanity/client';
import { PortableText } from '@portabletext/react'
import { generateStaticParams } from '../../staticPagesBuild';


export const revalidate = 30


const Blog = async ({ params }) => {

  await generateStaticParams()
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