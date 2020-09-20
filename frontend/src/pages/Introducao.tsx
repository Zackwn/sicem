import {
  IonButton,
  IonIcon,
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { chevronForwardOutline } from 'ionicons/icons';
import React from 'react';
import './Introducao.css';

const Intro: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Seja bem vindo(a)!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-text-center">
        <br />
        <img src="/assets/imgs/logo.jpg" alt="" />
        <h4 className="ion-padding ion-bold">É muito fácil criar uma loja online para seu mercado... Vamos começar?</h4>
      </IonContent>
      <IonButton color="secondary" size="large" expand="full" routerLink="/passos/template" >
        Próximo <IonIcon icon={chevronForwardOutline}></IonIcon>
      </IonButton>
    </IonPage>
  );
};

export default Intro;