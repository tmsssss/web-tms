import React, { useEffect } from "react";

const Mentions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="tucoco bisur container mt-5">
      <h1 className="text-center mt-5 pt-5 wow fadeInUp font-weight-light">
        Mentions légales
      </h1>
      <hr className="featurette-divider" />
      <h3>Conditions d'utilisation</h3>
      <p>
        Le site accessible par l'url suivant :{" "}
        <a target="_blank" href="https://www.tomsb.fr/">
          https://www.tomsb.fr/{" "}
        </a>
        est exploité dans le respect de la législation française. L'utilisation
        de ce site est régie par les présentes conditions générales. En
        utilisant le site, vous reconnaissez avoir pris connaissance de ces
        conditions et les avoir acceptées.
      </p>
      <h3>Propriété intellectuelle</h3>
      <p>
        Tout le contenu du présent site, incluant, de façon non limitative, les
        graphismes, images, textes, vidéos, animations, sons, logos, gifs et
        icônes ainsi que leur mise en forme sont la propriété exclusive de Tom
        Sabatier à l'exception des marques, logos ou contenus appartenant à
        d'autres sociétés partenaires ou auteurs. Toute reproduction,
        distribution, modification, adaptation, retransmission ou publication,
        même partielle, de ces différents éléments est strictement interdite
        sans l'accord exprès par écrit de Tom Sabatier. Cette représentation ou
        reproduction, par quelque procédé que ce soit, constitue une contrefaçon
        sanctionnée par les articles L.335-2 et suivants du Code de la propriété
        intellectuelle. Le non-respect de cette interdiction constitue une
        contrefaçon pouvant engager la responsabilité civile et pénale du
        contrefacteur. En outre, les propriétaires des Contenus copiés
        pourraient intenter une action en justice à votre encontre.
      </p>
      <p>
        Tom Sabatier est identiquement propriétaire des "droits des producteurs
        de bases de données" visés au Livre III, Titre IV, du Code de la
        Propriété Intellectuelle (loi n° 98-536 du 1er juillet 1998) relative
        aux droits d'auteur et aux bases de données.
      </p>
      <p>
        Pour toute demande d'autorisation ou d'information, veuillez nous
        contacter par email :{" "}
        <a target="_blank" href="mailto:tom.sbtr9@gmail.com">
          tom.sbtr9@gmail.com
        </a>
        . Des conditions spécifiques sont prévues pour la presse.
      </p>
      <h3>Hébergeur</h3>
      <p>
        Amazon Web Services <br /> 31 PL DES COROLLES <br /> 92400 COURBEVOIE{" "}
        <br />
        <a target="_blank" href="https://aws.amazon.com/fr/" target="_blank">
          https://aws.amazon.com/fr/
        </a>
      </p>
    </div>
  );
};

export default Mentions;
