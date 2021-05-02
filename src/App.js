import { Route, Switch } from 'react-router';
import './App.css';
import Header from './components/Header';
import CartFeature from './features/Cart';
import HomeFeature from './features/Home';
import ProductFeature from './features/Products';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route path="/" exact component={HomeFeature} />
        <Route path="/products" exact component={ProductFeature} />
        <Route path="/cart" exact component={CartFeature} />
      </Switch>
    </div>
  );
}

export default App;
