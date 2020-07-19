import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './Chatbot.css';

const Chatbot: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Escolher o Chatbot</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Escolher o Chatbot</IonTitle>
          </IonToolbar>
        </IonHeader>
        <h1>
          Escolher o Chatbot
          </h1>
      </IonContent>
    </IonPage>
  );
};

export default Chatbot;
