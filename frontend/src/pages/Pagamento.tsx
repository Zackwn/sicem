import { IonRadioGroup, IonCard, IonImg, IonRadio, IonCol, IonItem, IonGrid, IonLabel, IonRow, IonButton, IonIcon, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { chevronForwardOutline } from 'ionicons/icons';
import React from 'react';
import './Pagamento.css';

const templates = [
  {
    "id": 1,
    "titulo": "Grid Finance",
    "capa": "/assets/imgs/pag_001.jpg",
    "checked": true
  },
  {
    "id": 2,
    "titulo": "Pagar.me",
    "capa": "/assets/imgs/pag_002.png",
    "checked": false
  },
  {
    "id": 3,
    "titulo": "Pagseguro",
    "capa": "/assets/imgs/pag_003.png",
    "checked": false
  }
]

const Pagamento: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Serviço de Pagamento</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h3 className="ion-padding">Escolha seu provedor de pagamento favorito</h3>
        <IonRadioGroup value={1} onIonChange={e => console.log(e.detail.value)}>
          <IonGrid>
            <IonRow>
              {templates.map((e, index) => {
                return <IonCol key={index} size="12" size-xs="12" size-sm="4">
                  <IonCard>
                    <IonImg alt={e.titulo} src={e.capa}></IonImg>
                    <IonItem className="ion-no-margin" lines="none" color="transparent">
                      <IonLabel>{e.titulo}</IonLabel>
                      <IonRadio value={e.id} />
                    </IonItem>
                  </IonCard>
                </IonCol>
              })}
            </IonRow>
          </IonGrid>
        </IonRadioGroup>
      </IonContent>
      <IonButton color="secondary" size="large" expand="full" routerLink="/passos/chatbot" >
        Próximo <IonIcon icon={chevronForwardOutline}></IonIcon>
      </IonButton>
    </IonPage>
  );
};

export default Pagamento;
