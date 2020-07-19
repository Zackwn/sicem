import { IonFab, IonFabButton, IonButton, IonIcon, IonModal, IonSelect, IonSelectOption, IonCol, IonRow, IonGrid, IonCard, IonImg, IonInput, IonItem, IonThumbnail, IonLabel, IonSearchbar, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCheckbox, IonCardHeader, IonCardTitle } from '@ionic/react';
import { chevronForwardOutline, add, search, trash } from 'ionicons/icons'
import React from 'react';
import './Produtos.css';
import { Button } from '@material-ui/core';

const Produtos: React.FC = () => {

  const [searchText, setSearchText] = React.useState('');
  const [showModal, setShowModal] = React.useState(false);
  const [listaProdutos, setListaProdutos] = React.useState([
    {"ID":"1",
    "Nome":"Tapioca Rocha Goma Hidratada Porção Certa 70g",
    "Capa":"https://www.bistek.com.br/media/catalog/product/cache/894d7a2e183d8da4095b1bf308cf0ba7/1/8/1821865_1.jpg",
    "Valor1": "1,99",
    "Valor2": "0,99"},
    
    {"ID":"2",
    "Nome":"Farinha Mandioca Orgânica Mãe Terra Torrada 500g",
    "Capa":"https://www.bistek.com.br/media/catalog/product/cache/f66bb40a841adb26d4cc38348e9dfc61/1/9/1908162_1.jpg",
    "Valor1":"3,00",
    "Valor2":"1,93"},

    {"ID":"3",
    "Nome":"Milho Para Pipoca Fonte Nova Premium 400g",
    "Capa":"https://www.bistek.com.br/media/catalog/product/cache/894d7a2e183d8da4095b1bf308cf0ba7/1/6/1655116.jpg",
    "Valor1":"4,99",
    "Valor2":"3,99"}
  ]);

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
          //cssClass='my-custom-class'
          swipeToClose={true}
          //presentingElement={pageRef.current}
          onDidDismiss={() => setShowModal(false)}>
          <p>This is modal content</p>
          <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
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
                <img className="imagi" src={e.Capa} />
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
