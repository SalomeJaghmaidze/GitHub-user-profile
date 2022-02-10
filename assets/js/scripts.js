function getUser() {
    var user = document.getElementById('site-search').value;
    fetch('https://api.github.com/users/' + user)
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {

            var main = document.getElementById('main');
            var errorimage = document.getElementById('errorimg');

            if (response.message == "Not Found") {
                main.style.display = "none";
                var errorimage = document.createElement('img');
                errorimage.src = "../imgs/imgs/not-found.gif";
                errorimage.setAttribute(id, "errorimage");
                document.getElementById('container').appendChild(errorimage);
                errorimage.style.display = "block";
                return
            }

            errorimage.style.display = "none";
            main.style.display = "flex";

            document.getElementById('name').innerText = response.name;
            document.getElementById('username').innerText = "@" + response.login;
            document.getElementById('mainImage').src = response.avatar_url;
            document.getElementById('reposNum').innerText = response.public_repos;
            document.getElementById('followersNum').innerText = response.followers;
            document.getElementById('followingNum').innerText = response.following;

            var userBio = response.bio;
            document.getElementById('info-bio').innerText = userBio != null ? userBio : "This profile has no bio";;

            var location = response.location;
            document.getElementById('location').innerText = location != null ? location : "N/A";

            var link = document.getElementById('profileUrl');
            link.setAttribute('href', response.html_url);
            document.getElementById("profileUrl").innerText = "GitHub";

            var twitter = response.twitter_username;
            var twitterUrl = document.getElementById('twitter-url');
            twitterUrl.setAttribute('href', "https://twitter.com/" + twitter);
            document.getElementById("twitter-url").innerText = twitter != null ? twitter : "Not Available";

            var companyName = response.company;
            document.getElementById('companyName').innerText = companyName != null ? companyName : "N/A";

            var dateObject = new Date(response.created_at);
            document.getElementById('date').innerText = dateObject.toDateString();;
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}



