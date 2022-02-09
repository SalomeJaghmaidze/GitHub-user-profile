function getUser() {
    var user = document.getElementById('site-search').value;
    fetch('https://api.github.com/users/' + user)
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            var name = response.name;
            document.getElementById('name').innerText = name;

            var userLogin = response.login;
            document.getElementById('username').innerText = "@" + userLogin;

            var image = response.avatar_url;
            document.getElementById('mainImage').src = image;

            var userBio = response.bio;
            if (userBio == null) {
                document.getElementById('info-bio').innerText = "This profile has no bio";
            } else {
                document.getElementById('info-bio').innerText = userBio;
            }

            var reposNum = response.public_repos;
            document.getElementById('reposNum').innerText = reposNum;

            var followersNumber = response.followers;
            document.getElementById('followersNum').innerText = followersNumber;

            var followingNumber = response.following;
            document.getElementById('followingNum').innerText = followingNumber;


            var location = response.location;
            if (location == null) {
                document.getElementById('location').innerText = "N/A";
            } else {
                document.getElementById('location').innerText = location;
            }

            var profile = response.html_url;
            var link = document.getElementById('profileUrl');
            link.setAttribute('href', profile);
            document.getElementById("profileUrl").innerText = "GitHub";

            var twitter = response.twitter_username;
            if (twitter === null) {
                document.getElementById("twitter-url").innerText = "Not Available";
            } else {
                var twitterUrl = document.getElementById('twitter-url');
                twitterUrl.setAttribute('href', "https://twitter.com/" + twitter);
                document.getElementById("twitter-url").innerText = twitter;
            }


            var companyName = response.company;
            if (companyName == null) {
                document.getElementById('companyName').innerText = "N/A";
            } else {
                document.getElementById('companyName').innerText = companyName;
            }

            var joinedDate = response.created_at;
            var d = new Date(joinedDate);
            var date = d.toDateString();
            document.getElementById('date').innerText = date;
        });
}