import { defineScalarTag, NOT_RESOLVED, type ScalarTagDefinition } from '../../tag.ts'

const nullJsonTag: ScalarTagDefinition<null> = defineScalarTag('tag:yaml.org,2002:null', {
  implicit: true,
  // Superset of source.charAt(0) over all matched inputs: null.
  implicitFirstChars: ['n'],
  resolve: (source, isExplicit) => {
    if (source === 'null' || (isExplicit && source === '')) return null

    return NOT_RESOLVED
  },
  identify: (object) => object === null,
  represent: () => 'null'
})

export { nullJsonTag }
