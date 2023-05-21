import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Register from './Components/Register/Register';
import SignInForm from './SignInForm/SignInForm';
import Logo from './Components/Logo/Logo';
import ImageUrl from './ImageUrl/ImageUrl';
import Rank from './Components/Rank/Rank';
import { Component } from 'react';
import FaceRecognition from './Components/FaceRecogniion/FaceRecofnition';
// import Clarifai from 'clarifai';


// const app = new Clarifai.App({
//   apiKey: '4a561ec88b494e7088915d138e37654e'
// });

class App extends Component {
  
 constructor(){
  super()
  this.state={
    Input:'',
    ImageUrl:'',
    route:'signIn',
    isSignedIn:false
  }
 }

 onRouteChange=(route)=>{
  if(route === 'signIn'){
    this.setState({isSignedIn:false})
  }else if(route === 'home'){
    this.setState({isSignedIn:true})
  }
  return this.setState({route:route})
 }

 onInputChange=(event)=>{
  this.setState({Input:event.target.value})
 }

 onSubmit=()=>{
  this.setState({ImageUrl:this.state.Input})
  // app.models.predict("4a561ec88b494e7088915d138e37654e","https://commons.wikimedia.org/wiki/File:Cat03.jpg").then(response=>{
  //   console.log(response)
  // }).catch(err=>console.log(err))
 }


  render(){
  return (
    <div className="App">
     <Navigation onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn}/>

      {
      this.state.route === 'home'?
      <div>
      <Rank />
      <Logo />
      <ImageUrl onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
      <FaceRecognition Input={this.state.ImageUrl}/>
      </div>
      :
      (this.state.route === 'signIn'?
      <SignInForm onRouteChange={this.onRouteChange}/>
      :<Register onRouteChange={this.onRouteChange}/>

     )
     
  }
    </div>
  );
}
}

export default App;
