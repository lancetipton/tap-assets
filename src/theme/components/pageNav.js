import { StyleSheet } from 'react-native'

export const pageNav = {
  main: {
    flex: 1,
    height: 75,
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: `center`,
  },
  activeIndex: {
    fontSize: 16,
    height: 25,
    textAlign: 'center',
  },
  toggle: {
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 25,
  },
  left: {
  },
  right: {
  }
}