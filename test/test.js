/* Bad_URL_Scan (Tests)
 * A simple bad URL scanner for JavaScript
 * Github: https://github.com/0x4248/bad_url_scan
 * Licence: GNU General Public License v3.0
 * By: 0x4248
 */

const scan = require("../lib/index.js");

console.log("Testing");

if (scan("https://www.example.com/admin")) {
    console.log("Test 1: admin - Passed");
} else {
    console.log("Test 1: admin - Failed");
    process.exit(1);
}

if (!scan("https://www.example.com/blogs/databdase", ["blogs/database"])) {
    console.log("Test 2: blogs/database not database - Passed");
} else {
    console.log("Test 2: blogs/database not database - Failed");
    process.exit(1);
}