import * as React from 'react'
// import './App.css'
// import {Drawer,Box,Typography}from "@mui/material"
// import {jsQuizz} from "./history"
import  Quiz from "./components/Quiz/Quiz"
import Appi from "./main_branch"
// import {TemporaryDrawer} from "./drawer"
class App extends React.Component{
render() {
  return (
    <div>
    <Appi/>
    {/* <Quiz questions={jsQuizz.questions}></Quiz> */}
    {/* <Drawer anchor='left'>
      <Box p={2}>
        <Typography variant="h6">
          SIDE PANEL
        </Typography>
      </Box>
    </Drawer> */}
    {/* <p>{this.state.apiResponse}</p> */}
    </div>
  );
}
}
export default App;
