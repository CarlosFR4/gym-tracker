import {StyleSheet} from 'react-native'
import {GapSizes} from '@theme/Sizes'
import {Theme} from '@di/app.module'
import {FlexAlign, Auto, FlexDirection, JustifyContent} from '@util/constants'

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Theme.Background,
  },
  header: {
    flexDirection: FlexDirection.Row,
    alignItems: FlexAlign.Center,
    height: 70,
  },
  headerButtons: {
    margin: GapSizes.Small,
    flexDirection: FlexDirection.Row,
    alignItems: FlexAlign.Center,
    justifyContent: JustifyContent.FlexEnd,
    flex: 1,
  },
  closeButton: pressed => ({
    margin: GapSizes.Large,
    padding: GapSizes.Large,
    borderRadius: 55,
    backgroundColor: pressed ? Theme.Surface : Theme.Background,
  }),
  headerTitle: {
    flex: 1,
    fontSize: GapSizes.ExtraHuge,
    color: Theme.OnBackground,
    justifyContent: JustifyContent.Center,
    margin: GapSizes.Large,
  },
  doneButton: pressed => ({
    margin: GapSizes.Large,
    padding: GapSizes.Large,
    borderRadius: GapSizes.ExtraLarge,
    backgroundColor: pressed ? Theme.Surface : Theme.Background,
  }),
  doneButtonText: {
    color: Theme.PrimaryVariant,
    fontSize: GapSizes.Huge,
  },
  input: {
    width: Auto,
    padding: GapSizes.Huge,
    marginTop: GapSizes.Large,
    marginBottom: GapSizes.Large,
    marginStart: GapSizes.ExtraHuge,
    marginEnd: GapSizes.ExtraHuge,
    fontSize: GapSizes.Huge,
    color: Theme.OnPrimary,
    backgroundColor: Theme.Surface,
    borderRadius: GapSizes.Medium,
  },
  select: (pressed) => ({
    backgroundColor: pressed ? Theme.Surface : Theme.Background,
  }),
  selectLabel: {
    color: Theme.OnPrimary,
    fontSize: GapSizes.Huge,
    padding: GapSizes.ExtraLarge,
    margin: GapSizes.Huge,
  },
  selectValue: {
    color: Theme.OnSurface,
    fontSize: GapSizes.Huge,
    padding: GapSizes.ExtraLarge,
    margin: GapSizes.Huge,
  },
})

export default styles