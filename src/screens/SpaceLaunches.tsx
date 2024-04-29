import { useEffect, useState } from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import { Launch } from "../api/types";
import { getPastRocketLaunches } from "../api/clientApi";
import { format } from "date-fns";

export const SpaceLaunches = () => {
  const [launches, setLaunches] = useState<Launch[]>();

  useEffect(() => {
    const getLaunches = async () => {
      const { data } = await getPastRocketLaunches();
      setLaunches(data);
    };
    getLaunches();

    setInterval(() => getLaunches(), 60000);
  }, []);

  return (
    <FlatList
      data={launches}
      renderItem={({item: {name, details, date_utc}}) => (
        <View style={styles.row}>
          <View style={styles.headerRow}>
            <Text style={styles.text}>{name}</Text>
            <Text style={styles.date}>{format(date_utc, 'dd/MM/yyyy HH:mm:ss')}</Text>
          </View>
          {details ? <Text style={styles.details}>{details}</Text> : null}
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  row: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    gap: 5,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
  },
  date: {},
  details: {
    fontSize: 14,
    lineHeight: 20,
  },
});
