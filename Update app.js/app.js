import '../styles/globals.css';  

function MyApp({ Component, pageProps }) {  
  return (  
    <>  
      <link rel="manifest" href="/manifest.json" />  
      <meta name="theme-color" content="#000000" />  
      <Component {...pageProps} />  
    </>  
  );  
}  

export default MyApp;  
    
