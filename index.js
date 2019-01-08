import React from "react"
import { Animated, TouchableOpacity, View, StyleSheet } from "react-native"
import PropTypes from 'prop-types'

class WiggleBox extends React.Component {
  constructor(props) {
    super(props);
    this.rotation = new Animated.Value(0);
  }

  triggerWiggle = () => {
      const { duration } = this.props
    Animated.sequence([
      Animated.timing(this.rotation, {
        toValue: -4,
        duration: duration
      }),
      Animated.timing(this.rotation, {
        toValue: 4,
        duration: duration
      }),
      Animated.timing(this.rotation, {
        toValue: -4,
        duration: duration
      }),
      Animated.timing(this.rotation, {
        toValue: 4,
        duration: duration
      }),
      Animated.timing(this.rotation, {
        toValue: 0,
        duration: duration
      })
    ]).start();
  }

  componentDidMount () {
    const {active} = this.props

    if (active) {
      this.triggerWiggle()
    }
  }

  renderActive = () => {
    const { handlePress, boxStyle } = this.props
    return(
        <TouchableOpacity onPress={handlePress}>
            <View style={[boxStyle]}>
                {this.props.children}
            </View>
        </TouchableOpacity>
    )
  }

  renderInactive = () => {
    const { boxStyle } = this.props
    return(
        <View style={[boxStyle]}>
            {this.props.children}
        </View>
    )
  }

  render() {
      const {active} = this.props
      const wiggle = this.rotation.interpolate({
        inputRange: [-20, 20],
        outputRange: ['-10deg', '10deg'],
      })

      return(
        <Animated.View style={[
            styles.boxContainer,
            active ? { transform: [{ rotate: wiggle }] } : null
        ]}>
            {active ? this.renderActive() : this.renderInActive()}
        </Animated.View>
      )
  }
}

WiggleBox.defaultProps = {
    active:         false,
    boxStyle:       {},
    handlePress:    () => {},
    duration:       100
}

WiggleBox.propTypes = {
    active:         PropTypes.bool,
    boxStyle:       PropTypes.object,
    handlePress:    PropTypes.func,
    duration:       PropTypes.number
}

const styles = StyleSheet.create({
    boxContainer: {
        flex: 1,
        margin: 10
    }
})

export default WiggleBox
