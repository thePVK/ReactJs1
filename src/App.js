import './App.css';
import Menu from './components/Menu/Menu';
import routers from './routes/routes';
import { Routes,Route, BrowserRouter as Router } from 'react-router-dom';
import { Component } from 'react';
import HomePage from './pages/HomePage';


class App extends Component{
  render(){
    return(
    <Router>
      <div>
          <Menu/>
          <div className='container'>
              <Routes>
                {this.showContentMenus(routers)}
                {/* <Route path='/' exact={true} element={HomePage} /> */}
              </Routes>
          </div>
      </div>
    </Router>
    )
  }

  showContentMenus (routers) {

    var index=0;
    var routerList=[]
    routers.forEach(element => {
      index=index+1;
      var rout= element.map((route)=>{
        return(
          <Route key={index} path={route.path} exact={route.exact} element={<route.page/>}  />
        )
        })
        console.log(rout);
        routerList.push(...rout);
    }
    );
    console.log(routerList)
    return routerList;
  }

}




export default App;
