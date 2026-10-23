
"use strict";

function analyseMarks(rawMarks) {
    const marks = [];

    for (const raw of rawMarks) {
        if (typeof raw === "string" && raw.trim() === "") {
            throw new Error("Mark cannot be blank.");
        }

        const mark = Number(raw);

        if (!Number.isFinite(mark) || mark < 0 || mark > 100) {
            throw new Error("Each mark must be a number from 0 to 100.");
        }

        marks.push(mark);
    }

    const count = marks.length;
    const total = marks.reduce((sum, mark) => sum + mark, 0);

    const average = count === 0 ? 0 : total / count;

    const passed = marks.filter(mark => mark >= 50).length;

    const highest = count === 0 ? null : Math.max(...marks);

    return {
        count: count,
        total: total,
        average: average,
        passed: passed,
        highest: highest
    };
}

const rawMarks = ["78", "45", "90", "60"];

console.log(analyseMarks(rawMarks));
console.log("Original array:", rawMarks);

console.log("Empty array:", analyseMarks([]));
