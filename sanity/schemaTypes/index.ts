import { type SchemaTypeDefinition } from 'sanity'
import { movies } from './movies'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [movies],
}
