import {StyleSheet} from 'react-native'
import {Theme} from '@di/app.module'
import {Auto, Flex, FlexAlign, FlexDirection, JustifyContent, Percentage100, ResizeMode, Position} from '@util/constants'
import {GapSizes} from '@theme/Sizes'
import FontSizes from '@theme/FontSizes'
import FontWeight from '@theme/FontWeight'
import Colors from '@theme/Colors'

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
  },
  card: (pressed) => ({
    flexDirection: FlexDirection.Row,
    alignSelf: FlexAlign.FlexStart,
    width: Percentage100,
    padding: GapSizes.Medium,
    backgroundColor: pressed ? Theme.Surface : Theme.Background,
  }),
  cardSelected: {
    backgroundColor: Theme.PrimaryVariant,
  },
  exerciseIconContainer: {
    width: 60,
    height: 60,
    padding: GapSizes.Medium,
  },
  exerciseIconContainerSelected: {
    backgroundColor: Colors.White,
    borderRadius: 60/2
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
  listWrapper: {
    maxHeight: '93%',
  },
  confirmButton: (pressed) => ({
    bottom: 30,
    right: 30,
    width: 80,
    height: 80,
    borderRadius: 80/2,
    position: Position.Absolute,
    backgroundColor: pressed ? Theme.SecondaryVariant : Theme.Secondary,
    justifyContent: JustifyContent.Center,
    alignItems: FlexAlign.Center,
  }),
  confirmButtonItem: {
    width: 26,
  },
  hidden: {
    display: 'none',
  },
})

export default styles