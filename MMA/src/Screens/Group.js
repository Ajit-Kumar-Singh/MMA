import React from 'react'

import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';

import Carousel from 'react-native-snap-carousel';

const CARD_WIDTH = Dimensions.get('window').width;
export const ENTRIES1 = [

    {

        title: 'Beautiful and dramatic Antelope Canyon',

        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',

        illustration: 'http://i.imgur.com/UYiroysl.jpg'

    },

    {

        title: 'Earlier this morning, NYC',

        subtitle: 'Lorem ipsum dolor sit amet',

        illustration: 'http://i.imgur.com/UPrs1EWl.jpg'

    },

    {

        title: 'White Pocket Sunset',

        subtitle: 'Lorem ipsum dolor sit amet et nuncat ',

        illustration: 'http://i.imgur.com/MABUbpDl.jpg'

    },

    {

        title: 'Acrocorinth, Greece',

        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',

        illustration: 'http://i.imgur.com/KZsmUi2l.jpg'

    },

    {

        title: 'The lone tree, majestic landscape of New Zealand',

        subtitle: 'Lorem ipsum dolor sit amet',

        illustration: 'http://i.imgur.com/2nCt3Sbl.jpg'

    },

    {

        title: 'Middle Earth, Germany',

        subtitle: 'Lorem ipsum dolor sit amet',

        illustration: 'http://i.imgur.com/lceHsT6l.jpg'

    }

];
class Group extends React.Component {
	
_renderItem ({item, index}) {
        return (
            <View style={{ height:CARD_WIDTH}} >
<Text>{item.title}</Text>
</View>

 // or { flex: 1 } for responsive height
        );
    }
 
    render () {
        return (
            <Carousel
              data={ENTRIES1}
              renderItem={this._renderItem}
              sliderWidth={CARD_WIDTH}
              itemWidth={CARD_WIDTH}
              slideStyle={{ width:CARD_WIDTH}}
              inactiveSlideOpacity={1}
              inactiveSlideScale={1}
            />
		)
  };

}
var styles=StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F5FCFF',
	},
	content: {
		alignItems: 'center',
	},
	card: {
		flex: 1,
		backgroundColor: '#ccc',
		width:CARD_WIDTH,
		alignItems: 'center',
		justifyContent: 'center',
	}
	,
	page: {
   flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
  },
})
export default Group;
