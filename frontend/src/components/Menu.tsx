import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import React from 'react';
import { useLocation } from 'react-router-dom';
import { mailOutline, mailSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Introdução',
    url: '/passos/introducao',
    iosIcon: mailOutline,
    mdIcon: mailSharp
  },
  {
    title: 'Tema',
    url: '/passos/template',
    iosIcon: mailOutline,
    mdIcon: mailSharp
  },
  {
    title: 'Informações',
    url: '/passos/informacoes',
    iosIcon: mailOutline,
    mdIcon: mailSharp
  },
  {
    title: 'Produtos',
    url: '/passos/produtos',
    iosIcon: mailOutline,
    mdIcon: mailSharp
  },
  {
    title: 'Campanhas',
    url: '/passos/campanhas',
    iosIcon: mailOutline,
    mdIcon: mailSharp
  },
  {
    title: 'Layout de Pagamento',
    url: '/passos/pagamento',
    iosIcon: mailOutline,
    mdIcon: mailSharp
  },
  {
    title: 'Chatbot',
    url: '/passos/chatbot',
    iosIcon: mailOutline,
    mdIcon: mailSharp
  },
  {
    title: 'Domínio',
    url: '/passos/dominio',
    iosIcon: mailOutline,
    mdIcon: mailSharp
  },
  {
    title: 'Personalização',
    url: '/passos/personalizacao',
    iosIcon: mailOutline,
    mdIcon: mailSharp
  },
  {
    title: 'Finalização',
    url: '/passos/finalizacao',
    iosIcon: mailOutline,
    mdIcon: mailSharp
  }
]

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>User</IonListHeader>
          <IonNote>userEmail.com</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
