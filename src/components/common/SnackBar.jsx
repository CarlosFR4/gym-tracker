import React, {useEffect} from 'react'
import {View, Text, StyleSheet, Pressable} from 'react-native'
import {GapSizes} from '@theme/Sizes'
import {FlexAlign, FlexDirection, FlexPosition, JustifyContent} from '@util/constants'

export const SnackbarDuration = {
  Short: 2000,
  Medium: 3000,
  Long: 5000,
}

export const SnackbarPosition = {
  Top: 'top',
  Bottom: 'bottom',
}

const Snackbar = ({
                    visible,
                    message,
                    actionText,
                    onActionPress,
                    duration = SnackbarDuration.Medium,
                    position = SnackbarPosition.Bottom,
                    textColor,
                    actionTextColor,
                    backgroundColor,
                    onHide = () => { },
                    containerStyle = {},
                    messageStyle = {},
                    actionTextStyle = {},
                  }) => {

  useEffect(() => {
    if (visible) {
      const timeout = setTimeout(() => {
        onHide()
      }, duration)

      return () => clearTimeout(timeout)
    }
  }, [duration, onHide, visible])

  return visible && <View
    style={[
      styles.container,
      position === SnackbarPosition.Top ? styles.topContainer : styles.bottomContainer,
      containerStyle,
      {backgroundColor: backgroundColor},
    ]}
  >
    <Text style={[styles.messageText, messageStyle, {color: textColor}]}>
      {message}
    </Text>
    {actionText && (
      <Pressable onPress={onActionPress}>
        <Text
          style={[
            styles.actionText,
            actionTextStyle,
            {color: actionTextColor},
          ]}
        >
          {actionText}
        </Text>
      </Pressable>
    )}
  </View>
}

const styles = StyleSheet.create({
  container: {
    padding: GapSizes.Huge,
    flexDirection: FlexDirection.Row,
    alignItems: FlexAlign.Center,
    justifyContent: JustifyContent.SpaceBetween,
    position: FlexPosition.Absolute,
    left: GapSizes.None,
    right: GapSizes.None,
  },
  topContainer: {
    top: GapSizes.None,
  },
  bottomContainer: {
    bottom: GapSizes.None,
  },
  messageText: {
    fontSize: GapSizes.Huge,
  },
  actionText: {
    marginLeft: GapSizes.Large,
    fontSize: GapSizes.Huge,
  },
})

export default Snackbar