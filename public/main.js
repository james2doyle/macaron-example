var message = document.getElementById('message');
function log(val) {
  message.innerHTML = val;
}
function getText(res) {
  return res.text();
}
function testPost() {
  fetch('http://localhost:4000/json')
  .then(getText)
  .then(log);
}
function testSubmit() {
  fetch('http://localhost:4000/contact/submit', {
    name: "James",
    email: "james2doyle@gmail.com",
    message: "Hey There",
    mailing_address: "998 Oxford Street East"
  })
  .then(getText)
  .then(log);
}
function setCookie() {
  var val = document.getElementById('cookie').value;
  fetch('http://localhost:4000/set/cookie/' + val)
  .then(getText)
  .then(log);
}
function getCookie() {
  fetch('http://localhost:4000/get/cookie')
  .then(getText)
  .then(log);
}
function newEntry() {
  fetch('http://localhost:4000/database')
  .then(getText)
  .then(log);
}
function listEntries() {
  fetch('http://localhost:4000/database/list')
  .then(getText)
  .then(log);
}
function writeCache() {
  var key = document.getElementById('cache-key').value;
  var value = document.getElementById('cache-value').value;
  fetch('http://localhost:4000/cache/write/' + key + '/' + value)
  .then(getText)
  .then(log);
}
function readCache() {
  var key = document.getElementById('cache-key').value;
  fetch('http://localhost:4000/cache/read/' + key)
  .then(getText)
  .then(log);
}