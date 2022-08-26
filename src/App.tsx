import Controls from './Controls';
import Preview from './Preview';
import Configuration from './Configuration';
import './App.scss';

const App: React.FC = () => (
  <Configuration>
    <div className="app">
      <Preview />
      <Controls />
    </div>
  </Configuration>
);

export default App;
