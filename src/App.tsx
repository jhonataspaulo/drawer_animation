import React, {useRef} from 'react'
import {
  Animated,
  Dimensions,
  PanResponder,
  StatusBar,
  StyleSheet,
} from 'react-native'
import {getStatusBarHeight} from 'react-native-status-bar-height'
import styled from 'styled-components/native'
import {Home} from './components/Home'

const {width, height} = Dimensions.get('window')

const heightView = height - getStatusBarHeight()

type Props = {}

const widtDrawer = width * 0.6

export const App: React.FC<Props> = () => {
  const scaleWrapper = useRef(new Animated.Value(1)).current
  const leftWrapper = useRef(new Animated.Value(0)).current

  const scaleDrawer = useRef(new Animated.Value(0.9)).current
  const leftDrawer = useRef(new Animated.Value(widtDrawer * -1)).current

  const bordeRadius = useRef(new Animated.Value(0)).current

  const opened = useRef(false)

  let w = widtDrawer
  let w2 = widtDrawer

  const changeStatus = () => {
    opened.current = !opened.current
  }

  const openWrapper = () => {
    Animated.parallel([
      Animated.spring(leftWrapper, {
        toValue: widtDrawer,
        useNativeDriver: true,
      }),
      Animated.spring(scaleWrapper, {
        toValue: 0.9,
        useNativeDriver: true,
      }),
      Animated.spring(bordeRadius, {
        toValue: 22,
        useNativeDriver: true,
      }),
    ]).start()
  }

  const openDrawer = () => {
    Animated.parallel([
      Animated.spring(leftDrawer, {
        toValue: 0,
        useNativeDriver: true,
      }),
      Animated.spring(scaleDrawer, {
        toValue: 1,
        useNativeDriver: true,
      }),
    ]).start()
  }

  const closeDrawer = () => {
    Animated.parallel([
      Animated.spring(leftDrawer, {
        toValue: widtDrawer * -1,
        useNativeDriver: true,
      }),
      Animated.spring(scaleDrawer, {
        toValue: 0.9,
        useNativeDriver: true,
      }),
    ]).start()
  }

  const closeWrapper = () => {
    Animated.parallel([
      Animated.spring(leftWrapper, {
        toValue: 0,
        useNativeDriver: true,
      }),
      Animated.spring(scaleWrapper, {
        toValue: 1,
        useNativeDriver: true,
      }),
      Animated.spring(bordeRadius, {
        toValue: 0,
        useNativeDriver: true,
      }),
    ]).start()
  }

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {},
      onPanResponderMove: (event, gesture) => {
        console.log(opened)

        if (!opened.current) {
          if (gesture.dx > 0) {
            //Wrapper
            const scaleOffset = 1 - gesture.dx / widtDrawer / 10
            const scaleOffsetDrawer = 0.9 + gesture.dx / widtDrawer / 10
            const bordeRadiusOffset = (gesture.dx / widtDrawer) * 22
            if (gesture.dx < widtDrawer) {
              leftWrapper.setValue(gesture.dx)
              w = gesture.dx
            }
            if (scaleOffset > 0.9) {
              scaleWrapper.setValue(scaleOffset)
            }
            bordeRadius.setValue(bordeRadiusOffset)

            //Drawer

            if (widtDrawer * -1 + gesture.dx < 0) {
              leftDrawer.setValue(widtDrawer * -1 + gesture.dx)
            }

            scaleDrawer.setValue(scaleOffsetDrawer)
          }
        } else {
          //Wrapper
          if (gesture.dx < 0) {
            const scaleOffset = 0.9 + Math.abs(gesture.dx) / widtDrawer / 10
            const scaleOffsetDrawer = 1 - Math.abs(gesture.dx) / widtDrawer / 10
            const bordeRadiusOffset =
              22 - (Math.abs(gesture.dx) / widtDrawer) * 22
            if (widtDrawer - Math.abs(gesture.dx) > 0) {
              leftWrapper.setValue(widtDrawer - Math.abs(gesture.dx))
              w2 = Math.abs(gesture.dx)
            }
            if (scaleOffset < 1) {
              scaleWrapper.setValue(scaleOffset)
            }
            bordeRadius.setValue(bordeRadiusOffset)

            //Drawer
            if (gesture.dx > widtDrawer * -1) {
              leftDrawer.setValue(gesture.dx)
            }

            scaleDrawer.setValue(scaleOffsetDrawer)
          }
        }
      },
      onPanResponderRelease: () => {
        if (!opened.current) {
          if (widtDrawer / 4 < w) {
            openWrapper()
            openDrawer()
            changeStatus()
          } else {
            closeWrapper()
            closeDrawer()
          }
        } else {
          if (widtDrawer / 4 < w2) {
            closeWrapper()
            closeDrawer()
            changeStatus()
          } else {
            openWrapper()
            openDrawer()
          }
        }
      },
    }),
  ).current

  console.log(opened)

  const myStyles = {
    transform: [{translateX: leftWrapper}, {scale: scaleWrapper}],
    borderTopLeftRadius: bordeRadius,
    borderBottomLeftRadius: bordeRadius,
  }

  const stylesDrawer = {
    transform: [{translateX: leftDrawer}, {scale: scaleDrawer}],
  }

  return (
    <Main>
      <StatusBar backgroundColor="#000" />
      <Animated.View
        style={[
          styles.wrapper,
          {
            ...myStyles,
          },
        ]}
        {...panResponder.panHandlers}>
        <Home />
      </Animated.View>
      <Animated.View
        style={[
          styles.drawer,
          {
            ...stylesDrawer,
          },
        ]}>
        <Header>
          <Box>
            <Avatar source={{uri: 'https://github.com/jhonataspaulo.png'}} />
            <Info>
              <Name>Jhonatas Paulo</Name>
              <Function>Fullstack Developer</Function>
            </Info>
          </Box>
          <MenuItem>Home</MenuItem>
          <MenuItem>Photos</MenuItem>
          <MenuItem>Videos</MenuItem>
          <MenuItem>Musics</MenuItem>
        </Header>
        <LogoutBox>
          <LabelLogout>Sair</LabelLogout>
        </LogoutBox>
      </Animated.View>
    </Main>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: 'absolute',
    width,
    height: heightView,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 50,
    overflow: 'hidden',
    zIndex: 2,
  },
  drawer: {
    flex: 1,
    position: 'absolute',
    width: width * 0.6,
    height: heightView,
    backgroundColor: '#f2f2f2',
    paddingVertical: 48,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
  },
})

const Main = styled.SafeAreaView`
  flex: 1;
  background-color: #f2f2f2;
`

const Header = styled.View``

const MenuItem = styled.Text`
  color: #000;
  font-size: 25px;
  margin-bottom: 16px;
`

const Box = styled.View`
  margin-bottom: 32px;
`
const Info = styled.View`
  margin-top: 16px;
`
const Avatar = styled.Image`
  width: 70px;
  height: 70px;
`

const Name = styled.Text`
  color: #000;
  font-size: 18px;
  font-weight: bold;
`

const Function = styled.Text`
  color: #777;
  font-size: 14px;
`
const LogoutBox = styled.View`
  margin-bottom: 32px;
`

const LabelLogout = styled.Text`
  color: tomato;
  font-size: 16px;
  margin-top: 16px;
`
