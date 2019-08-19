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

});