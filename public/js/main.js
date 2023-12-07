console.log('hello')


const xhr = new XMLHttpRequest();
xhr.open('GET', '../js/data/content.json')
xhr.send();
xhr.addEventListener('load', function () { try { console.log(this.responseText); } catch (error) { console.warn('Error: ', error) } })

// Fetch
fetch("../js/data/content.json").then((response) => response.json()).then((data) => console.log({ data }));

// Async function
async function anything() {
    try {
        const temp = await fetch("../js/data/content.json");
        const data = await temp.json(); console.log({ data });
    }
    catch (error) { console.warn("Error: ", error); }
}

anything();

// Ajax code
