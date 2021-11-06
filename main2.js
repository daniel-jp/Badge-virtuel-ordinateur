const LinksSocial = {
  github: 'Daniel-jp',
  youtube: 'UCWpSVjfuqZhQZ5gfyFg56jw',
  facebook: 'danieljoaquimpaulino.danny',
  instagram: 'danny_arm_amy',
  twitter: 'Daniel28725148',
  linkedin: 'daniel-joaquim-paulino-737808198'
}

function changeSociaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${LinksSocial[social]}`
  }
}
changeSociaLinks()

//using APi

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocial.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGithubProfileInfos()
