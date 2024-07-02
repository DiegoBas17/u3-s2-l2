import { Component } from "react";
import { Container } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

class Welcome extends Component {
  render() {
    return (
      <Container className="mt-4">
        <Alert variant="success">
          <Alert.Heading>Hey, Benvenuto in EpiBooks</Alert.Heading>
          <p>
            Benvenuto su EpiBooks, la tua biblioteca online dedicata alla
            scoperta di libri eccezionali. Esplora un vasto assortimento di
            titoli che spaziano dai bestseller più recenti alle opere classiche
            intramontabili. Con un interfaccia intuitiva e accattivante,
            EpiBooks ti offre la possibilità di cercare libri per titolo o
            genere preferito. Ogni libro è accompagnato da dettagliate
            recensioni degli utenti, sinossi esaustive e approfondimenti sugli
            autori, garantendo una scelta informativa e coinvolgente. Crea liste
            di lettura personalizzate, segna i tuoi libri preferiti e condividi
            le tue opinioni con una vivace comunità di lettori. Che tu sia alla
            ricerca di nuove storie avvincenti o desideri esplorare ambiti
            tematici diversi, EpiBooks è qui per arricchire il tuo percorso di
            lettura con esperienze uniche e memorabili.
          </p>
        </Alert>
      </Container>
    );
  }
}
export default Welcome;
