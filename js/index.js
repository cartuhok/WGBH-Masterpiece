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

const DOMstrings = {
    shows: document.querySelector('.shows')
}

getMPData().then(data => {
    const markup = `<div class="show--1">
    <figure class="img--1">
        <img src="${data.franchise.programs[0].weekly_eepisode.image}" />
    </figure>
    <figcaption>
        <h3>${data.franchise.programs[0].weekly_eepisode.date} | ${data.franchise.programs[0].weekly_eepisode.time} ET</h3>
        <h1>${data.franchise.programs[0].title.toUpperCase()}</h1>
        <h2>${data.franchise.programs[0].weekly_eepisode.title}</h2>
        <p>${data.franchise.programs[0].description}</p>
    </figcaption>
    </div>
    <div class="show--2">
        <figure class="img--2">
            <img src="${data.franchise.programs[1].weekly_eepisode.image}" />
        </figure>
        <figcaption>
        <h3>${data.franchise.programs[1].weekly_eepisode.date} | ${data.franchise.programs[0].weekly_eepisode.time} ET</h3>
        <h1>${data.franchise.programs[1].title.toUpperCase()}</h1>
        <h2>${data.franchise.programs[1].weekly_eepisode.title}</h2>
        <p>${data.franchise.programs[1].description}</p>
        </figcaption>
    </div>`
    DOMstrings.shows.insertAdjacentHTML('beforeend', markup);
});