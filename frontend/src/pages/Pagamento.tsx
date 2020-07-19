import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './Pagamento.css';

const Pagamento: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Escolher o Pagamento</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Escolher o Pagamento</IonTitle>
          </IonToolbar>
        </IonHeader>
        <h1>
          Escolher o Pagamento
          </h1>
      </IonContent>
    </IonPage>
  );
};

export default Pagamento;
