import {
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonContent
} from '@ionic/react';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Welcome to Ionic React Project</IonCardTitle>
          </IonCardHeader>
        </IonCard>
        <IonCard>
          <Link to="/about">
            <IonButton color="secondary">About</IonButton>
          </Link>

          <Link to="/settings">
            <IonButton color="danger">Settings</IonButton>
          </Link>
        </IonCard>
      </IonContent>
    );
  }
}

export default Home;
