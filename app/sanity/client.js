import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'


const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

export const client = createClient({
  projectId,
  dataset,
  useCdn: true, 
  apiVersion: '2023-05-03',
})

 const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}



async function fetchCategoryData(categoryRef) {
    const categoryData = await client.fetch(`*[_id == "${categoryRef}"][0]`);
    return categoryData?.title || 'Uncategorized'; // Assuming the category name is stored in the 'name' field, update it accordingly if different.
  }
  

  export async function fetchProjectData() {
    const res = await client.fetch('*[_type == "project"]');
    const dataPromises = res.map(async (item) => {
      const category = item.categories && (await fetchCategoryData(item.categories[0]._ref));
      return {
        ...item,
        category,
      };
    });
    const data = await Promise.all(dataPromises);
    return data;
  }


  
  export async function fetchProjectHomeData() {
    const res = await client.fetch('*[_type == "project"][0..2]');
    const dataPromises = res.map(async (item) => {
      const category = item.categories && (await fetchCategoryData(item.categories[0]._ref));
      return {
        ...item,
        category,
      };
    });
    const data = await Promise.all(dataPromises);
    return data;
  }


  export async function fetchBlogData() {
    const res = await client.fetch('*[_type == "post"]');
    const dataPromises = res.map(async (item) => {
      const category = item.categories && (await fetchCategoryData(item.categories[0]._ref));
      return {
        ...item,
        category,
      };
    });
    const data = await Promise.all(dataPromises);
    return data;
  }

  export async function fetchHomeBlogData() {
    const res = await client.fetch('*[_type == "post"][0..2]');
    const dataPromises = res.map(async (item) => {
      const category = item.categories && (await fetchCategoryData(item.categories[0]._ref));
      return {
        ...item,
        category,
      };
    });
    const data = await Promise.all(dataPromises);
    return data;
  }


export default client