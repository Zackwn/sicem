import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './Personalizacao.css';

const Personalizacao: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Escolher o Personalizacao</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Escolher o Personalizacao</IonTitle>
          </IonToolbar>
        </IonHeader>
        <h1>
          Escolher o Personalizacao
          </h1>
      </IonContent>
    </IonPage>
  );
};

export default Personalizacao;
