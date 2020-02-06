import React, { useRef } from 'react';
import { Button, View, Text } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
function BottomSheet(_a) {
    var data = _a.data;
    var ref = useRef(null);
    return (React.createElement(View, { style: { flex: 1, justifyContent: 'center', alignItems: 'center' } },
        React.createElement(Button, { title: data.buttonText, onPress: function () {
                ref.current.open();
            } }),
        React.createElement(RBSheet, { ref: ref, height: 300, duration: 300, closeOnDragDown: true, customStyles: {
                container: {
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                },
            } },
            React.createElement(View, null,
                React.createElement(Text, { style: { fontSize: 24 } }, data.bodyText)))));
}
export default BottomSheet;
//# sourceMappingURL=BottomSheet.js.map