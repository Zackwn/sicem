import { IonIcon, IonRadioGroup, IonRadio, IonImg, IonCard, IonGrid, IonRow, IonCol, IonButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonItem, IonLabel } from '@ionic/react';
import {chevronForwardOutline} from 'ionicons/icons'
import React from 'react';
import { useState } from 'react';
import './Template.css';



const Template: React.FC = () => {


  const [templates, setTemplates] = useState([
    {
      "id": 1,
      "titulo": "Tema 1",
      "capa": "https://themewagon.com/wp-content/uploads/2018/07/Electro-free-bootstrap-ecommerce-template.jpg",
      "checked": false
    },
    {
      "id": 2,
      "titulo": "Tema 2",
      "capa": "https://themes.getbootstrap.com/wp-content/uploads/2019/10/screenshot-1-1200x900.jpg",
      "checked": false
    },
    {
      "id": 3,
      "titulo": "Tema 3",
      "capa": "https://templatemag.com/wp-content/uploads/smarttech-0ecommerce-website-template.jpg",
      "checked": false
    },
    {
      "id": 4,
      "titulo": "Tema 4",
      "capa": "https://uicookies.com/wp-content/uploads/2019/07/ecommerce-website-template.jpg",
      "checked": false
    },
    {
      "id": 5,
      "titulo": "Tema 5",
      "capa": "https://templatemag.com/wp-content/uploads/smarttech-0ecommerce-website-template.jpg",
      "checked": false
    },
    {
      "id": 6,
      "titulo": "Tema 6",
      "capa": "https://d85wutc1n854v.cloudfront.net/live/products/icons/WB0148688.jpg?v=3.2.1",
      "checked": true
    }
  ]);

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
                  <IonRadio value={e.checked} />
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
