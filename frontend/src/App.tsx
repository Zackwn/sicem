/* Bibliotecas e Componentes */
import Menu from './components/Menu';
import React from 'react';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import './theme/variables.css';

/* Páginas */
import Introducao from './pages/Introducao';
import Template from './pages/Template';
import Informacoes from './pages/Informacoes';
import Produtos from './pages/Produtos';
import Campanhas from './pages/Campanhas';
import Pagamento from './pages/Pagamento';
import Chatbot from './pages/Chatbot';
import Finalizacao from './pages/Finalizacao';

const App: React.FC = () => {
  return ( 
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/passos/introducao" component={Introducao} exact />
            <Route path="/passos/template" component={Template} exact />
            <Route path="/passos/informacoes" component={Informacoes} exact />
            <Route path="/passos/produtos" component={Produtos} exact />
            <Route path="/passos/campanhas" component={Campanhas} exact />
            <Route path="/passos/pagamento" component={Pagamento} exact />
            <Route path="/passos/chatbot" component={Chatbot} exact />
            <Route path="/passos/finalizacao" component={Finalizacao} exact />
            <Redirect from="/" to="/passos/introducao" exact />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
