import {StyleSheet} from 'react-native'
import Sizes from '@theme/Sizes'
import {Theme} from '@di/app.module'
import {AlignItems, Auto, FlexDirection, JustifyContent} from 'src/util/constants'

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Theme.background,
  },
  header: {
    flexDirection: FlexDirection.Row,
    alignItems: AlignItems.Center,
    height: 70,
  },
  headerButtons: {
    margin: Sizes.xSmall,
    flexDirection: FlexDirection.Row,
    alignItems: AlignItems.Center,
    justifyContent: JustifyContent.FlexEnd,
    flex: 1,
  },
  closeButton: pressed => ({
    margin: Sizes.medium,
    padding: Sizes.medium,
    borderRadius: 55,
    backgroundColor: pressed ? Theme.surface : Theme.background,
  }),
  headerTitle: {
    flex: 1,
    fontSize: Sizes.xxLarge,
    color: Theme.onBackground,
    justifyContent: JustifyContent.Center,
    margin: Sizes.medium,
  },
  doneButton: pressed => ({
    margin: Sizes.medium,
    padding: Sizes.medium,
    borderRadius: Sizes.large,
    backgroundColor: pressed ? Theme.surface : Theme.background,
  }),
  doneButtonText: {
    color: Theme.primaryVariant,
    fontSize: Sizes.xLarge,
  },
  input: {
    width: Auto,
    padding: Sizes.xLarge,
    marginTop: Sizes.medium,
    marginBottom: Sizes.medium,
    marginStart: Sizes.xxLarge,
    marginEnd: Sizes.xxLarge,
    fontSize: Sizes.xLarge,
    color: Theme.onPrimary,
    backgroundColor: Theme.surface,
    borderRadius: Sizes.small,
  },
  select: (pressed) => ({
    backgroundColor: pressed ? Theme.surface : Theme.background,
  }),
  selectLabel: {
    color: Theme.onPrimary,
    fontSize: Sizes.xLarge,
    padding: Sizes.large,
    margin: Sizes.xLarge,
  },
  selectValue: {
    color: Theme.onSurface,
    fontSize: Sizes.xLarge,
    padding: Sizes.large,
    margin: Sizes.xLarge,
  },
})

export default styles