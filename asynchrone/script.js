fetch("https://api.github.com/users/Distrib-PS")
.then(response => response.json())
.then(response => {
    console.log(response)
    document.getElementById("avatar").src = response.avatar_url
})