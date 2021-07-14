
const endpoint = "https://api.spotify.com/v1/recommendations";
const artists = '6sFIWsNpZYqfjUpaCgueju';
const danceability = encodeURIComponent('0.9');

fetch(`${endpoint}?seed_artists=${artists}&target_danceability=${danceability}`, {
  method: "GET",
  headers: {
      Authorization: `Bearer ${userAccessToken}`
  }
})
.then(response => response.json())
.then(({tracks}) => {
  tracks.forEach(item => {
    console.log(`${item.name} by ${item.artists[0].name}`);
  })
})

async function fetchAlbums() {
    const url = 'https://api.spotify.com/v1/albums';
    const response = await fetch(url, {
            headers: {
                method: 'GET',
                'Content-Type': 'application/json'
            }
        });

        const json = await response.json();
        return json;
}

console.log('Start');

fetchAlbums().then((json) => {
        console.log(json);
    }).catch(err => {
        console.log(err);
    });





// async function fetchComments() {
//     const url = 'https://jsonplaceholder.typicode.com/comments';
//     const response = await fetch(url, {
//             headers: {
//                 method: 'GET',
//                 'Content-Type': 'application/json'
//             }
//         });

//         const json = await response.json();
//         return json;
// }

// console.log('Start');

// fetchComments().then((comments) => {

//         let output = '<ol>';

//         for (const comment of comments) {
//             output += `<li>
//                 <div>${comment.name}</div>
//                 <div>${comment.email}</div>
//                 <div>${comment.body}</div>
//             </li>`;
//         }

//         output += '</ol>';
//         document.body.innerHTML = output;
//     }).catch(err => {
//         console.log(err);
//     });    

// async function createPost(post) {
//     const url = 'https://jsonplaceholder.typicode.com/posts';
//     const response = await fetch(url, {
//         method: 'POST',
//         body: post
//         headers: {
//             'Content-Type' : 'applications/json'
//         }
//     });

//     console.log(response);
//     console.log(await response.json());

// }

// const post = {

// }