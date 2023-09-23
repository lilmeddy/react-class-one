// import logo from './logo.svg';
import './App.css';
import Button from './Button';
import { PaystackButton } from 'react-paystack'
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';
function App() {
  const mede = {
    textDecoration:"underline",
    color:"red",
    fontSize:"15px"
  }
  const publicKey ="pk_test_f9059994f027bad99d026b4c808b7a473a363019"
  const componentProps = {
    email:"mede@gmail.com",
    amount:2000,
    metadata: {
      name:"osamede",
      phone:"aghedo",
    },
    publicKey,
    text: "Make Payment",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! You need this oil, don't go!!!!"),
  }
  // flutterwave
  const config = {
    public_key: 'FLWPUBK_TEST-1ed4f37a08d7984cf816f8581229e06a-X',
    tx_ref: Date.now(),
    amount: 100,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'user@gmail.com',
      phone_number: '070********',
      name: 'john doe',
    },
    customizations: {
      title: 'My store',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };
  
  const fwConfig = {
    ...config,
    text: 'Pay with Flutterwave!',
    callback: (response) => {
       console.log(response);
      closePaymentModal() // this will close the modal programmatically
    },
    onClose: () => {},
  };
  return (
 
<>
<Button mede="Hello" color="yellow"></Button>
<Button mede="Click" color='green'></Button>
<h1 style={mede}>Welcome to react</h1>
<h1 className='osas'>Lorem ipsum dolor sit amet</h1>
<h2 className='text-green-400'>TailWind</h2>
<div className='sm:flex block justify-center'>
  <div className='w-24 h-24  sm:w-52  bg-orange-600 hover:bg-green-400'></div>
  <div className='w-24 h-24 sm:w-52  bg-orange-500'></div>
</div>
<button>  <PaystackButton className="paystack-button" {...componentProps} /></button>
<FlutterWaveButton {...fwConfig} />
</>
  );
}

export default App;
