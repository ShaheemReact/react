import { Component } from 'react';
import classes from './Counter.module.css';
import { useSelector,useDispatch, connect } from 'react-redux';

import { counterAction } from '../store';
const Counter = () => {
  const counter  = useSelector(state => state.counter);  
  const show = useSelector(state => state.showCounter)
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch(counterAction.toggleCounter());
  };


  const incrementHandler = ()=>{ 
    dispatch(counterAction.increment())
  }
  const decrementHandler = ()=>{
    dispatch(counterAction.decrement());
  }
const increaseHandler = ()=>{
  dispatch(counterAction.increment(10))
}
  return ( 
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
{show&&<div className={classes.value}>{counter}</div>}      <div>
        <button onClick={incrementHandler}>Increment</button>   
        <button onClick={decrementHandler}>decrement</button>
        <button onClick={increaseHandler}>Increse by 10</button>

      </div>
      <button onClick={toggleCounterHandler}>Toggle center</button>
    </main>
  );
};

export default Counter;







// class Counter extends Component{
//   incrementHandler(){
//     this.props.decrement()
//   }
//   decrementHandler(){
//     this.props.decrement
//   }
//   toggleCounterHandler(){}
//   render(){
//     return ( 
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>   
//           <button onClick={this.decrementHandler.bind(this)}>decrement</button>
//         </div>
//         <button onClick={yhis.toggleCounterHandler}>Toggle center</button>
//       </main>
//     );
//   }
// }
 
// //coonect want 2 args both are function 1) function that maps redux state to props
// const mapStateToProps = state =>{
//   return{
//     counter:state.counter
//   };
// };

// const mapDispatchToProps = dispatch =>{
//   return{
//     increment:()=>dispatch({typr:'increment'}),
//     decrement:()=>dispatch({typr:'decrement'})

//   }
// }
// export default connect(mapStateToProps,mapDispatchToProps)(Counter);          