import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {error: null};
    this._resetError  = this._resetError.bind(this);
  }

  componentDidCatch(error) {
    this.setState({error});
  }

  _resetError() {
    this.setState({error: null});
  }

  render() {
    if (this.state.error) {
      return (
        <View style={styles.container}>
          <Text style={styles.errorMessage}>{this.state.error.message}</Text>
          <Button
            onPress={this._resetError}
            title="Reset"
          />
        </View>
      );
    }
    return this.props.children;
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  errorMessage: {
    fontSize: 18,
    marginBottom: 16,
  },
  sectionHeader: {
    fontSize: 20,
    backgroundColor: '#fff',
    marginBottom: 8,
  },
});
