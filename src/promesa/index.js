/**
 * Implemantando Promesas
 */

const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey !')
        } else {
            reject('Whoops!')
        }
    })
}

somethingWillHappen()
    .then(response => console.log(response))
    .catch(error => console.log(error))


const somethingWillHappen1 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('True')
            }, 2000);
        } else {
            const error = new Error('Whoops!')
            reject(error)
        }
    })
}

somethingWillHappen1()
    .then(response => console.log(response))
    .catch(error => console.log(error))


Promise.all([somethingWillHappen(), somethingWillHappen1()])
    .then(res => {
        console.log('Array of results', res)
    })
    .catch(err => {
        console.error(err)
    })