import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './Campanhas.css';

const Campanhas: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Escolher o Campanhas</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Escolher o Campanhas</IonTitle>
          </IonToolbar>
        </IonHeader>
        <h1>
          Escolher o Campanhas
          </h1>
      </IonContent>
    </IonPage>
  );
};

export default Campanhas;
