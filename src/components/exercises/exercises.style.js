import {StyleSheet} from 'react-native'
import Sizes from '@theme/Sizes'
import {Theme} from '@di/app.module'
import FontWeight from '@theme/FontWeight'
import {FlexDirection} from 'src/util/constants'

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Theme.background,
  },
  view: {
    width: '100%',
    maxHeight: '90%',
  },
  input: {
    fontSize: Sizes.xLarge,
    width: 'auto',
    padding: Sizes.medium,
    margin: Sizes.medium,
  },
  card: (pressed) => ({
    flexDirection: FlexDirection.Row,
    alignSelf: 'flex-start',
    width: '100%',
    padding: Sizes.small,
    backgroundColor: pressed ? Theme.surface : Theme.background,
  }),
  header: {
    flexDirection: FlexDirection.Row,
    alignItems: 'center',
    height: 70,
  },
  headerButtons: {
    margin: Sizes.xSmall,
    flexDirection: FlexDirection.Row,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
  },
  headerButton: pressed => ({
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
    flexDirection: FlexDirection.Row,
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
    fontWeight: FontWeight.w500,
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
    fontWeight: FontWeight.w500,
    paddingBottom: 5,
  },
  exerciseBodyPart: {
    fontSize: Sizes.large,
    fontWeight: FontWeight.w400,
    color: Theme.onSecondary,
  },
})

export default styles