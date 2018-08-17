const baseUrl = 'https://jsonplaceholder.typicode.com'

function dataToJson(data) {
  return data.json()
}

function fetchUserByUsername(username) {
  const url = `${baseUrl}/users?username=${username}`

  return new Promise((resolve, reject) => {
    // Native browser method.
    fetch(url)
      .then(dataToJson)
      .then((users) => {
        if (users.length === 0) {
          reject(`Username ${username} is not valid`)
        } else {
          resolve(users[0])
        }
      })
  })
}

function handleUserNotFound(err) {
  // do something with the DOM to indicate no users were found.
  console.error(err)
}

function renderUserProfile(user) {
  document.getElementById('loginContainer').classList.add('hide')
  document.getElementById('userProfile').classList.remove('hide')

  document.getElementById('userProfileName').innerHTML = user.name
}

// Click event
function handleLogin() {
  const username = document.getElementById('username').value

  fetchUserByUsername(username)
    .then(renderUserProfile)
    .catch(handleUserNotFound)
}

