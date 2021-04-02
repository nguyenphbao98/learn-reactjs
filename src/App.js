import { Route, Switch } from 'react-router';
import './App.css';
import ProductFeature from './features/Products';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/products" exact component={ProductFeature} />
      </Switch>
    </div>
  );
}

export default App;
