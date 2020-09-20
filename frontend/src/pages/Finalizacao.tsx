import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

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
          <IonTitle>Quase Pronto...</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ionic-center">
        <h3 className="ion-padding">Enquanto terminamos de configurar sua Loja Online, converse com nosso Chatbot no Whatsapp.</h3>
        <a target="_blank" href="https://api.whatsapp.com/send?phone=551148377404&text=green-cloth">
          <img src="https://robohash.org/Tadeu18" alt="Robo" /><br />
          <img className="img-center" src="assets/imgs/zap.png" alt="Conversar no Whatsapp" />
          </a>
      </IonContent>
    </IonPage>
  );
};

export default Finalizacao;
