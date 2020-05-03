import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const PRIMARY_COLOR = '#47DFC2';

const styles = StyleSheet.create({
  // Container Styles
  containerDefault: {
    alignItems: 'center',
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 30,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  containerPrimary: {
    backgroundColor: PRIMARY_COLOR,
    borderColor: PRIMARY_COLOR,
    paddingVertical: 15,
    paddingHorizontal: 100,
  },
  containerDisabled: {
    opacity: 0.65,
  },

  // TextStyles
  textDefault: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  }
});

const getStyles = ({
  outline,
}) => {
  const containerStyles = [styles.containerDefault];
  const textStyles = [styles.textDefault];
  containerStyles.push(styles.containerPrimary);
  textStyles.push(styles.textPrimary);

    if (outline) {
      containerStyles.push(styles.containerPrimaryOutline);
      textStyles.push(styles.textPrimaryOutline);
    }
  return { textStyles, containerStyles };
};

class Button extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
  };

  render() {
    const {
      onPress,
      text,
      disabled,
    } = this.props;
    const { textStyles, containerStyles } = getStyles({ disabled });

    return (
      <TouchableOpacity onPress={onPress} style={containerStyles} disabled={disabled}>
        <Text style={textStyles}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

export default Button;