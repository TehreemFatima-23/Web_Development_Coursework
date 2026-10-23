
"use strict";

export function createTracker(start = 0) {
    let count = start;

    return {
        add(...minutes) {
            if (!minutes.every(
                minute => Number.isFinite(minute) && minute >= 0
            )) {
                throw new Error("Minutes must be valid non-negative numbers.");
            }

            count += minutes.reduce((sum, minute) => sum + minute, 0);
            return count;
        },

        current() {
            return count;
        },

        reset() {
            count = start;
            return count;
        }
    };
}
