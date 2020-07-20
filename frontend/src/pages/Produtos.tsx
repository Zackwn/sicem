import { IonButton, IonIcon, IonModal, IonSelect, IonSelectOption, IonCol, IonRow, IonGrid, IonCard, IonInput, IonItem, IonLabel, IonSearchbar, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import { chevronForwardOutline, add, search, trash } from 'ionicons/icons'
import React from 'react';
import './Produtos.css';


const listaProdutos = [
  {"ID":"1",
  "Nome":"Tapioca Rocha Goma Hidratada Porção Certa 70g",
  "Capa":"/assets/imgs/produto_001.jpg",
  "Valor1": "1,99",
  "Valor2": "0,99"},
  
  {"ID":"2",
  "Nome":"Farinha Mandioca Orgânica Mãe Terra Torrada 500g",
  "Capa":"/assets/imgs/produto_002.jpg",
  "Valor1":"3,00",
  "Valor2":"1,93"},

  {"ID":"3",
  "Nome":"Milho Para Pipoca Fonte Nova Premium 400g",
  "Capa":"/assets/imgs/produto_003.jpg",
  "Valor1":"4,99",
  "Valor2":"3,99"}
];

const Produtos: React.FC = () => {

  const [searchText, setSearchText] = React.useState('');
  const [showModal, setShowModal] = React.useState(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Adicionar Produtos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonModal
          isOpen={showModal}
          swipeToClose={true}
          onDidDismiss={() => setShowModal(false)}>
          <p>Janela para inserir os produtos</p>
          <IonButton onClick={() => setShowModal(false)}>Fechar Janela</IonButton>
        </IonModal>
        <IonSearchbar placeholder="Digite para buscar" value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonButton onClick={() => setShowModal(true)} expand="full">
                <IonIcon icon={add}></IonIcon>
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton onClick={() => setShowModal(true)} expand="full">
                <IonIcon icon={search}></IonIcon>
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonItem>
          <IonLabel>Setor</IonLabel>
          <IonSelect value={"todos"} placeholder="Selecione" /*onIonChange={e => setGender(e.detail.value)}*/>
            <IonSelectOption value="todos">Todos</IonSelectOption>
            <IonSelectOption value="male">Male</IonSelectOption>
          </IonSelect>
        </IonItem>

        <IonItem>
          <IonLabel>Prateleira</IonLabel>
          <IonSelect value={"todos"} placeholder="Selecione" /*onIonChange={e => setGender(e.detail.value)}*/>
            <IonSelectOption value="todos">Todos</IonSelectOption>
            <IonSelectOption value="male">Male</IonSelectOption>
          </IonSelect>
        </IonItem>

        {listaProdutos.map((e, index) => { 
        return <IonCard key={index}>
          <IonGrid>
            <IonRow>
              <IonCol size="12" size-xs="3">
                <img className="imagi" src={e.Capa} alt={e.Nome}/>
              </IonCol>
              <IonCol size="12" size-xs="4">
                <IonItem>
                  <IonLabel color="danger" position="stacked">R$</IonLabel>
                  <IonInput required={true} value={e.Valor1}> </IonInput>
                </IonItem>
                <IonItem>
                  <IonLabel color="success" position="stacked">R$</IonLabel>
                  <IonInput required={true} value={e.Valor2}> </IonInput>
                </IonItem>
              </IonCol>
              <IonCol size="12" size-xs="5">
                <div className="divi">
                  {e.Nome}
                </div>
                <IonButton color="danger" expand="full">Remover <IonIcon icon={trash}></IonIcon> </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCard>
      })}
      </IonContent>
      <IonButton color="secondary" size="large" expand="full" routerLink="/passos/campanhas" >
        Próximo <IonIcon icon={chevronForwardOutline}></IonIcon>
      </IonButton>
    </IonPage>
  );
};

export default Produtos;
