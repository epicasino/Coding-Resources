// grab arrays from linkArrays.js and put them into a single array called arrays
let arrays = [
    markdownArray,
    commandlineArray,
    htmlArray,
    cssArray,
    jsArray,
    webApiArray,
    restfulApiArray,
    jQueryArray,
    cssFrameworkArray,
    etcArray
]


const getAllTitles = (arrays) => {

    const matchedTitles = [];
    // 
    arrays.forEach((array) => {
        // if the item is an array it will go through it and for each item, grab the title
        if (Array.isArray(array)) {
            array.forEach(item => {
                if (item.hasOwnProperty("title")) {
                    matchedTitles.push(item.title);
                }
            });
        } else if (typeof array === "object") {
            Object.values(array).forEach((subArray) => {
                subArray.forEach((item) => {
                    if (item.hasOwnProperty("title")) {
                        matchedTitles.push(item.title);
                    }
                });
            });
        }
    });
    return matchedTitles;
}


// Retrieve the necessary DOM elements
const searchForm = document.getElementById("search");
let searchInput = document.getElementById("search-input");

const handleSearchButtonClick = (event) => {
    event.preventDefault();
    let searchText = searchInput.value.toLowerCase();
    let searchWords = searchText.split(" ");
    console.log(searchWords)
    // console.log(searchWords)
    // grab all direct ul descendants of .card class and then grab any a tag below that
    const pageText = document.querySelectorAll(".card > ul a");
    // here we will store matching nodes
    let nodeSearch = [];
    pageText.forEach(node => {
        const text = node.textContent.toLowerCase();
       if(searchWords.some(word => word !== "" && text.includes(word))) {
        // console.log(node)

        nodeSearch.push(node); // gives us access to any html textcontent that match our search

       } else {
        // console.log("this does not work :(") // do nothing?
       }
    })
    
    console.log(nodeSearch) // check the console when you run a search
    const allTitles = getAllTitles(arrays) // grabs all titles from the linkArray.js


    // const matchingTitles = allTitles.filter(title => searchWords.some(word => title.toLowerCase().includes(word.toLowerCase())))
    // if (matchingTitles.length === 0) {
    //     console.log("No matches found!")
    // } else {
    //     // console.log(matchingTitles) // uncomment to use and see
    // }

}


// Placeholder onSearch function
function onSearch(searchText) {
    // Perform the search logic here
    console.log('Search text:', searchText);
}


// Event listener for search button click
searchForm.addEventListener("submit", handleSearchButtonClick);

// Event listener for Enter key press
searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        handleSearchButtonClick();
    }
});
