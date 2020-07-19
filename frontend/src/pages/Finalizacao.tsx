import { IonButton, IonIcon, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import {chevronForwardOutline} from 'ionicons/icons';
import React from 'react';
import './Finalizacao.css';

const Finalizacao: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Finalizado</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <h1>
          Finalizado
          </h1>
      </IonContent>
    </IonPage>
  );
};

export default Finalizacao;
