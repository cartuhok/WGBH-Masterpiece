async function getMPData() {
    const result = await fetch('./masterpiece_data.json');
    console.log(result);
    return result;
}