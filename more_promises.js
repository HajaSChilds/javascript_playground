
console.log('Starting Fetch call');
const postsPromise = fetch('https://api.dailysmarty.com/posts')
console.log('After Fetch call');
console.log(postsPromise);
console.log('After program has run');
    

postsPromise
.then(data => data.json()) 
.then(data => {
    data.posts.forEach((item) => {
       console.log(item.url_for_post);      
    });
})

.catch((error) => {
    console.log(error);
});

// DOES NOT WORK AS FETCH IS NOT DEFINED IN VS CODE.  ITS A BROWSER COMMAND