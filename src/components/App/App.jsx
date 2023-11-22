import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import GuestForm from '../GuestForm/GuestForm';
import GuestList from '../GuestList/GuestList';
import DinnerSupplies from '../DinnerSupplies/DinnerSupplies';


function App() {
  let [guestList, setGuestList] = useState([]);
  let [newGuestName, setNewGuestName] = useState('');
  let [newGuestMeal, setNewGuestMeal] = useState('false');

  //On load, get guests
  useEffect(() => {
    getGuests()
  }, [])

  const getGuests = () => {
    axios.get('/guests')
      .then(response => {
        setGuestList(response.data)
      })
      .catch(err => {
        alert('error getting guests');
        console.log(err);
      })
  }

  console.log(newGuestMeal)
  return (
    <div className="App">
      <Header />
      <h2>Party Leader</h2>

      {guestList[0] && <h3>{guestList[0].name}</h3>}
      <h2>Add a new guest</h2>
      <GuestForm
      getGuests={getGuests}
      />
      <h2>Guest List</h2>

      <GuestList 
      guestList={guestList}/>

      <h2>Dinner Supplies</h2>
      <DinnerSupplies
      guestList={guestList}
       />
      <Footer />
    </div>
  );
}

export default App;
