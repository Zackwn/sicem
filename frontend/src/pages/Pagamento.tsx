import { IonButton, IonIcon, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import {chevronForwardOutline} from 'ionicons/icons';
import React from 'react';
import './Pagamento.css';

const Pagamento: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Definir o Gatway de Pagamento</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <h1>
          Gatway de Pagamento
          </h1>
      </IonContent>

      <IonButton color="secondary" size="large" expand="full" routerLink="/passos/template" >
        Próximo <IonIcon icon={chevronForwardOutline}></IonIcon>
      </IonButton>

    </IonPage>
  );
};

export default Pagamento;
