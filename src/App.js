import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import React, {useState, useEffect} from 'react';
import firebase from "./firebase";
import routes from './routes';

function App () {
  const [login, setLogin] = useState([]);
  const [loading, setLoading] = useState(false);

  const ref = firebase.firestore().collection("login"); 
  console.log(ref);

  // function getUser() {
  //   setLoading(true);
  //   ref.onSnapshot((querySnapshot) => {
  //     const user = [];
  //     querySnapshot.forEach((doc) => {
  //       user.push(doc.data());
  //     });
  //     setLogin(user);
  //     setLoading(false);
  //   })
  // }

  function getUsers() {
    setLoading(true);
    ref.get().then((user) => {
      const users = user.docs.map((doc) => doc.data());
      setLogin(users);
      setLoading(false);
    })
  }

  useEffect(() => {
    getUsers();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>
  }
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

          <div>
            <h1>User</h1>
            {login.map((user) => (
              <div key={user.id}>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
              </div>
            ))}
          </div>
      </Router>
    )
}
export default App
