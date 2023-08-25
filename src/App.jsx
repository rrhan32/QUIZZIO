import * as React from 'react'
// import './App.css'
// import {Drawer,Box,Typography}from "@mui/material"
import {jsQuizz} from "./constant"
import  Quiz from "./components/Quiz/Quiz"
// import {TemporaryDrawer} from "./drawer"
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {apiResponse:""};
  }
  callApi(){
    fetch("http://localhost:5173")
    .then((response) => response.text())
    .then(res=>this.setState({apiResponse:res}));
  }
  componentwillmount(){
    this.callAPI();
  };
render() {
  return (
    <div>
    <Quiz questions={jsQuizz.questions}></Quiz>
    {/* <Drawer anchor='left'>
      <Box p={2}>
        <Typography variant="h6">
          SIDE PANEL
        </Typography>
      </Box>
    </Drawer> */}
    <p>{this.state.apiResponse}</p>
    </div>
  );
}
}
export default App;
