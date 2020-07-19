import { IonIcon, IonButton, IonRadioGroup, IonGrid, IonRow, IonCol, IonCard, IonImg, IonCheckbox, IonList, IonItem, IonLabel, IonRadio, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonInput } from '@ionic/react';
import { chevronForwardOutline } from 'ionicons/icons';
import React from 'react';
import './Campanhas.css';

const Campanhas: React.FC = () => {

  const [templates, setTemplates] = React.useState([
    {
      "id": 1,
      "titulo": "Template 1",
      "capa": "https://themewagon.com/wp-content/uploads/2018/07/Electro-free-bootstrap-ecommerce-template.jpg",
      "checked": false
    },
    {
      "id": 2,
      "titulo": "Template 2",
      "capa": "https://themes.getbootstrap.com/wp-content/uploads/2019/10/screenshot-1-1200x900.jpg",
      "checked": false
    },
    {
      "id": 3,
      "titulo": "Template 3",
      "capa": "https://templatemag.com/wp-content/uploads/smarttech-0ecommerce-website-template.jpg",
      "checked": false
    },
    {
      "id": 4,
      "titulo": "Template 4",
      "capa": "https://uicookies.com/wp-content/uploads/2019/07/ecommerce-website-template.jpg",
      "checked": false
    },
    {
      "id": 5,
      "titulo": "Template 5",
      "capa": "https://templatemag.com/wp-content/uploads/smarttech-0ecommerce-website-template.jpg",
      "checked": false
    },
    {
      "id": 6,
      "titulo": "Template 6",
      "capa": "https://d85wutc1n854v.cloudfront.net/live/products/icons/WB0148688.jpg?v=3.2.1",
      "checked": true
    }
  ]);

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

        <IonList>
          <IonItem>
            <IonLabel>Instagram</IonLabel>
            <IonCheckbox slot="end" color="dark" />
          </IonItem>
          <IonItem>
            <IonLabel>Facebook</IonLabel>
            <IonCheckbox slot="end" color="dark" />
          </IonItem>
          <IonItem>
            <IonLabel>Google</IonLabel>
            <IonCheckbox slot="end" color="dark" />
          </IonItem>
        </IonList>

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
                return <IonCol size="12" size-xs="6" size-sm="4">
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
      <IonButton color="secondary" size="large" expand="full" routerLink="/passos/template" >
        Próximo <IonIcon icon={chevronForwardOutline}></IonIcon>
      </IonButton>
    </IonPage>
  );
};
export default Campanhas;
