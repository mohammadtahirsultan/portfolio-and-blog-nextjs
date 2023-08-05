import { groq } from "next-sanity"
import client from '../../sanity/client'


export async function generateStaticParams() {
    const query = groq`
      *[_type == 'project'] {
        url
      }
    `
    const urls = await client.fetch(query)
    const urlRoutes = urls.map(url => url)
  
    return urlRoutes.map(url => ({
      url,
    }))
  }