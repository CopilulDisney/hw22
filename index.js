const obj = { //Exercitiu 1
    nume: 'Victor'
}

Object.defineProperty(obj, 'gender', {
    value: 'male',
    enumerable: true
})
obj.gender = 'female'
console.log(obj)

Object.preventExtensions(obj) //Exercitiu 2

obj.family = 'Moraru'

Object.defineProperty(obj, 'gender', { //Exercitiu 3
    value: 'male',
    writable: true,
    enumerable: true,
    configurable: true,
    preventExtensions: obj.family = 'Dosca'
})
console.log(obj)


Object.freeze(obj) //Exercitiu 4

console.log(obj)

const arr1 = [1,5,2,26,753,1234,45,591] //Exercitiu 5

console.log(arr1.sort((a, b) => a - b))
console.log(arr1.sort((a, b) => b - a))

const arr2 = [{ //Exercitiu 6
    nume: 'Victor'
},
{
    nume: 'Violeta'
},
{   
    nume: 'Vasile'
},
{   
    nume: 'Alex'
},
{   
    nume: 'Oreana'
},
{   
    nume: 'Maria'
}
]
console.log(arr2.sort((a, b) => {
    if (a.nume > b.nume) {
        return 1
    } else if (a.nume < b.nume) {
        return -1
    }
    return 0
}))
console.log(arr2.sort((a, b) => {
    if (a.nume > b.nume) {
        return -1
    } else if (a.nume < b.nume) {
        return 1
    }
    return 0
}))
const arr = [{ //Exercitiu 7
    nume: 'Ion',
    age: '44'
}]
console.log(arr.sort((a, b) => a.nume > b.nume ? -1 : 1))
console.log(arr.sort((a, b) => b.age > a.age ? 1 : -1))

const myObject = {a: 1, b: 2, c: 3} //Exercitiu 8

const keys = Object.keys(myObject);
for (const key of keys) {
    const value = myObject[key];
    console.log(key + ': ' + value)
}

const myArray = [1,2,3,4,5] //Exercitiu 9
for (const value of myArray) {
    console.log(value)
}

const clonedObj = JSON.parse(JSON.stringify(myObject)) //Exercitiu 10
console.log(clonedObj)

function cloneObj(obj) { //Exercitiu 11
    if (obj === null || typeof obj !== 'object') {
    return obj;
    }

    if (Array.isArray(obj)) {
        const newArray = [];
        for (let i = 0; i < obj.length; i++);
{

    newArray[i] = cloneObj(obj[i]);
    }
        return newArray
    }

    const newObj = {}
    for (const key in obj){
        if (obj.hasOwnProperty(key)){
            newObj[key] =
            cloneObj(obj[key]);
        }
    }
    return newObj;
}

const originalObject = {key1: 'a', key2: 'a2'}
const clonedObj1 = cloneObj(originalObject)
console.log(clonedObj1)