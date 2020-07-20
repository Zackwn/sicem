import { IonThumbnail, IonIcon, IonButton, IonRadioGroup, IonGrid, IonRow, IonCol, IonCard, IonImg, IonCheckbox, IonItem, IonLabel, IonRadio, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonInput } from '@ionic/react';
import { chevronForwardOutline } from 'ionicons/icons';
import React from 'react';

import './Campanhas.css';

const templates = [
  {
    "id": 1,
    "titulo": "Campanha 1",
    "capa": "/assets/imgs/campanha_001.jpg",
    "checked": true
  },
  {
    "id": 2,
    "titulo": "Campanha 2",
    "capa": "/assets/imgs/campanha_002.jpg",
    "checked": false
  },
  {
    "id": 3,
    "titulo": "Campanha 3",
    "capa": "/assets/imgs/campanha_003.jpg",
    "checked": false
  },
  {
    "id": 4,
    "titulo": "Campanha 4",
    "capa": "/assets/imgs/campanha_004.jpg",
    "checked": false
  },
  {
    "id": 5,
    "titulo": "Campanha 5",
    "capa": "/assets/imgs/campanha_005.jpg",
    "checked": false
  },
  {
    "id": 6,
    "titulo": "Campanha 6",
    "capa": "/assets/imgs/campanha_006.jpg",
    "checked": false
  }
];

const Campanhas: React.FC = () => {
  return (
    <IonPage id="Campanhas">
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Campanha Publicitária</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h3 className="ion-padding">Mídias Sociais</h3>
        <IonItem>
          <IonThumbnail slot="start">
            <img alt="Facebook" src="/assets/imgs/midia_001.png" />
          </IonThumbnail>
          <IonLabel>Facebook</IonLabel>
          <IonCheckbox slot="end" checked={true} color="primary" />
        </IonItem>
        <IonItem>
          <IonThumbnail slot="start">
            <img alt="Google" src="/assets/imgs/midia_002.png" />
          </IonThumbnail>
          <IonLabel>Google</IonLabel>
          <IonCheckbox slot="end" checked={true} color="dark" />
        </IonItem>
        <IonItem>
          <IonThumbnail slot="start">
            <img alt="Instagram" src="/assets/imgs/midia_003.png" />
          </IonThumbnail>
          <IonLabel>Instagram</IonLabel>
          <IonCheckbox slot="end" checked={true} color="tertiary" />
        </IonItem>
        <br />
        <br />
        <h3 className="ion-padding">Configurações da Campanha</h3>
        <IonItem>
          <IonLabel color="primary" position="floating">Raio de Distância (KM)</IonLabel>
          <IonInput required={true} value={"25,00"}> </IonInput>
        </IonItem>
        <IonItem>
          <IonLabel color="primary" position="floating">Valor Mensal (R$)</IonLabel>
          <IonInput required={true} value={"100,00"}> </IonInput>
        </IonItem>
        <br />
        <br />
        <h3 className="ion-padding">Modelo de Campanha</h3>
        <IonRadioGroup value={1} onIonChange={e => console.log(e.detail.value)}>
          <IonGrid>
            <IonRow>
              {templates.map((e, index) => {
                return <IonCol key={index} size="12" size-xs="6" size-sm="4">
                  <IonCard>
                    <IonImg alt={e.titulo} src={e.capa} className="capaCampanhasImg"></IonImg>
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
      <IonButton color="secondary" size="large" expand="full" routerLink="/passos/pagamento" >
        Próximo <IonIcon icon={chevronForwardOutline}></IonIcon>
      </IonButton>
    </IonPage>
  );
};
export default Campanhas;
