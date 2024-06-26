import {StyleSheet} from 'react-native'
import {GapSizes} from '@theme/Sizes'
import {Theme} from '@di/app.module'
import FontWeight from '@theme/FontWeight'
import {Auto, FlexAlign, FlexDirection, JustifyContent, Percentage100, ResizeMode} from '@util/constants'

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Theme.Background,
  },
  view: {
    width: Percentage100,
    maxHeight: '90%',
  },
  input: {
    fontSize: GapSizes.Huge,
    width: Auto,
    padding: GapSizes.Large,
    margin: GapSizes.Large,
  },
  card: (pressed) => ({
    flexDirection: FlexDirection.Row,
    alignSelf: FlexAlign.FlexStart,
    width: Percentage100,
    padding: GapSizes.Medium,
    backgroundColor: pressed ? Theme.Surface : Theme.Background,
  }),
  header: {
    flexDirection: FlexDirection.Row,
    alignItems: FlexAlign.Center,
    height: 70,
  },
  headerContainer: {
    margin: GapSizes.Small,
    flexDirection: FlexDirection.Row,
    alignItems: FlexAlign.Center,
    justifyContent: JustifyContent.FlexEnd,
    flex: 1,
  },
  headerButton: pressed => ({
    padding: GapSizes.Large,
    margin: GapSizes.Small,
    borderRadius: 55,
    backgroundColor: pressed ? Theme.Surface : Theme.Background,
  }),
  searchBar: {
    flex: 1,
    margin: GapSizes.Medium,
    borderRadius: GapSizes.Small,
    backgroundColor: Theme.Surface,
    flexDirection: FlexDirection.Row,
    alignItems: FlexAlign.Center,
    justifyContent: JustifyContent.Center,
  },
  searchIcon: {
    margin: GapSizes.Medium,
  },
  clearSearchIcon: {
    margin: GapSizes.Medium,
  },
  searchInput: {
    flex: 1,
    color: Theme.OnSurface,
    fontWeight: FontWeight.w500,
    marginStart: GapSizes.Medium,
    marginEnd: GapSizes.Medium,
  },
  exerciseIconContainer: {
    width: 70,
    height: 70,
    padding: GapSizes.Medium,
  },
  exerciseIcon: {
    width: Percentage100,
    height: Percentage100,
    resizeMode: ResizeMode.Contain,
    borderRadius: GapSizes.Medium,
  },
  exerciseData: {
    padding: GapSizes.Large,
  },
  exerciseName: {
    fontSize: GapSizes.Huge,
    color: Theme.OnPrimary,
    fontWeight: FontWeight.w500,
    paddingBottom: GapSizes.Small,
  },
  exerciseBodyPart: {
    fontSize: GapSizes.ExtraLarge,
    fontWeight: FontWeight.w400,
    color: Theme.OnSecondary,
  },
})

export default styles