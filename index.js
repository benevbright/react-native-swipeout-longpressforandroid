
import React from 'react';
import PropTypes from 'prop-types'
import { NativeModules, View, Platform, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';

import Swipeout from 'react-native-swipeout'; //https://github.com/dancormier/react-native-swipeout
import { ActionSheetCustom as ActionSheet } from 'react-native-actionsheet' //https://github.com/beefe/react-native-actionsheet

export default class SwipeOutLongPressForAndroid extends React.Component{

    showActionSheet = () => {
        this._actionsheet.show();
    }

    selectActionSeet = (idx) => {
        console.log('press action sheet : ', idx);
    }

    render()
    {
        if(Platform.OS == 'ios'){
            return (
                <Swipeout {...this.props}>
                    {this.props.children}
                </Swipeout>
            );
        }
        else
        {
            buttons = this.props.right.map((swipeitem) => {
                return swipeitem.text;
            })
            if(this.props.AndroidCancelbuttonTitle != null)
                buttons.push(this.props.AndroidCancelbuttonTitle);
            else
                buttons.push('Cancel');

            action = (idx) => {
                if(idx < this.props.right.length)
                    this.props.right[idx].onPress();
            }

            actionsheet = <ActionSheet key='actionsheet'
                ref={comp => this._actionsheet = comp}
                title={this.props.AndroidTitle}
                cancelButtonIndex={buttons.length - 1}
                destructiveButtonIndex={this.props.AndroidDestructiveButtonIndex}
                tintColor={this.props.AndroidTextColor}
                options={buttons}
                onPress={action}/>;

            var hasTouchable = false;
            React.Children.forEach(this.props.children, (child) => {
                // console.log('child : ', child.type.displayName);
                if(child.type == TouchableOpacity
                    || child.type == TouchableHighlight
                    || child.type == TouchableNativeFeedback
                    || child.type == TouchableWithoutFeedback)
                    hasTouchable = true;
            });            
            if(hasTouchable)
            {
                newchildren = React.Children.map(this.props.children, (child) => {
                    // console.log('child : ', child.type.displayName);
                    return React.cloneElement(child, {onLongPress:this.showActionSheet});
                });                    
                newchildren.key = 'newchildren';
                return [newchildren, actionsheet]
            }
            else{
                return (
                    <TouchableWithoutFeedback onLongPress={this.showActionSheet}>
                        <View>
                            {this.props.children}
                            {actionsheet}
                        </View>
                    </TouchableWithoutFeedback>
                );
            }
        }
    }
}


ActionSheet.propTypes = {
	AndroidCancelbuttonTitle: PropTypes.string,
	AndroidTextColor: PropTypes.string,
    AndroidDestructiveButtonIndex: PropTypes.number,
    AndroidCancelbuttonTitle: PropTypes.string
}