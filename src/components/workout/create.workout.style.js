import {StyleSheet} from 'react-native'
import {Theme} from '@di/app.module'
import {Auto, Flex, FlexDirection, JustifyContent} from '@util/constants'
import {GapSizes} from '@theme/Sizes'
import FontSizes from '@theme/FontSizes'
import FontWeight from '@theme/FontWeight'

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Theme.Background,
  },
  header: {
    flexDirection: FlexDirection.Row,
    justifyContent: JustifyContent.SpaceBetween,
    marginStart: GapSizes.ExtraHuge,
    marginEnd: GapSizes.ExtraHuge,
    height: 60,
  },
  headerText: {
    margin: GapSizes.ExtraLarge,
    fontSize: 20,
    color: Theme.OnPrimary,
  },
  headerButton: (pressed) => ({
    padding: GapSizes.ExtraLarge,
    borderRadius: 55,
    backgroundColor: pressed ? Theme.Surface : Theme.Background,
  }),
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
  addExerciseButton: (pressed) => ({
    display: Flex,
    padding: GapSizes.Huge,
    textAlign: 'center',
    backgroundColor: pressed ? Theme.Surface : Theme.Background,
  }),
  addExerciseButtonText: {
    fontSize: FontSizes.h2,
    fontWeight: FontWeight.w500,
    width: '100%',
    textAlign: 'center',
    color: Theme.OnSurface,
    justifyContent: JustifyContent.Center,
  }
})

export default styles