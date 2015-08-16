var message = document.getElementById('message');
function log(val) {
  message.innerHTML = val;
}
function getText(res) {
  return res.text();
}
function get(url) {
  fetch(url)
  .then(getText)
  .then(log);
}
function testPost() {
  get('http://localhost:4000/json');
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
  get('http://localhost:4000/set/cookie/' + val);
}
function getCookie() {
  get('http://localhost:4000/get/cookie');
}
function newEntry() {
  get('http://localhost:4000/database');
}
function listEntries() {
  get('http://localhost:4000/database/list');
}
function writeCache() {
  var key = document.getElementById('cache-key').value;
  var value = document.getElementById('cache-value').value;
  get('http://localhost:4000/cache/write/' + key + '/' + value);
}
function readCache() {
  var key = document.getElementById('cache-key').value;
  get('http://localhost:4000/cache/read/' + key);
}