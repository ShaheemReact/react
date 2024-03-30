import './App.css';
import  data  from './component/demo.js'

function App() {
    data()
    // console.log(userName)
    // const name1=new Name('shaheem',34)
    // console.log('pl',name1)
    // const arr=['qwerr','jfjkds','okok']
    // console.log(arr.findIndex((item)=> item ==='okok'))
    // const mapped = arr.map((x)=> ({text:x}))
    // console.log(mapped)
    // console.log(arr)
    function transformToObjects(item){
      return item.map((x)=>({val:x}))
      
    }
    const arr = [1,2,3]
    const value = transformToObjects(arr)
    console.log(value)
    const [firstName,lastName] = ['shaheem',"ps"]; //destructuring
    console.log(firstName);
    console.log(lastName);

    const {name:userName,age} = {    //destructuring an object
      name:'shaheem',
      age:49
      }
      console.log(age)
    
    const datas = ['good','morning']
    const newData = ['newyork']
    const mergedArray = [...datas,...newData,'hey']   //spread operator
    console.log(mergedArray)

    const objNew = {
      name:'shaheem',
      age:49
    }
    const newObjNew ={
      isAdmin :true,
      ...objNew               //sperad operator object

    }
    console.log(newObjNew)


    const dummyArr = ['sports','cooking']
    for (let newArr of dummyArr){ //for of
      console.log(dummyArr)
    }
    setTimeout(()=>{
      console.log('hello world!!!!!!!');
    },2000)

    function greeter(greed){
      greed()
    }
    greeter(()=>{console.log('yes')})

    function init(){
      function greetFn(){
        console.log('greetings');
      }
      greetFn();
    }
    init();
    const num=[1,7,3,4,5]
    const filteredNum =num.map((num,u)=>{ //map
      console.log(num,'num')
      console.log(u,'index')
      if(u==3){
        return num
      }
    })
    console.log(filteredNum)
    // const obj = [2,3,4,6]
    // const objMap = obj.map((x)=>({
    //     new:x
    // }))
    // console.log(objMap)

    const filterArr = [2,3,4,5,6,7,8]
    const filterdArr = filterArr.filter((e)=> e < 5//filter
    )
    console.log(filterdArr)



    console.log(filterArr.concat([23])) //concat
    


    //reduce


    const numArr = [5,6,7,8,9]
    const output  = numArr.reduce((accumlator,cuurentValue)=>{
      return accumlator + cuurentValue
    },0)
  const max = numArr.reduce((accumlator,cuurentValue)=>{
    if(cuurentValue > accumlator){
      return cuurentValue
    }
  },0)
    console.log(output)
    console.log(max)

    
    const user=[
      {firstName:'max',age:30,place:'us',lastName:'cybro'},
      {firstName:'carl',age:30,place:'uk',lastName:'cybro'},
      {firstName:'philip',age:70,place:'usa',lastName:'cybro'},

    ];
    const newmapped = user.map(item=>{return item.firstName + ' '+item.lastName})//map
    console.log(newmapped)

    const newRed = user.reduce((acc,curr)=>{//reduce
      if(acc[curr.age]){
        acc[curr.age] =++acc[curr.age];
      }
      else{
        acc[curr.age] = 1
      }
      return acc;

    },{})
    console.log(newRed)
    //outpu:{26:2,20:1....}

    //filter

    const newFilter =user.filter(x => x.age==30).map(x=>x.firstName)//first name of the user whose age is 30
    console.log(newFilter)

    return (
      <div className="App">
        hello world

      </div>
    );
}
    
export default App;
