import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
} from '@ionic/react';

import React from 'react';
import { useLocation } from 'react-router-dom';
import { arrowForwardOutline, arrowForwardSharp } from 'ionicons/icons';
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
    iosIcon: arrowForwardOutline,
    mdIcon: arrowForwardSharp
  },
  {
    title: 'Tema',
    url: '/passos/template',
    iosIcon: arrowForwardOutline,
    mdIcon: arrowForwardSharp
  },
  {
    title: 'Informações',
    url: '/passos/informacoes',
    iosIcon: arrowForwardOutline,
    mdIcon: arrowForwardSharp
  },
  {
    title: 'Produtos',
    url: '/passos/produtos',
    iosIcon: arrowForwardOutline,
    mdIcon: arrowForwardSharp
  },
  {
    title: 'Campanhas',
    url: '/passos/campanhas',
    iosIcon: arrowForwardOutline,
    mdIcon: arrowForwardSharp
  },
  {
    title: 'Layout de Pagamento',
    url: '/passos/pagamento',
    iosIcon: arrowForwardOutline,
    mdIcon: arrowForwardSharp
  },
  {
    title: 'Chatbot',
    url: '/passos/chatbot',
    iosIcon: arrowForwardOutline,
    mdIcon: arrowForwardSharp
  },
  {
    title: 'Finalização',
    url: '/passos/finalizacao',
    iosIcon: arrowForwardOutline,
    mdIcon: arrowForwardSharp
  }
]

const Menu: React.FC = () => {
  const location = useLocation();
  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
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
