import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Text, H1, H2, H3, Form, Item, Input, Label, Button, Picker, Icon } from 'native-base';

export default class DoctorPatient extends React.Component {
  render(props) {
    return (
      <Container>
        <Content style={styles.content}>
          <H2>Patients</H2>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  }
});