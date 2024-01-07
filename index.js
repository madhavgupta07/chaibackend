require('dotenv').config()
const express = require('express');
const app = express();
const port = 3000

const githubData = {
    login: "madhavgupta07",
    id: 72290706,
    node_id: "MDQ6VXNlcjcyMjkwNzA2",
    avatar_url: "https://avatars.githubusercontent.com/u/72290706?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/madhavgupta07",
    html_url: "https://github.com/madhavgupta07",
    followers_url: "https://api.github.com/users/madhavgupta07/followers",
    following_url: "https://api.github.com/users/madhavgupta07/following{/other_user}",
    gists_url: "https://api.github.com/users/madhavgupta07/gists{/gist_id}",
    starred_url: "https://api.github.com/users/madhavgupta07/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/madhavgupta07/subscriptions",
    organizations_url: "https://api.github.com/users/madhavgupta07/orgs",
    repos_url: "https://api.github.com/users/madhavgupta07/repos",
    events_url: "https://api.github.com/users/madhavgupta07/events{/privacy}",
    received_events_url: "https://api.github.com/users/madhavgupta07/received_events",
    type: "User",
    site_admin: false,
    name: "Madhav Gupta",
    company: "Chandigarh Group of Colleges",
    blog: "https://madhavgupta07.github.io/Madhav_Portfolio/",
    location: "Mohali, Punjab",
    email: null,
    hireable: true,
    bio: null,
    twitter_username: null,
    public_repos: 49,
    public_gists: 0,
    followers: 12,
    following: 4,
    created_at: "2020-10-03T04:16:46Z",
    updated_at: "2024-01-07T11:36:33Z"
}


app.get('/', (req, res) => {
    res.send('Hello World!');
})
app.get('/test', (req, res) => {
    res.send('Test page');
})

app.get('/github', (req,res)=>{
    res.json(githubData);
})
// console.log(process.env.PORT)
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
});
