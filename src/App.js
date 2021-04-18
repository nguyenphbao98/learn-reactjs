import { Route, Switch } from 'react-router';
import './App.css';
import Header from './components/Header';
import HomeFeature from './features/Home';
import ProductFeature from './features/Products';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route path="/" exact component={HomeFeature} />
        <Route path="/products" exact component={ProductFeature} />
      </Switch>
    </div>
  );
}

export default App;
