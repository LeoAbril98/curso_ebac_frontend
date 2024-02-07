document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const reposElement = document.querySelector('#repos');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#links');

    fetch('https://api.github.com/users/LeoAbril98')
    .then(function(res) {
        return res.json();
    })
    .then(function(json) {
        try {
            nameElement.innerText = json.name;
            usernameElement.innerText = json.name;
            avatarElement.src = json.avatar_url;
            followingElement.innerText = json.following;
            followersElement.innerText = json.followers;
            reposElement.innerText = json.public_repos;
            linkElement.href = json.html_url;
        } catch (error) {
            console.error('Erro ao processar os dados da API:', error);
        }
    })
    .catch(function(error) {
        console.error('Erro ao buscar os dados da API:', error);
    });
})
