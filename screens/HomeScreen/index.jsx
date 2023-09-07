import { View } from 'react-native'
import React, { useRef } from 'react'
import Rive from 'rive-react-native'
const HomeScreen = ({ width, height }) => {
    const riveRef = useRef(null)
    return (
        <View style={{backgroundColor: 'black', flex: 1 }}>
            <Rive
                ref={riveRef}
                resourceName="star"
                autoplay={true}
                stateMachineName="MainState"
            />
        </View>
    )
}

export default HomeScreen