// async/await:
// try/catch:

async function getResources() {
    try {
        const response = await fetch('http://localhost:3013/specialOffers'); // agar fetchni ichiga optsiya kiritilmasa, fetch default holatda 'GET' so'rov yuboradi
        return await response.json();
    } catch {
        console.log('Error');
    } finally {
        console.log('Finally');
    }
    
}

export default getResources;