import {
  IonIcon,
  IonItem,
  IonLabel,
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonButton
} from '@ionic/react';
import { chevronForwardOutline } from 'ionicons/icons';
import React from 'react';
import './Informacoes.css';

const Informacoes: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Dados da Loja</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h4 className="ion-padding">Informações Básicas</h4>
        <IonItem>
          <IonLabel color="primary" position="floating">Nome</IonLabel>
          <IonInput required={true}> </IonInput>
        </IonItem>
        <IonItem>
          <IonLabel color="primary" position="floating">E-mail</IonLabel>
          <IonInput required={true}> </IonInput>
        </IonItem>
        <IonItem>
          <IonLabel color="primary" position="floating">Descrição Curta</IonLabel>
          <IonInput required={true}> </IonInput>
        </IonItem>
        <IonItem>
          <IonLabel color="primary" position="floating">Endereço para Loja</IonLabel>
          <IonInput required={true}> </IonInput>
        </IonItem>
        <br /><br />
        <h4 className="ion-padding">Dados de Contato</h4>
        <IonItem>
          <IonLabel color="primary" position="floating">Telefone</IonLabel>
          <IonInput required={true}> </IonInput>
        </IonItem>
        <IonItem>
          <IonLabel color="primary" position="floating">Whatsapp</IonLabel>
          <IonInput required={true}> </IonInput>
        </IonItem>
        <br /><br />
        <h4 className="ion-padding">Endereço</h4>
        <IonItem>
          <IonLabel color="primary" position="floating">CEP</IonLabel>
          <IonInput required={true}> </IonInput>
        </IonItem>
        <IonItem>
          <IonLabel color="primary" position="floating">UF</IonLabel>
          <IonInput required={true}> </IonInput>
        </IonItem>
        <IonItem>
          <IonLabel color="primary" position="floating">Cidade</IonLabel>
          <IonInput required={true}> </IonInput>
        </IonItem>
        <IonItem>
          <IonLabel color="primary" position="floating">Bairro</IonLabel>
          <IonInput required={true}> </IonInput>
        </IonItem>
        <IonItem>
          <IonLabel color="primary" position="floating">Logradouro</IonLabel>
          <IonInput required={true}> </IonInput>
        </IonItem>
        <IonItem>
          <IonLabel color="primary" position="floating">Número</IonLabel>
          <IonInput required={true}> </IonInput>
        </IonItem>
      </IonContent>
      <IonButton color="secondary" size="large" expand="full" routerLink="/passos/produtos" >
        Próximo <IonIcon icon={chevronForwardOutline}></IonIcon>
      </IonButton>
    </IonPage>
  );
};

export default Informacoes;
