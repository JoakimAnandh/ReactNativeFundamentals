import React from 'react';
import { Home } from './app/views/Home';
import { Contact } from './app/views/Contact'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import { Video } from './app/views/Video'
import { VideoDetail } from './app/views/VideoDetail'
import { Register } from './app/views/Register'

const AppNavigator = createStackNavigator({
  HomeRT: {
    screen: Home
  },
  ContactRT: {
    screen: Contact
  },
  LessonsRT: {
    screen: Video
  },
  VideoDetailRT: {
    screen: VideoDetail
  },
  RegisterRT: {
    screen: Register
  }
},
  {
    initialRouteName: 'HomeRT'
  }
)

export default createAppContainer(AppNavigator)



