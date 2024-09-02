// // src/hooks/useFetch.js
// import { useState, useEffect } from 'react';

// const useFetch = (url) => {
//   const [data, setData] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetchData = async () => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       const res = await fetch(url);
//       if (!res.ok) {
//         throw new Error('Data could not be fetched');
//       }
//       const result = await res.json();
//       setData(result.products || result); // Adjust based on the API response
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, [url]);

//   return { data, isLoading, error };
// };

// export default useFetch;
