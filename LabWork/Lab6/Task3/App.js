
"use strict";

import { createTracker } from "./Tracker.js";

const trackerA = createTracker();
const trackerB = createTracker(10);

trackerA.add(20);
trackerB.add(15, 5);

console.log("Tracker A:", trackerA.current());
console.log("Tracker B:", trackerB.current());

trackerA.reset();

console.log("Tracker A after reset:", trackerA.current());
console.log("Tracker B after resetting A:", trackerB.current());
