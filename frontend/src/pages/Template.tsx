import {
  IonIcon,
  IonRadioGroup,
  IonRadio,
  IonImg,
  IonCard,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel
} from '@ionic/react';
import { chevronForwardOutline } from 'ionicons/icons'
import React from 'react';
import './Template.css';

const templates = [
  {
    "id": 1,
    "titulo": "Tema 1",
    "capa": "/assets/imgs/001.jpg",
    "checked": false
  },
  {
    "id": 2,
    "titulo": "Tema 2",
    "capa": "/assets/imgs/002.jpg",
    "checked": false
  },
  {
    "id": 3,
    "titulo": "Tema 3",
    "capa": "/assets/imgs/003.jpg",
    "checked": false
  },
  {
    "id": 4,
    "titulo": "Tema 4",
    "capa": "/assets/imgs/004.jpg",
    "checked": false
  },
  {
    "id": 5,
    "titulo": "Tema 5",
    "capa": "/assets/imgs/005.jpg",
    "checked": false
  },
  {
    "id": 6,
    "titulo": "Tema 6",
    "capa": "/assets/imgs/006.jpg",
    "checked": true
  }
]

const Template: React.FC = () => {
  return (
    <IonPage id="Template">
      <IonHeader >
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Escolher um Tema</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonRadioGroup value={1} onIonChange={e => console.log(e.detail.value)}>
          <IonGrid>
            <IonRow>
              {templates.map((e, index) => {
                return <IonCol key={index} size="12" size-xs="6" size-sm="4">
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
      <IonButton color="secondary" size="large" expand="full" routerLink="/passos/informacoes" >
        Próximo <IonIcon icon={chevronForwardOutline}></IonIcon>
      </IonButton>
    </IonPage>
  );
};

export default Template;
