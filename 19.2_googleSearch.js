//  Problem 19.2: Suppose you have a list of google search results and you want to allow users to filter the results by the domain of the website. you could represent the list of search results as an array of objects, where each object represents a search result with a title, URL, and description

const searchResults = [
    {
        title: "Google",
        url: "https://www.google.com",
        description: "Search the world's information, including webpages, images, videos and more."
    },

    {
        title: "Wikipedia",
        url: "https://en.wikipedia.org",
        description: "Wikipedia is a free online encyclopedia, created and edited by volunteers around the world."
    },

    {
        title: "GitHub",
        url: "https://github.com",
        description: "GitHub is where over 56 million developers shape the future of software, together. Contribute to the open source community, manage your Git repositories, review code like a pro, track bugs and features, power your CI/CD and DevOps workflows, and secure code before you commit it."
    }
];


const filterResult = (results, domain) => {
    return results.filter(result => result.url.includes(domain));
}

console.log(filterResult(searchResults, "google"));