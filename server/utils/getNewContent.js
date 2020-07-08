const fs   = require('fs')
const path = require('path')

function getNewContent({ type, meta }) {
  const map = {
    variable            : [`const tempVar = ''`],
    function            : [`function tempFxn() {`, `}`],
    reactStateHook      : [`const [%, set%] = useState('')`],
    reactUseEffectHook  : [`useEffect(() => {}, [])`],
    reactClassComponent : fs.readFileSync(
      path.resolve('./static/reactClassComponent.txt'),
      'utf8'
    ),
    reactFunctionComponent : fs.readFileSync(
      path.resolve('./static/reactFunctionComponent.txt'),
      'utf8'
    )
  }

  const rawResult = map[type]
  const { name } = meta

  if (name) {
    return [rawResult[0].replace(/.%/g, (matched) => {
      if (matched[0].match(/\W/)) {
        return `${matched[0]}${name}`
      }

      return `${matched[0]}${name[0].toUpperCase()}${name.slice(1)}`
    })]
  }

  return rawResult
}

module.exports = {
  getNewContent
}

