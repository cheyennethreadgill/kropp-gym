// import { useState, useEffect } from 'react';
// const Members = () => {
//   // ---------------------------------DATA FETCH

//   const [data, setData] = useState();
//   const [token, setToken] = useState();

//   useEffect(() => {
//     var auth = {
//       method: 'POST',
//       body: JSON.stringify({
//         name: 'Dulev Hb',
//         email: 'dulevhb@gmail.com',
//         number: 9082222222,
//         password: 'duleV2023*',
//         password_repeat: 'duleV2023*',
//       }),
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//     };
//     fetch('https://api.storerestapi.com/auth/register', auth)
//       .then((resp) => resp.json())
//       .then((resp) => setToken(resp.data.access_token));
//   }, []);

//   useEffect(() => {
//     fetch('https://api.storerestapi.com/users')
//       .then((resp) => resp.json())
//       .then((data) => setData(data.data));
//   }, []);

//   const [found, setFound] = useState();
//   useEffect(() => {
//     function findPerson(id) {
//       if (data) {
//         data.find((dat) => {
//           console.log('work');
//         });
//       } else {
//         console.log('not working');
//       }
//     }
//   }, []);

//   return (
//     <div>
//       {data
//         ? data.map((dat, key) => {
//             return (
//               <div key={key}>
//                 <h2 className='fw-bold m-0'>{dat.name}</h2>
//               </div>
//             );
//           })
//         : null}
//     </div>
//   );
// };

// export default Members;
