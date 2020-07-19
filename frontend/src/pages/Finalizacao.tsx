import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './Finalizacao.css';

const Finalizacao: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Escolher o Finalizacao</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Escolher o Finalizacao</IonTitle>
          </IonToolbar>
        </IonHeader>
        <h1>
          Escolher o Finalizacao
          </h1>
      </IonContent>
    </IonPage>
  );
};

export default Finalizacao;
