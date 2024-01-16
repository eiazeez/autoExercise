const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

cypress.run({
    browser: 'chrome'
})
.then((results) => {
  const args = {
    target: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Ijg4MTQzOWYwLTRjZmQtNDk4Yy1iOTM0LWZhOWRhN2I3MGQ2Ny0xNzA1NDQ0Nzk1ODI5IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiZmVmZmY0ZjYtODdiZC00N2M3LWI4NWYtMGIzYjQ3YmY4MmIwIiwidHlwZSI6InQifQ.W17ullP4e9DcxvXT_vju_Vs8Q05Nt6U3-aE1bcsRUzA',
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})