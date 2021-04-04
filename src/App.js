import { Route, Switch } from 'react-router';
import './App.css';
import HomeFeature from './features/Home';
import ProductFeature from './features/Products';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={HomeFeature} />
        <Route path="/products" exact component={ProductFeature} />
      </Switch>
    </div>
  );
}

export default App;
