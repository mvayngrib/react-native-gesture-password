var helper = require('./helper');

import React from 'react'
import PropTypes from 'prop-types'
import {
    StyleSheet,
    View,
} from 'react-native';

var Line = React.createClass({
    propTypes: {
        style: PropTypes.object,
        start: PropTypes.shape({
            x: PropTypes.number,
            y: PropTypes.number
        }),
        end: PropTypes.shape({
            x: PropTypes.number,
            y: PropTypes.number
        })
    },
    getDefaultProps: function() {
        return {
            start: {x: 0, y: 0},
            end: {x: 0, y: 0}
        }
    },
    setNativeProps: function(props) {
        this.setState(props);
    },
    getInitialState: function() {
        return this.props;
    },
    render: function() {
        var { start, end } = this.state;

        if ( helper.isEquals(start, end) ) return null;

        var transform = helper.getTransform(start, end);
        var length = transform.d;
        var angle = transform.a + 'rad';
        var moveX = transform.x;
        var moveY = transform.y;

        return (
            <View ref='line' style={[
                styles.line,
                {left: start.x, top: start.y, width: length},
                {transform: [{translateX: moveX}, {translateY: moveY}, {rotateZ: angle}]},
                this.props.style,
                this.state.style
            ]} />
        )
    }
});

var styles = StyleSheet.create({
    line: {
        backgroundColor: '#ffffff',
        position: 'absolute',
        height: 1
    }
});

module.exports = Line;
