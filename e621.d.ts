export interface E621Response {
  posts: Post[]
}

export interface Post {
  id: number
  created_at: string
  updated_at: string
  file: File
  preview: Preview
  sample: Sample
  score: Score
  tags: Tags
  locked_tags: string[]
  change_seq: number
  flags: Flags
  rating: string
  fav_count: number
  sources: string[]
  pools: any[]
  relationships: Relationships
  approver_id?: number
  uploader_id: number
  description: string
  comment_count: number
  is_favorited: boolean
  has_notes: boolean
  duration: number
}

export interface File {
  width: number
  height: number
  ext: string
  size: number
  md5: string
  url: string
}

export interface Preview {
  width: number
  height: number
  url: string
}

export interface Sample {
  has: boolean
  height: number
  width: number
  url: string
  alternates: Alternates
}

export interface Alternates {
  '480p': N480p
  original: Original
  '720p'?: N720p
}

export interface N480p {
  type: string
  height: number
  width: number
  urls: string[]
}

export interface Original {
  type: string
  height: number
  width: number
  urls: string | undefined[]
}

export interface N720p {
  type: string
  height: number
  width: number
  urls: string[]
}

export interface Score {
  up: number
  down: number
  total: number
}

export interface Tags {
  general: string[]
  artist: string[]
  copyright: string[]
  character: string[]
  species: string[]
  invalid: any[]
  meta: string[]
  lore: any[]
}

export interface Flags {
  pending: boolean
  flagged: boolean
  note_locked: boolean
  status_locked: boolean
  rating_locked: boolean
  deleted: boolean
}

export interface Relationships {
  parent_id?: number
  has_children: boolean
  has_active_children: boolean
  children: number[]
}
