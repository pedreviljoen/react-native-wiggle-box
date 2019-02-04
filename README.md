<div align="center">
    <img src="./assets/wiggle.gif" height="450px">
</div>

# react-native-wiggle-box
[![Package version](https://img.shields.io/npm/v/react-native-wiggle-box.svg?style=flat-square)](https://npmjs.org/package/react-native-wiggle-box)
[![Make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![License](https://img.shields.io/npm/l/react-native-wiggle-box.svg?style=flat-square)](https://github.com/pedreviljoen/react-native-wiggle-box/blob/master/LICENSE)
[![npm downloads](https://img.shields.io/npm/dm/react-native-wiggle-box.svg?style=flat-square)](https://npmjs.org/package/react-native-wiggle-box) 
[![Greenkeeper badge](https://badges.greenkeeper.io/pedreviljoen/react-native-wiggle-box.svg)](https://greenkeeper.io/)
[![Travis CI build status](https://img.shields.io/travis/pedreviljoen/react-native-wiggle-box.svg?style=flat-square)](https://travis-ci.org/pedreviljoen/react-native-wiggle-box)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)



> A box that wiggles for clickable attention

## Contents 

  - [Install](#install)
  - [Usage](#usage)
  - [Props](#props)
  - [Contribute](#contribute)
  - [License](#license)

## Install

```sh
yarn add react-native-wiggle-box
```

OR

```sh
npm install react-native-wiggle-box
```

## Usage

```javascript
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import WiggleBox from 'react-native-wiggle-box'

class Example extends React.Component {

    handleClick = () => console.log("You've just clicked on the box")

    render() {
        <View>
            <WiggleBox
                active={true}
                handlePress={this.handleClick}
                boxStyle={styles.boxContainer}
                duration={200}
                type={'wiggle'}
            >
                <Text>
                    I wiggle
                </Text>
            </WiggleBox>
            <WiggleBox
                active={true}
                handlePress={this.handleClick}
                boxStyle={styles.boxContainer}
                type={'bounce'}
            >
                <Text>
                    I bounce
                </Text>
            </WiggleBox>
        </View>
    }
}

const styles = StyleSheet.create({
    boxContainer: {
        backgroundColor: "#3BD0F5",
        height: 100,
        width: 100,
        alignItems: "center",
        justifyContent: "center"
    }
})
```

## Props

<table width="80%">
    <tr>
        <th>Property</th>
        <th>Description</th> 
        <th>Type</th>
        <th>Default Value</th>
    </tr>
    <tr>
        <td><code>active</code></td>
        <td>Value toggling wiggle of box</td> 
        <td><code>Boolean</code></td>
        <td><code>false</code></td>
    </tr>
    <tr>
        <td><code>boxStyle</code></td>
        <td>Styles of box</td> 
        <td><code>Object</code></td>
        <td><code>{}</code></td>
    </tr>
    <tr>
        <td><code>handlePress</code></td>
        <td>Function to execute on click of the box</td>
        <td><code>Function</code></td> 
        <td><code>() => {}</code></td>
    </tr>
    <tr>
        <td><code>duration</code></td>
        <td>Time (ms) for duration of animation</td> 
        <td><code>Integer</code></td>
        <td><code>100</code></td>
    </tr>
    <tr>
        <td><code>type</code></td>
        <td>Distinguish between wiggle or bounce, to draw attention</td> 
        <td><code>String</code></td>
        <td><code>wiggle</code></td>
    </tr>
</table>

## Contribute

Contributions are welcome!

1. Fork it.
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

Or open up [a issue](https://github.com/pedreviljoen/react-native-wiggle-box/issues).

## License

MIT