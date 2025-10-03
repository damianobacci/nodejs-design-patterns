import { ticker } from "./chapter3/3.2/ticker.js";

const tickerInstance = ticker(5000, (ticks) => console.log('finished!', ticks))

tickerInstance.on('tick', (i) => {
    console.log('tick', i)
})