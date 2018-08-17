const baseUrl = 'https://jsonplaceholder.typicode.com'

function dataToJson(data) {
  return data.json()
}

function handleLogin() {
  const username = document.getElementById('username').value

  const url = `${baseUrl}/users?username=${username}`

  fetch(url)
    .then(dataToJson)
    .then((data) => {
      if (data.length === 0) {
        console.log('No users found. Do something w/ the DOM')
      } else {
        renderUserProfile(data[0])
      }
    })
}

function renderUserProfile(user) {
  document.getElementById('loginContainer').classList.add('hide')
  document.getElementById('userProfile').classList.remove('hide')

  document.getElementById('userProfileName').innerHTML = user.name
}
