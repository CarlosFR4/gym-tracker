import React, {useEffect} from 'react'
import {View, Text, StyleSheet, Pressable} from 'react-native'
import Sizes from '@theme/Sizes'

export const Duration = {
  Short: 2000,
  Medium: 3000,
  Long: 5000,
}

export const Position = {
  Top: 'top',
  Bottom: 'bottom',
}

const Snackbar = ({
                    visible,
                    message,
                    actionText,
                    onActionPress,
                    duration = Duration.Medium,
                    position = Position.Bottom,
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
      position === Position.Top ? styles.topContainer : styles.bottomContainer,
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
    padding: Sizes.xLarge,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    left: Sizes.none,
    right: Sizes.none,
  },
  topContainer: {
    top: Sizes.none,
  },
  bottomContainer: {
    bottom: Sizes.none,
  },
  messageText: {
    fontSize: Sizes.xLarge,
  },
  actionText: {
    marginLeft: Sizes.medium,
    fontSize: Sizes.xLarge,
  },
})

export default Snackbar