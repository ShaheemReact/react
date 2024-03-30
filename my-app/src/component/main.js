
// let values = ()=> console.log('jk')


let userName = {
    name:'Shaheem',
    age:45,
    greet(){
        console.log(this.age)
    }
}
 class Name{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    greet(){
        console.log('good AfterNoon')
    }
}
const name1 = new Name
console.log(name1)
export { userName,Name}
let a = 'qwertyu'
export default a
