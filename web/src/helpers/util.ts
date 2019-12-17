
import imageUrlBuilder from '@sanity/image-url'
const clientConfig = require('../../client-config')

const builder = imageUrlBuilder(clientConfig.sanity)
 
export const  urlFor = (source) => builder.image(source)
