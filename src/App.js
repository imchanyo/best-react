import Expense from './components/Expense';

function App() {
  const expense = [
    {
      id: 'e1',
      title: 'Toliet Paper',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 5, 28),
    },
    {
      id: 'e3',
      title: 'Car Insuracne',
      amount: 23.67,
      date: new Date(2021, 4, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 544.67,
      date: new Date(2021, 10, 28),
    },
  ];
  return (
    <div className="App">
      <h2>Let's get started!</h2>
      <Expense items={expense} />
    </div>
  );
}

export default App;
