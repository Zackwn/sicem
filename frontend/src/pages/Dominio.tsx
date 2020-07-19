import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './Dominio.css';

const Dominio: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Escolher o Dominio</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Escolher o Dominio</IonTitle>
          </IonToolbar>
        </IonHeader>
        <h1>
          Escolher o Dominio
          </h1>
      </IonContent>
    </IonPage>
  );
};

export default Dominio;
