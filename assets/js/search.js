/**
 * --------------Two ways to search => located in the handleSearchButtonClick();
 * 1. The first way below is finding the matching html nodes on the page and giving back a list. This gives access to the html content of those nodes as well as the href link value
 * 2. The second way is matching the titles in the linkArray.js
 *      - This gives back a list of matching titles
 * 
 * It should be noted that nothing on the page is displayed. Everything is displayed in the console. 
 * 
 * ------------------------------ :Other Notes: ---------------------------------------
 * Might be a good idea to use the getAllTitles() function to ensure the correct node is grabbed and the correct link is being
 * displayed
 */


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
    nodeJSArray,
    jsOOPArray,
    etcArray
]

// function to get allTitles from the arrays in linkArrays
// this function is currenlty not being used
const getAllTitles = (arrays) => {
    // initiate empty array to push titles
    const titles = [];
    // 
    arrays.forEach((array) => {
        // if the item is an array it will go through it and for each item, grab the title
        if (Array.isArray(array)) {
            array.forEach(item => {
                if (item.hasOwnProperty("title")) {
                    titles.push(item.title);
                }
            });
            // if the item is an object, it will then go in and check the 'values' of the object and see if any of those has a title -> if they do it will push the title into the titles array located on line 35
        } else if (typeof array === "object") {
            Object.values(array).forEach((subArray) => {
                subArray.forEach((item) => {
                    if (item.hasOwnProperty("title")) {
                        titles.push(item.title);
                    }
                });
            });
        }
    });
    // return the now full titles array
    return titles;
}


// Retrieve the necessary DOM elements
const searchForm = document.getElementById("search");
let searchInput = document.getElementById("search-input");
let searchList = document.getElementById("search-list");

// main function
const handleSearchButtonClick = (event) => {
    event.preventDefault();
    // lower case the user input
    let searchText = searchInput.value.toLowerCase();
    // split up words from user input so they can type multiple words and get all corresponding links back
    let searchWords = searchText.split(" ");
    // console.log our array of searchWords
    console.log(searchWords)

    // clears prior results
    searchList.innerHTML = '';

    // grab all direct ul descendants of .card class and then grab any a tag below that
    const pageText = document.querySelectorAll(".card > ul a");
    // here we will store matching nodes
    let nodeSearch = [];
    pageText.forEach(node => {
        const text = node.textContent.toLowerCase();
        if (searchWords.some(word => word !== "" && text.includes(word))) {
            // console.log(node)
            // push all matching textcontent nodes into our nodeSearch array
            nodeSearch.push(node); // gives us access to any html textcontent that match our search

        } else {
            // console.log("this does not work :(") // do nothing? -- not sure if this else is even needed
        }
    })

    console.log(nodeSearch); // check the console when you run a search  

    // takes each matching node in array & creates elements inside #search-list with matching name & href
    nodeSearch.forEach(node => {
        const listItem = document.createElement('a');
        listItem.setAttribute('href', node.href);
        listItem.setAttribute('target', '_blank');
        listItem.setAttribute(
          "class",
          "list-group-item list-group-item-action"
        );
        listItem.textContent = node.innerText;

        searchList.appendChild(listItem);
    });

    // second method --------------- again this might not even be needed since we can just grab the a nodes that match user input
    const allTitles = getAllTitles(arrays) // grabs all titles from the linkArray.js

    /* this will grab allTitles and filter by title
    then it will grab our searchWords and run the some() javascript method
    then in the some() method it will look at each searchWord (assigned to word)
    then it will return TRUE if title from allTitles includes the word from searchWords
    then if it returns true, the filter method will put that title into an array called matchingTitles

    */
    const matchingTitles = allTitles.filter(title => searchWords.some(word => title.toLowerCase().includes(word.toLowerCase())))
    // if not matches 
    if (matchingTitles.length === 0) {
        console.log("No matches found!")
        // else if matches
    } else {
        console.log(matchingTitles) // uncomment to use and see
    }

};


// Event listener for search button click
searchForm.addEventListener("submit", handleSearchButtonClick);

// Event listener - results pop up when user starts typing
searchForm.addEventListener("keyup", handleSearchButtonClick);

// Event listener for Enter key press
searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        handleSearchButtonClick();
    }
});



/**
 * --------------------ISSUES------------------------
 * 1. One main issue is if the user types in and searches 'the' it will return a matching element that has the values of the so 
 * for example 'check whether a checkbox is checked in JS' will be returned because the word 'whether' becasue wheTHEr lol 
 * but main search functionality is there and can be worked on 
 */