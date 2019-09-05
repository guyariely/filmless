import React from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';

const DismissKeyboardHOC = (Comp) => {
  return ({ children, ...props }) => (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Comp {...props}>
        {children}
      </Comp>
    </TouchableWithoutFeedback>
  );
};
export default DismissKeyboardHOC(View)