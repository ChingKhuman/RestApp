


import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { DataTable } from 'react-native-paper'
import { FONTWIEGHT } from '../constants/theme';
import Table from '../components/Table';

const itemsPerPage = 2;

const items = [
  {
    key: 1,
    name: 'Page 1',
  },
  {
    key: 2,
    name: 'Page 2',
  },
  {
    key: 3,
    name: 'Page 100',
  },
];

const Notification = () => {

  const [page, setPage] = React.useState(0);
  const from = page * itemsPerPage;
  const to = (page + 1) * itemsPerPage;
  return (

   

    <View>
       <View style={styles.View0}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.Text1}>Home/ </Text>
              <Text>Notification</Text>

            </View>
          </View>

      <DataTable>
        <Table/>

        <DataTable.Pagination
          page={page}
          numberOfPages={Math.floor(items.length / itemsPerPage)}
          onPageChange={page => setPage(page)}
          label={`${from + 1}-${to} of ${items.length}`}
        />
      </DataTable>
    </View>
  )
}

const styles = StyleSheet.create({
  text1: {
    fontFamily: FONTWIEGHT.bold
  },
  View0: {
    paddingHorizontal: 10, paddingTop: 20
  },
  View1: {
    alignItems: 'center',

  },
  View2: {
    backgroundColor: 'red',
    height: 50,
    borderWidth: 1,

  },
  container: {
    padding: 15,
  },
  tableHeader: {
    backgroundColor: '#DCDCDC',
  },
  Text1: { color: 'orange', fontSize: 15, paddingHorizontal: 8 },
})
export default Notification
