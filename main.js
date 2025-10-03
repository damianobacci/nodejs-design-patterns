import { tickerNew } from "./chapter3/3.3/tickerNew.js";

const tickerInstance = tickerNew(5000, (ticks) => console.log('finished!', ticks))

tickerInstance.on('tick', (i) => {
    console.log('tick', i)
})