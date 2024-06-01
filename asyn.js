/*Écrivez une fonction asynchrone iterateWithAsyncAwait qui prend un tableau de valeurs
 et enregistre chaque valeur avec un délai de 1 seconde entre les journaux.*/

 function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function iterateWithAsyncAwait(values) {
    for (const value of values) {
        console.log(value);
        await delay(1000);
    }
}

// ------------------------------------------------------------------------------------

/*Écrivez une fonction chainedAsyncFunctions qui appelle séquentiellement trois fonctions 
asynchrones distinctes. Chaque fonction doit enregistrer un message après un délai de 1 seconde. 
Chaînez ces fonctions en utilisant await.*/

async function firstAsyncFunction() {
    await delay(1000);
    console.log('Première fonction terminée');
}

async function secondAsyncFunction() {
    await delay(1000);
    console.log('Deuxième fonction terminée');
}

async function thirdAsyncFunction() {
    await delay(1000);
    console.log('Troisième fonction terminée');
}

async function chainedAsyncFunctions() {
    await firstAsyncFunction();
    await secondAsyncFunction();
    await thirdAsyncFunction();
}

// ----------------------------------------------------------------------------------------

/* Créez une fonction asynchrone concurrentRequests qui effectue deux appels d'API simultanément 
à l'aide de Promise.all(). Enregistrez les résultats combinés une fois les deux demandes résolues.*/


async function fetchFirstData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Données du premier appel');
        }, 2000);
    });
}

async function fetchSecondData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Données du second appel');
        }, 3000);
    });
}

async function concurrentRequests() {
    const [firstData, secondData] = await Promise.all([fetchFirstData(), fetchSecondData()]);
    console.log('Résultats combinés:', firstData, secondData);
}