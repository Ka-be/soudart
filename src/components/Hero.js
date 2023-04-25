import React from 'react';

const Hero = () => {
  return (
    <div>
      <div className="hero-banner">
      <video
        className="video"
        src="./video/welder.mpeg" // Remplacez par le chemin d'accès à votre vidéo
        autoPlay // Lecture automatique
        loop // Boucle de lecture
        muted // Lecture sans son (facultatif)
      >
        {/* Message de secours pour les navigateurs ne prenant pas en charge la balise vidéo */}
        Votre navigateur ne prend pas en charge la balise vidéo.
      </video>
    </div>
    </div>
  );
};

export default Hero;