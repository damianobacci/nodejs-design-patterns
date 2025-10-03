import { EventEmitter } from 'node:events'
import { readFile } from 'node:fs'

export class FindRegex extends EventEmitter {
    constructor(regex) {
        super()
        this.regex = regex
        this.files = []
    }
    
    addFile(file) {
        this.files.push(file)
        return this
    }
    
    find() {
  const total = this.files.length
  let processed = 0
  let matchCount = 0
  let readingIndex = 1

  for (const file of this.files) {
    readFile(file, 'utf-8', (err, content) => {
    this.emit('reading', readingIndex++, this.files)
      if (err) {
        return this.emit('error', err)
      }
      this.emit('fileread', file)

      const match = content.match(this.regex)
      if (match) {
        matchCount++
        for (const elem of match) {
          this.emit('found', file, elem)
        }

        
      }

      processed++
      if (processed === total) {
        this.emit('finish', processed, matchCount)
      }
    })
  }

  return this
}

}

