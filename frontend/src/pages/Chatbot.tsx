import { IonButton, IonIcon, IonItem, IonLabel, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonThumbnail, IonCheckbox } from '@ionic/react';
import { chevronForwardOutline, refresh } from 'ionicons/icons';
import React from 'react';
import './Chatbot.css';

const nomesAleatorios = function () {
  let array = ["Zacknozes", "Tadeu", "Betinho", "Luccax", "Maria", "Borba", "Franca", "Campelo", "Monjardim", "Maciel", "Bouça", "Garcia", "Sobral", "Figueiró", "Gusmão", "Alves", "Chousa", "Vasconcelos", "Galvão", "Coelho", "Figueiroa", "Cotrim", "Grangeia", "Valverde", "Tedim", "Malafaia", "Vale", "Lages", "Gouveia", "Beiriz", "Baptista", "Protásio", "Peseiro", "Dias", "Simões", "Fontes", "Casqueira", "Torquato", "Linhares", "Murteira", "Carreiro", "Albuquerque", "Ramos", "Colares", "Guedes", "Lamenha", "Soverosa", "Cardim", "Tomé", "Adarga", "Caetano", "Vila-Chã", "Osório", "Igrejas", "Bezerril", "Cadaval", "Macedo", "Vilar", "Guterres", "Rodrigues", "Olivares", "Severo", "Vital", "Pequeno", "Barroso", "Lage", "Bessa", "Figueiredo", "Porto", "Antunes", "Resende", "Varanda", "Penteado", "Inês", "Canedo", "Fernandes", "Chainho", "Frazão", "Durão", "Sá", "Tuna", "Picanço", "Caires", "Aguiar", "Covilhã", "Rua", "Teixeira", "Chagas", "Fiúza", "Temes", "Tristão", "Rebelo", "Guerra", "Frias", "Curvelo", "Robalinho", "Monteiro", "Negrão", "Seixas", "Vilariça", "Antas", "Arouca", "Caniça", "Dorneles", "Gravato", "Chousa", "Mantas", "Valério", "Laureano", "Catela", "Duarte", "Fagundes", "Lousado", "Anhaia", "Cambezes", "Anjos", "Bessa", "Leão", "Barrela", "Batata", "Muxagata", "Taborda", "Lameira", "Rodrigues", "Charneca", "Carromeu", "Taveiros", "Santana", "Cunha", "Galante", "Mexia", "Cerqueira", "Garrau", "Homem", "Castelhano", "Graça", "Dutra", "Aires", "Sequeira", "Coelho", "Gabeira", "Doutis", "Azeredo", "Barateiro", "Serralheiro", "Pimentel", "Alves", "Cancela", "Taveira", "Outeiro", "Sampaio", "Temes", "Robalinho", "Malta", "Holanda", "Mont'Alverne", "Belém", "Morgado", "Gil", "Carvalhoso", "Cardoso", "Santarém", "Murteira", "Reis", "Fragoso", "Avelar", "Inês", "Meira", "Varela", "Prestes", "Guedes", "Velasques", "Girão", "Barra", "Pinho", "Albuquerque", "Bicudo", "Queiroga", "Teles", "Furquim", "Brásio", "Castanho", "Borges", "Barcelos", "Varanda", "Zagalo", "Farinha", "Oliveira", "Pescada", "Portugal", "Álvaro", "Bonito", "Abrantes", "Mendonça", "Balsemão", "Arantes", "Melo", "Xavier", "Figueiroa", "Mangueira", "Aquino", "Poças", "Vaz", "Lameirinhas", "Natal", "Mirandela", "Regodeiro", "Lourenço", "Peralta", "Santos", "Fernandes", "Vale", "Cabeça", "Caiado", "Narvais", "Prado", "Godoi", "Abreu", "Ribas", "Aires", "Vaz", "Cunha", "Penha", "Carrasco", "Quaresma", "Natal", "Malheiro", "Colares", "Albernaz", "Doutis", "Maciel", "Saldanha", "Vidigal", "Pontes", "Valverde", "Boaventura", "Álvaro", "Quinteiro", "Silva", "Botelho", "Ramos", "Palha", "Esteves", "Rei", "Fogaça", "Braga", "Mexia", "Cachão", "Carlos", "Alves", "Alcoforado", "Andrade", "Cardim", "Vilariça", "Ferreira", "Franco", "Hernandes", "Vilante", "Barreira", "Sandinha", "Soares", "Brites", "Paulos", "Araújo", "Mourato", "Vilaverde", "Uchoa", "Regalado", "Camargo", "Charneca", "Zagalo", "Cruz", "Barrocas", "Prestes", "Carvalheiro", "Mendes", "Madeira", "Meira", "Gouveia", "Marins", "Brásio", "Barateiro", "Nascimento", "Malho", "Lousada", "Bingre", "Milheiro", "Malta", "Negrão", "Goulart", "Mateus", "Keil", "Lampreia", "Madruga", "Vasconcelos", "Jamandas", "Barrico", "Fialho", "Cortesão", "Toscano", "Garcez", "Dinis", "Lousado", "Frota", "Parracho"];
  let indice_atual = array.length, valor_temporario, indice_aleatorio;
  while (0 !== indice_atual) {
    indice_aleatorio = Math.floor(Math.random() * indice_atual);
    indice_atual -= 1;
    valor_temporario = array[indice_atual];
    array[indice_atual] = array[indice_aleatorio];
    array[indice_aleatorio] = valor_temporario;
  }
  return array.slice(0, 5);
}

const Chatbot: React.FC = () => {
  const [nomes, setNomes] = React.useState(nomesAleatorios());
  return (
    <IonPage id="Chatbot">
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Chatbot</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h3 className="ion-padding">Escolha um nome para o seu Zenvia BOT</h3>
        <img alt="Imagem cartoonizada de interação entre humano e robô" src="/assets/imgs/chatbot.jpg" />
        <p className="ion-padding">O Chatbot de Whatsapp da Zenvia vai auxiliar seus clientes ao acompanhar os pedidos, responder dúvidas sobre o site, ou até mesmo fazer os pedidos diretamente do Whatsapp!</p>
        <IonButton expand="block" onClick={e => { setNomes(nomesAleatorios()) }}>Sortear Mais Robôs &nbsp; <IonIcon icon={refresh}></IonIcon></IonButton>
        {nomes.map((e, index) => {
          return <IonItem key={index}>
            <IonThumbnail slot="start">
              <img alt="Imagem de robô gerada pelo computador" src={"https://robohash.org/" + e} />
            </IonThumbnail>
            <IonLabel>{e}</IonLabel>
            <IonCheckbox slot="end" checked={false} color="dark" />
          </IonItem>
        })}
        <br />
        <br />
      </IonContent>
      <IonButton color="secondary" size="large" expand="full" routerLink="/passos/finalizacao" >
        Próximo <IonIcon icon={chevronForwardOutline}></IonIcon>
      </IonButton>
    </IonPage>
  );
};

export default Chatbot;