import { EventEmitter } from 'node:events'

export function ticker(number, callback) {
    let ticks = 0
    const emitter = new EventEmitter()
    for (let i = 50; i <= number; i += 50) {
        setTimeout(() => {
            emitter.emit('tick', i)
            ticks++
        }, i)
    }
    setTimeout(() => {
        callback(ticks)
    }, number)

    return emitter

}