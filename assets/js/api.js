

async function fetchProfileData(){
    const url = 'https://raw.githubusercontent.com/John1Souza/Curriculo__DIO/main/data/profile.json';
    const fetching = await fetch(url)
    return await fetching.json()
}


