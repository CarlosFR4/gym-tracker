import {StyleSheet} from 'react-native'
import {Theme} from '@di/app.module'
import {FlexAlign, Flex, FlexDirection, JustifyContent, TextTransform} from '@util/constants'
import {GapSizes} from '@theme/Sizes'

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Theme.Background,
  },
  header: {
    alignItems: FlexAlign.FlexStart,
    height: 70,
  },
  headerText: {
    margin: GapSizes.ExtraLarge,
    fontSize: 30,
    color: Theme.OnPrimary,
  },
  sectionHeader: {
    flexDirection: FlexDirection.Row,
    display: Flex,
    margin: GapSizes.Large,
    padding: GapSizes.Large,
    justifyContent: JustifyContent.SpaceAround,
    alignItems: FlexAlign.Center,
  },
  sectionHeaderText: {
    flex: 1,
    fontSize: GapSizes.ExtraLarge,
    color: Theme.OnBackground,
    textTransform: TextTransform.Uppercase,
  },
  sectionHeaderButton: (pressed) => ({
    padding: GapSizes.ExtraLarge,
    borderRadius: 55,
    backgroundColor: pressed ? Theme.Surface : Theme.Background,
  }),
})

export default styles