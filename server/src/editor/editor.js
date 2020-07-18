const { getNewContent }    = require('../../utils/getNewContent')
const { formatInputQuery } = require('../../utils/utils')

const { getUtils } = require('./editorUtils')

function addEditorPageEvents({ client }) {
  const {
    readFile,
    ioServer,
  } = global.globalUtilFunctions
  const {
    handleFileImport,
    handleLibraryImport,
    validateAndSaveFileContent
  } = getUtils()

  client.on('import operation', async (data) => {
    const { operation, name, file } = data
    const formattedNames = formatInputQuery(name)

    let operationOn = ''

    if (operation === 'library import') {
      operationOn = 'library'

      handleLibraryImport({
        data,
        operationOn,
        formattedNames
      })
    } else if (operation === 'file import') {
      operationOn = 'file'

      handleFileImport({
        data,
        operationOn,
        formattedNames
      })
    } else if (operation === 'library import confirmation') {
      const importContent = `import {} from '${data.imortItem}'\r`
      const fileContent = readFile(file)
      const fileContentByLine = fileContent.split(/\r?\n/)

      const newContent = [importContent, ...fileContentByLine]

      validateAndSaveFileContent({
        data,
        file,
        content : newContent.join('\n')
      })
    } else if (operation === 'file import confirmation') {
      handleFileImport({
        data,
        operationOn,
        formattedNames,
        filteredList : [data.imortItem]
      })
    }
  })

  client.on('renderFile', (data) => {
    const fileContent = readFile(data.fileName)

    ioServer.emit('renderFile', { fileContent, ...data })
  })

  client.on('addNewItem', (data) => {
    let newContent

    const {
      line,
      type,
      file,
      meta = {},
      changeType = 'line'
    } = data

    const normalizedLineNumber = parseInt(line, 10) - 1
    const fileContent          = readFile(file)
    const fileContentByLine    = fileContent.split(/\r?\n/)
    const newPart              = getNewContent({ type, meta })

    if (changeType === 'line') {
      const firstPart = fileContentByLine.slice(0, normalizedLineNumber)
      const lastPart  = fileContentByLine.slice(normalizedLineNumber)

      newContent = [...firstPart, ...newPart, ...lastPart].join('\n')
    } else if (changeType === 'file') {
      newContent = newPart
    }

    validateAndSaveFileContent({
      data,
      file,
      content : newContent
    })
  })

  client.on('save content', ({ file, content }) => {
    validateAndSaveFileContent({
      file,
      content
    })
  })
}

module.exports = {
  addEditorPageEvents
}

