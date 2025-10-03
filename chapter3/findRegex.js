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
        for (const file  of this.files) {
            readFile(file, 'utf-8', (err, content) => {
                if (err) {
                    return this.emit('error', err)
                }
                this.emit('fileread', file)

                const match = content.match(this.regex)
                if (match) {
                    for (const elem of match) {
                        this.emit('found', file, elem)
                    }
                }
            })
        }
        return this
    }
}

