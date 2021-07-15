import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import React from 'react';
import routes from './routes';

function App () {
    return (
        <Router>
          <Switch>
            {
              routes.map((route) => {
                if (route.childs && route.childs.length > 0) {
                  route.childs.map((child) => {
                    console.log("Route path", child.path);
                    return <Route exact key={child.path} 
                    path={child.path} component={child.component} render={props => 
                    <route.component {...props} childs={route.childs} />} />
                  })
                }
                return <Route exact key={route.path} path={route.path} 
                render={props => <route.component {...props} {...route} />} />
                // return <Route exact path={route.path} component={route.component} />
              })
            }
            {/* <Route exact  path="/login/register" component={Register} /> */}
            {/* <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/" component={Login} /> */}
          </Switch>
      </Router>
    )
}

// function RouteWithSubRoutes(route) {
//   return (
//     <Route path={route.path} render={props => (
//       <route.component {...props} routes={route.routes} />
//     )}
//     />
//   )
// }
export default App
