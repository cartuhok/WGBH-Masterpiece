const DOMstrings = {
    shows: document.querySelector('.shows')
}

async function getMPData() {
    try {
        const result = await fetch('./masterpiece_data.json');
        const data = await result.json();
        console.log(data);
        return data;
    }
    catch(error) {
        alert(error.message);
    }
}

getMPData().then(data => {
    for(let i = 0; i < data.franchise.programs.length; i++) { 
        const markup = `
            <figure class="seriesImage">
            <img src="${data.franchise.programs[i].weekly_eepisode.image}" title="${data.franchise.programs[i].title}" alt="${data.franchise.programs[i].weekly_eepisode.title}" />
            <figcaption>
                <h3>${data.franchise.programs[i].weekly_eepisode.date} | ${data.franchise.programs[i].weekly_eepisode.time} ET</h3>
                <h1>${data.franchise.programs[i].title.toUpperCase()}</h1>
                <h2>${data.franchise.programs[i].weekly_eepisode.title}</h2>
                <p>${data.franchise.programs[i].description}</p>
            </figcaption>
            </figure>
        `
        DOMstrings.shows.insertAdjacentHTML('beforeend', markup);
    }
});