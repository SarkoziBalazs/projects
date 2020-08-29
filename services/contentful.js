import * as contentful from "contentful-management"

export async function contentfulClient(){
    const client = contentful.createClient({
        accessToken: process.env.token
    });
    const space = await client.getSpace('af3cho9ux0wm')
    return await space.getEnvironment("master")
}

export async function getEntries(){
    const client = await contentfulClient()
    return await client.getEntries()
}

export async function getEntry(id){
    const client = await contentfulClient()
    return await client.getEntry(id)
}
