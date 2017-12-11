
# react-native-swipeout-longpressforandroid
[![npm](https://img.shields.io/npm/v/react-native-swipeout-longpressforandroid.svg)](https://npmjs.com/package/react-native-swipeout-longpressforandroid) [![npm](https://img.shields.io/npm/dm/react-native-swipeout-longpressforandroid.svg)](https://npmjs.com/package/react-native-swipeout-longpressforandroid)

I added Long press Android behavior with using awesome [Action Sheet](https://www.npmjs.com/package/react-native-actionsheet) libarary on awesome [Swipeout](https://www.npmjs.com/package/react-native-swipeout) library.
Because "Swipe to delete" action is not compatible for Android since it has horizontal scrollable tab navigation.

Now it works like this.

![react-native-swipeout-longpressforandroid](http://i.imgur.com/DrA7TYX.gif)

## Getting started

`$ npm install react-native-swipeout-longpressforandroid`


## Manual installation

Just replace your current code like below. That's it.

```
//import Swipeout from 'react-native-swipeout';
-> import LongPressForAndroidSwipeout from 'react-native-swipeout-longpressforandroid'


/*<Swipeout ...>
    ...
</Swipeout>*/
->
<LongPressForAndroidSwipeout ...>
    ...
</LongPressForAndroidSwipeout>
```

## Usage

Swipeout-LongPressforAndroid is extension of Swipeout, so please look documentation for basic usage from [Swipeout](https://github.com/dancormier/react-native-swipeout).

#### Props for Android

| Property      | Type          | Default             | Description |
| ------------- |:-------------:|:------------:       | ----------- |
| AndroidTitle | string | | Title for question on top. If it's not assigned, question will not be shown. |
| AndroidCancelbuttonTitle | string | "Cancel" | Title for cancel button. |
| AndroidTextColor | string | | Button title color for normal button except destructive button. |
| AndroidDestructiveButtonIndex | number | | Button on this index will go with red color.  |

## Contribution

I'm very new to React Native and Javascript. So I need your help. Please feel free to make this together.
