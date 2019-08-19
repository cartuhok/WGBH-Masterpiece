async function getMPData() {
    const result = await fetch('./masterpiece_data.json');
    const data = await result.json();
    console.log(data);
    return data;
}

getMPData();