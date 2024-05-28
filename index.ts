import ky from 'ky'
import type { E621Response } from './e621'

const userAgent = 'getdathings / made by Kalka'

const post_data = await ky(
  'https://e621.net/posts.json?limit=24&tags=order:score+type:webm+-female+-intersex+3d+knot+world_of_warcraft',
)

const data = await post_data.json<E621Response>()

const download = async (file: string, md5: string, type: string) => {
  const fileData = await ky(file)

  const fileStream = Bun.file(`./vids/${md5}.${type}`)

  await Bun.write(fileStream, await fileData.blob())
}

for (const post of data.posts) {
  const file = post.file.url
  const hash = post.file.md5
  const type = post.file.ext
  console.log(`Downloading ${post.id}...`)
  await download(file, hash, type)
}
