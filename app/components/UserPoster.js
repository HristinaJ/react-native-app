import React, { Component, PropTypes } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { defaultStyles } from './styles';

// Get screen dimensions
const { width, height } = Dimensions.get('window');
// How many posters we want to have in each row and column
const cols = 3, rows = 3;

export default class UserPoster extends Component {
  // Component prop types
  static propTypes = {
    // Movie object with title, place, and poster
    user: PropTypes.object.isRequired,
    //days
    //days: propTypes.array,
    //times
    //times: propTypes.times,
    // Called when user taps on a poster
    onOpen: PropTypes.func.isRequired,
  }
  render() {
    const { user, user: { name, location, avatar }, onOpen } = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={() => onOpen(user)}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: avatar }} style={styles.image} />
        </View>
        <Text style={styles.name} numberOfLines={1}>{name}</Text>
        <Text style={styles.place} numberOfLines={1}>{location.city}, {location.state}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginBottom: 10,
    height: (height - 20 - 20) / rows - 10,
    width: (width - 10) / cols - 10,
  },
  imageContainer: {
    flex: 1,                          // take up all available space
  },
  image: {
    borderRadius: 10,                 // rounded corners
    ...StyleSheet.absoluteFillObject, // fill up all space in a container
  },
  title: {
    ...defaultStyles.text,
    fontSize: 14,
    marginTop: 4,
  },
  place: {
    ...defaultStyles.text,
    color: '#BBBBBB',
    fontSize: 12,
    lineHeight: 14,
  },
});

//<Text style={styles.name} numberOfLines={1}>{name.last}</Text>