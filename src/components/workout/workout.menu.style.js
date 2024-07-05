import {StyleSheet} from 'react-native'
import {Theme} from '@di/app.module'
import {FlexDirection, JustifyContent} from '@util/constants'
import {GapSizes} from '@theme/Sizes'

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Theme.Background,
  },
  header: {
    flexDirection: FlexDirection.Row,
    justifyContent: JustifyContent.SpaceBetween,
    height: 70,
  },
  headerText: {
    margin: GapSizes.ExtraLarge,
    fontSize: 30,
    color: Theme.OnPrimary,
  },
  headerButtonContainer: {
    margin: GapSizes.ExtraLarge,
  },
  headerButton: (pressed) => ({
    padding: GapSizes.ExtraLarge,
    borderRadius: 55,
    backgroundColor: pressed ? Theme.Surface : Theme.Background,
  }),
})

export default styles