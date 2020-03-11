import { StyleSheet } from 'react-native'
import { Colors } from '../../Themes/'

export default StyleSheet.create({
  header: {
    backgroundColor: Colors.transparent
  },
  modalContainer: {
    justifyContent: 'flex-end'
  },
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 100,
    justifyContent: 'space-evenly'
  },
  iconTaskContainer: {
    padding: 10,
    borderRadius: 30,
    backgroundColor: '#E8E9F0',
    shadowColor: "#000000",
    shadowOpacity: 0.7,
    shadowOffset: { height: 2, width: 0 }
  },
  iconHabitContainer: {
    padding: 10,
    borderRadius: 30,
    backgroundColor: '#0F4C81',
    shadowColor: "#000000",
    shadowOpacity: 0.7,
    shadowOffset: { height: 2, width: 0 }
  },
  image: {
    width: 30,
    height: 30,
    resizeMode: 'contain'
  },
  iconText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#C6D7F0',
    marginTop: 10,
    textAlign: 'center'
  }
})
