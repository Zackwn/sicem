import Menu from './components/Menu';
import React from 'react';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* Páginas */

import Intro from './pages/Intro';
import Home from './pages/Home';
import Template from './pages/Template';
import Informacoes from './pages/Informacoes';
import Produtos from './pages/Produtos';
import Campanhas from './pages/Campanhas';
import Pagamento from './pages/Pagamento';
import Chatbot from './pages/Chatbot';
import Dominio from './pages/Dominio';
import Personalizacao from './pages/Personalizacao';
import Finalizacao from './pages/Finalizacao';


const App: React.FC = () => {

  return ( 
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            
            <Route path="/inicio" component={Home} exact />
            <Route path="/passos/introducao" component={Intro} exact />
            <Route path="/passos/template" component={Template} exact />
            <Route path="/passos/informacoes" component={Informacoes} exact />
            <Route path="/passos/produtos" component={Produtos} exact />
            <Route path="/passos/campanhas" component={Campanhas} exact />
            <Route path="/passos/pagamento" component={Pagamento} exact />
            <Route path="/passos/chatbot" component={Chatbot} exact />
            <Route path="/passos/dominio" component={Dominio} exact />
            <Route path="/passos/personalizacao" component={Personalizacao} exact />
            <Route path="/passos/finalizacao" component={Finalizacao} exact />

            <Redirect from="/" to="/home" exact />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
