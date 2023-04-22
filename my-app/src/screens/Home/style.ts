import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    padding: 16,
  },
  eventName: {
    color: 'white',
    fontSize: 40,
    padding: 8,
    fontWeight: 'bold',
    marginTop: 75,
    textShadowColor:'blue',
    textShadowRadius: 15
  },
  eventLastName: {
    color: '#131016',
    fontSize: 20,
    padding: 8,
    fontWeight: '400'
  },
  input: {
    flex: 1,
    backgroundColor: '#1f1e25',
    height: 56,
    borderRadius: 5,
    color: '#fff',
    padding: 16,
    fontSize: 20,
    marginRight: 12,
  },
  buttonText: {
    color: '#edd',
    fontSize: 25,

  },
  button: {
    width: 56,
    height: 56,
    backgroundColor: '#31cf67',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    width: '100%',
    flexDirection: "row",
    marginTop: 36,
    marginBottom: 20,

  },
  listEmptyText: {
    color: '#FFF',
    fontSize: 14,
    textAlign: 'center',
  }
});