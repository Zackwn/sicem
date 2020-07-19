import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './Informacoes.css';

const Informacoes: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Escolher o Informacoes</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Escolher o Informacoes</IonTitle>
          </IonToolbar>
        </IonHeader>
        <h1>
          Escolher o Informacoes
          </h1>
      </IonContent>
    </IonPage>
  );
};

export default Informacoes;
