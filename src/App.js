import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
   state = {
     advice:''
   };

   componentDidMount() {

     console.log("Component did mount");
      this.fetchAdvice()

   }

   fetchAdvice = () =>{
     axios.get("https://api.adviceslip.com/advice")

     .then(response =>{
       const {advice} = response.data.slip;
       console.log(advice);
       this.setState({ advice });
     });



   }

  render()  {
    return (
      <div className="app" >

        <div className="card text-center">

        <div className="card-body">
            <h2 className='card-title'>{this.state.advice}</h2>

          <button onClick= {this.fetchAdvice} className="btn btn-primary">Gimme Advice</button>
        </div>

      </div>



      </div>


    );
  }

}

export default App;
