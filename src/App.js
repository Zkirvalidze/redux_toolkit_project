import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { calculateTotals, getCartItems } from './features/cart/CartSlice';
import Modal from './components/Modal';
const App = () => {
  const dispatch = useDispatch();
  const { cartItems, isLoading } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.modal);
  useEffect(() => {
    dispatch(calculateTotals());
    return () => {};
  }, [cartItems]);
  useEffect(() => {
    dispatch(getCartItems());
  }, []);
  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
};
export default App;
