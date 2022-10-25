import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Heading from './components/heading/Heading';
import HeadingStyledComponents from './components/headingStyledComponents/HeadingStyledComponent' 
import Footer from './components/footer/Footer';
import reportWebVitals from './reportWebVitals';

const companyData = {
  email: "company@ww.pl",
  city: "Waszrawa"
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HeadingStyledComponents/>
    <Heading headerTitle = "Welcome on page" />
    <App />
    <Footer companyData = {companyData} contactEmail = "Warszawa@gg.com"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
