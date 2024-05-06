import {StyleSheet} from 'react-native'
import Sizes from '@theme/Sizes'
import {Theme} from '@di/app.module'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: Theme.background,
  },
  text: {
    fontSize: Sizes.large,
    color: '#000',
  },
  view: {
    width: '100%',
  },
  input: {
    fontSize: 20,
    width: 'auto',
    padding: 10,
    margin: 10,
  },
  card: (pressed) => ({
    flexDirection: 'row',
    alignSelf: 'flex-start',
    width: '100%',
    padding: Sizes.small,
    backgroundColor: pressed ? Theme.surface : Theme.background,
  }),
  header: {
    backgroundColor: Theme.background,
    flexDirection: 'row',
    alignItems: 'center',
    height: 70,
  },
  headerButtons: {
    margin: Sizes.xSmall,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
  },
  headerButton: (pressed) => ({
    padding: Sizes.medium,
    margin: Sizes.xSmall,
    borderRadius: 55,
    backgroundColor: pressed ? Theme.surface : Theme.background,
  }),
  searchBar: {
    flex: 1,
    margin: Sizes.small,
    borderRadius: Sizes.xSmall,
    backgroundColor: Theme.surface,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchIcon: {
    margin: Sizes.small,
  },
  clearSearchIcon: {
    margin: Sizes.small,
  },
  searchInput: {
    flex: 1,
    color: Theme.onSurface,
    fontWeight: '500',
    marginStart: Sizes.small,
    marginEnd: Sizes.small,
  },
  exerciseIconContainer: {
    width: 70,
    height: 70,
    padding: Sizes.small,
  },
  exerciseIcon: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: Sizes.small,
  },
  exerciseData: {
    padding: Sizes.medium,
  },
  exerciseName: {
    fontSize: Sizes.xLarge,
    color: Theme.onPrimary,
    fontWeight: '500',
    paddingBottom: 5,
  },
  exerciseBodyPart: {
    fontSize: Sizes.large,
    fontWeight: '400',
    color: Theme.onSecondary,
  },
})

export default styles