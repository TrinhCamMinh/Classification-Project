//! This file is used for testing with Flask Server
//! execute the file using Node directly in terminal

// Blogs Route in Flask
const FetchBlogList = async () => {
    const res = await fetch('[Flask Route Here]');
    const data = await res.json();
    console.log(data); // print blog list
};

// Categorize Route in Flask
const FetchArticleCategory = async () => {
    const body = JSON.stringify({ text: 'This is demo Article Text Data' });
    const res = await fetch('[Flask Route Here]', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body,
    });
    const data = await res.json();
    console.log(data); // print the predicted category (number format)
};
