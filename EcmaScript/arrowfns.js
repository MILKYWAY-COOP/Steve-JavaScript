// function gretting(message) {
//     return alert(`${message} everyone!`)
// }

// gretting('Good morning');

//Arrow function
let gretting = (message) => alert(`${message} everyone!`);
gretting('Good morning')

let createBlog = (title, body) => {
    if (!title) {
        throw new Error('A title is required');
    };
    if (!body) {
        throw new Error('Body cant be empty');
    };
    return alert(`${title} ${body}`);
};

//createBlog(); -returns an error
createBlog('Blog title', 'Blog body');
