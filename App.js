import React, { Component } from 'react';

import {Button} from './Button';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }

  }

  handleCount(value) {
    this.setState((prevState) => ({ count: prevState.count + value }));
  }

  render() {


    return (
      <div>
        <b><h3>Current count: {this.state.count}</h3></b>
        <hr />
        <Button  sign ="+" count={this.state.count} updateCount={this.handleCount.bind(this)} />
        <Button sign ="-" count={this.state.count} updateCount={this.handleCount.bind(this)} />
      </div>
    );
  }
}

export default App;







// import React, { Component } from "react";
// import Axios from "axios";
// class App extends Component {
//   state = { data: [], loading: false };

//   fetchData = async () => {
//     this.setState({ loading: true });
//     try {
//       let { data } = await Axios.get(
//         "https://jsonplaceholder.typicode.com/users"
//       );
//       console.log(data);
//       this.setState({ data: data, loading: false });
//     } catch (err) {
//       this.setState({ loading: false });
//       console.log(err);
//     }
//   };
//   render() {
//     return (
//       <div className="App">
//         <ul>
//           {this.state.data.map((d) => (
//             <li key={d.id}>{d.name}</li>
//           ))}
//           <button onClick={() => this.fetchData()}>
//             {this.state.loading ? "LOADING" : "FETCH"}
//           </button>
//         </ul>
//       </div>
//     );
//   }
// }
// export default App;
