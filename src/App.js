import ExpenseItem from './components/ExpenseItem';

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
      <ExpenseItem title={expense[0].title} amount={expense[0].amount} date={expense[0].date} />
      <ExpenseItem title={expense[1].title} amount={expense[1].amount} date={expense[1].date} />
      <ExpenseItem title={expense[2].title} amount={expense[2].amount} date={expense[2].date} />
      <ExpenseItem title={expense[3].title} amount={expense[3].amount} date={expense[3].date} />
    </div>
  );
}

export default App;
