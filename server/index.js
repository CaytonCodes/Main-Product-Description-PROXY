/* eslint-disable no-console */
// import sever and listen on port
const server = require('./server.js');

const PORT = 3000 || process.env.PORT;

server.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
