import { IonButton, IonIcon, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import {chevronForwardOutline} from 'ionicons/icons';
import React from 'react';
import './Dominio.css';

const Dominio: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Escolher o Dominio</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <h1>
          Escolher o Dominio
          </h1>
      </IonContent>
      <IonButton color="secondary" size="large" expand="full" routerLink="/passos/template" >
        Próximo <IonIcon icon={chevronForwardOutline}></IonIcon>
      </IonButton>
    </IonPage>
  );
};

export default Dominio;
