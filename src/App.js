import React from 'react';
import './App.css';
import axios from 'axios';
import {connect} from 'react-redux';
import {Header} from './Components';
import {Home,Cart} from './pages';
import {Route} from 'react-router-dom';
//import store from './redux/store';
import {setPizzas as setPizzasAction} from './redux/action/pizzas'


//function App() {

 // const[pizzas,setPizzas] = React.useState([]);
 // React.useEffect(() => {
    //axios.get('http://localhost:3001/db.json').then(({data})=>{
     // setPizzas(data.pizzas);
 //   });
 // }, []);
    
 class App extends React.Component{
   componentDidMount(){
    axios.get('http://localhost:3000/db.json').then(({data})=>{
   this.props.setPizzas(data.pizzas);
    //console.log(setPizzas(data.pizzas));
    });
   }
   render(){
      return (
        
        <div className="wrapper">
          <Header/>
          <div className="content">
          <Route path ="/" render ={()=> <Home items={this.props.items}/>} exact/>
          <Route path ="/cart" component ={Cart} exact/>
          </div>
        </div>
    
      );
    }
  }
const mapStateToProps = (state) =>{
  return {
    items: state.pizzas.items
  }

};

const mapDispatchProps = dispatch =>{
  return{
    setPizzas:(items) => dispatch(setPizzasAction(items)),
    
  };
}
export default connect(mapStateToProps,mapDispatchProps) (App);
