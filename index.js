// function displayCommits() {
//   const commits = JSON.parse(this.responseText)
//   const commitsList = `<ul>${commits.map(commit => '<li><strong>' + commit.author.login + '</strong> - ' + commit.commit.message + '</li>').join('')}</ul>`
//   document.getElementById("details").innerHTML = commitsList
// }
//
// function getCommits(el) {
//   const username = el.dataset.username
//   const repo = el.dataset.repo
//   const req = new XMLHttpRequest()
//   req.addEventListener("load", showCommits)
//   req.open("GET", 'https://api.github.com/repos/' + username+ '/' + repo + '/commits')
//   req.send()
// }
//
// function showRepositories(event, data) {
//   var repos = JSON.parse(this.responseText)
//   console.log(repos)
//   const repoList = `<ul>${repos.map(r => '<li>' + r.name + ' - <a href="#" data-repo="' + r.name + 'data-username="' + r.owner.login + '"  onclick="getCommits(this)">Get Commits</a></li>').join('')}</ul>`
//
//   document.getElementById("repositories").innerHTML = repoList
// }
//
//
// function getRepositories() {
//   let username = document.getElementById('username').value
//   const req = newXMLHttpRequest()
//   req.addEventListener("load", showRepositories)
//   req.open("GET", 'https://api.github.com/users/' + username + '/repos')
//   req.send()
// }
function displayBranches(){
  
}

function getBranches(el) {
  const name = el.dataset.repo
  const req = new XMLHttpRequest()
  req.addEventListener("load", displayBranches)
  req.open("GET", 'https://api.github.com/repos/octocat/' + name + '/commits')
  req.send()
}

function displayCommits() {
  const commits = JSON.parse(this.responseText)
  const commitsList = `<ul>${commits.map(commit => '<li><strong>' + commit.author.login + '</strong> - ' + commit.commit.author.name + '-' +  commit.commit.message + '</li>').join('')}</ul>`
  document.getElementById("details").innerHTML = commitsList
}

function getCommits(el) {
  const name = el.dataset.repo
  const req = new XMLHttpRequest()
  req.addEventListener("load", displayCommits)
  req.open("GET", 'https://api.github.com/repos/octocat/' + name + '/commits')
  req.send()
}

function displayRepositories(event, data) {
  var repos = JSON.parse(this.responseText)
  console.log(repos)
  const repoList = `<ul>${repos.map(r => '<li>' + r.name + ' - <a href="#" data-repo="' + r.name + '" onclick="getCommits(this)">Get Commits</a> - <a href="#" data-repo="' + r.name + '" onclick="getBranches(this)">Get Branches</a></li>').join('')}</ul>`
  document.getElementById("repositories").innerHTML = repoList
}

function getRepositories() {
  const req = new XMLHttpRequest()
  req.addEventListener("load", displayRepositories)
  req.open("GET", "http://api.github.com/users/octocat/repos")
  req.send()
}
