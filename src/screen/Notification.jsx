// // import React, {useState, useContext, useEffect} from 'react'
// // import {View, Text, StyleSheet} from 'react-native'
// // import { BASE_URL } from '../constants/Config';
// // import { FONTWIEGHT, SIZES } from '../constants/theme';
// // import { AuthContext } from '../context/AuthContext';

// // const Notification = () => {

// //         const [notification, setNotification] = useState()
// //     const { loading, userInfo } = useContext(AuthContext);
// //       const token = userInfo.data?.accessToken
// //     var myHeaders = new Headers();
// //     myHeaders.append("Authorization", token);

// //     var raw = "";

// //     var requestOptions = {
// //         method: 'GET',
// //         headers: myHeaders,
// //         body: raw,
// //         redirect: 'follow'
// //     };
// //     const getData = () => {
// //       fetch(`${BASE_URL}/transaction/investor-tds-transaction`, requestOptions)
// //           .then(function (response) {
// //             if(response.ok){
// //               return response.json();
// //             }
// //             throw new Error('Something went wrong.')

// //           }).
// //           then(function (myJson) {
// //             let result = myJson 

// //             setNotification(result)
// //              console.log('Request Successfull.....',result)
// //           })  
// //           .catch(function(error) {
// //             console.warn('Request failed', error)
// //           })      

// //   }

// //   useEffect(() => {
// //       getData()
// //   }, [])

// //     return (
// //         <View>
// //                {notification?.code === 500? ( <>
// //        <View style={{alignItems: 'center', paddingVertical:300}}>
// //         <Text style={{fontFamily:'serif', color: 'black'}}>There is Nothing Notification</Text>
// //        </View>
// //        </>
// //        ) : (
// //         <>
// //          <View>
// //        <Text style={{fontSize:SIZES.h2,padding: 7}}> Historical Notifications</Text>
// //       <View style={{flexDirection: 'row'}}>
// //       <Text style={{fontSize:SIZES.h4,padding: 7, color: 'orange'}}> Home /</Text>
// //        <Text style={{fontSize:SIZES.h4,padding: 7}}>Notifications</Text>
// //       </View>
// //        </View>
// //        <View>
// //        <View style={{alignItems:'center', paddingVertical:10}}>
// //         <Text>Show</Text>
// //         <Text>
// // Search: 
// //         </Text>
// //         </View>
// //       <View style={{flexDirection:'row', paddingHorizontal: 10,
// //     justifyContent:'space-around'}}>
// //         <Text style={styles.text1}>
// //             SL No.
// //         </Text>
// //         <Text  style={styles.text1}>Message</Text>
// //         <Text  style={styles.text1}> Date</Text>
// //       </View>
// //        </View>
// //         </>
// //        )

// //        }


// //         </View>
// //     )
// // }



// import { View, Text, StyleSheet } from 'react-native'
// import React from 'react'
// import { DataTable } from 'react-native-paper'
// import { FONTWIEGHT } from '../constants/theme';
// import Table from '../components/Table';

// const itemsPerPage = 2;

// const items = [
//   {
//     key: 1,
//     name: 'Page 1',
//   },
//   {
//     key: 2,
//     name: 'Page 2',
//   },
//   {
//     key: 3,
//     name: 'Page 100',
//   },
// ];

// const Notification = () => {

//   const [page, setPage] = React.useState(0);
//   const from = page * itemsPerPage;
//   const to = (page + 1) * itemsPerPage;
//   return (

   

//     <View>
//        <View style={styles.View0}>
//             <View style={{ flexDirection: 'row' }}>
//               <Text style={styles.Text1}>Home/ </Text>
//               <Text>Notification</Text>

//             </View>
//           </View>

//       <DataTable>
//         <Table/>

//         <DataTable.Pagination
//           page={page}
//           numberOfPages={Math.floor(items.length / itemsPerPage)}
//           onPageChange={page => setPage(page)}
//           label={`${from + 1}-${to} of ${items.length}`}
//         />
//       </DataTable>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   text1: {
//     fontFamily: FONTWIEGHT.bold
//   },
//   View0: {
//     paddingHorizontal: 10, paddingTop: 20
//   },
//   View1: {
//     alignItems: 'center',

//   },
//   View2: {
//     backgroundColor: 'red',
//     height: 50,
//     borderWidth: 1,

//   },
//   container: {
//     padding: 15,
//   },
//   tableHeader: {
//     backgroundColor: '#DCDCDC',
//   },
//   Text1: { color: 'orange', fontSize: 15, paddingHorizontal: 8 },
// })
// export default Notification
