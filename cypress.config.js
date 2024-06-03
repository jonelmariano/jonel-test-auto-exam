const { defineConfig } = require("cypress");
const fs = require('fs');
const path = require('path');

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://dev3.brokerengine.com.au/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

// module.exports = (on, config) => {
//   on('task', {
//     findFileByText({ directory, text }) {
//       return new Promise((resolve, reject) => {
//         fs.readdir(directory, (err, files) => {
//           if (err) {
//             return reject(err);
//           }
//           const matchedFile = files.find(file => file.includes(text));
//           if (matchedFile) {
//             resolve(path.join(directory, matchedFile));
//           } else {
//             reject(new Error(`No files found containing text: ${text}`));
//           }
//         });
//       });
//     }
//   });
// };


