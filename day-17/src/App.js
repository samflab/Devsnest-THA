import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Card food ="Pizza" calories="156"/>
      <Card food ="Rajma Chawal" calories="110"/>
      <Card food ="Samosa" calories="80"/>
      <Card food ="Vegetable Saute" calories="43"/>
      <Card food ="Burger" calories="170"/>
    </div>
  );
}

export default App;
