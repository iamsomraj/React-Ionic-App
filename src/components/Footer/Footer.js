import { IonFooter, IonTitle, IonToolbar } from '@ionic/react';
import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <IonFooter>
        <IonToolbar color="danger">
          <IonTitle>Somraj Mukherjee</IonTitle>
        </IonToolbar>
      </IonFooter>
    );
  }
}

export default Footer;
