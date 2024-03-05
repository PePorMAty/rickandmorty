import { IInitialStateLocationData } from "../types";
import boobWorld from "../assets/locations/boobWorld.jpg";
import gazorpazorp from "../assets/locations/gazorpazorp.png";
import alphaCentaurus from "../assets/locations/alphaCentaurus.png";
import dimensionC137 from "../assets/locations/dimensionC137.png";
import jerryboree from "../assets/locations/jerryboree.png";
import primeDimension from "../assets/locations/primeDimension.png";
import onACobPlanet from "../assets/locations/onACobPlanet.png";
import theCitadel from "../assets/locations/theCitadel.png";

export const initialLocationData: IInitialStateLocationData = {
  locations: [
    {
      id: 1,
      name: "Boob World",
      image: boobWorld,
      type: "World",
      description: `Boob World is a world mentioned by Morty in "Rattlestar Ricklactica".`,
    },
    {
      id: 2,
      name: "Gazorpazorp",
      image: gazorpazorp,
      type: "Planet",
      dimension: "Dimension C-131",
      description: `Gazorpazorp is the homeworld of the male and female Gazorpians.`,
    },
    {
      id: 3,
      name: "On a Cob Planet",
      image: onACobPlanet,
      type: "Planet",
      dimension: "Dimension C-131",
      description: `The On a Cob Planet is a distant planet in the Milky Way Galaxy that looks very similar to Earth. It appeared in the episode "The Wedding Squanchers", where the Smith Family moved, having to avoid capture by the Galactic Federation.`,
    },
    {
      id: 4,
      name: "Alpha Centaurus",
      image: alphaCentaurus,
      type: "Planet",
      dimension: "Parmesan dimension",
      description: `Alpha Centaurus is a planet featured in JuRicksic Mort. Like many other planets, it was once inhabited by Dinosaurs, who later went extinct due to a meteor impact.`,
    },
    {
      id: 5,
      name: "Jerryboree",
      image: jerryboree,
      type: "House",
      dimension: "Furp Rock",
      description: `The Jerryboree is an interdimensional daycare used to look after various versions of Jerry Smith from the multiverse.`,
    },
    {
      id: 6,
      name: "Prime Dimension",
      image: primeDimension,
      type: "Dimension",
      dimension: "Dimension Prime",
      description: `The Prime Dimension[1], (also known as the Cronenberged Dimension or Dimension Prime) is the original of many universes in the multiverse, previously on the Central Finite Curve, and the universe where the titular Morty comes from.`,
    },
    {
      id: 7,
      name: "Dimension C-137",
      image: dimensionC137,
      type: "Dimension",
      dimension: "Dimension C-137",
      description: `Dimension C-137 is one of the many universes in the multiverse, and the original universe where the mainstream Rick was born and grew up. This is one of many dimensions where Rick's wife Diane and daughter Beth were killed when Beth was a child, and as a result, Summer and Morty never existed. Before it was revealed that the Rick and Morty we follow in the show are each from different dimensions, "Dimension C-137" was thought, including by Morty himself, to refer to the Prime dimension where our Morty originated and the first six episodes of the TV series took place.`,
    },
    {
      id: 8,
      name: "The Citadel",
      image: theCitadel,
      type: "Construction",
      dimension: "Dimension C-131",
      description: `The Citadel, originally known as The Citadel of Ricks, was a trans-dimensional citadel city-state inhabited entirely by Ricks and Mortys from across infinite realities. The Citadel was originally located in an unknown dimension, but it was teleported by Rick C-137 directly to the main prison of the Galactic Federation from Dimension C-131 in "The Rickshank Rickdemption", which caused both buildings to collapse. Ricks and Mortys decided to stay in Dimension C-131, rebuilding the Citadel again as shown in "The Ricklantis Mixup", proof that the Citadel remained in C-131's shown in "Solaricks", because Space Beth found Rick and Morty flying at the Mortytown station in space, which separated after the destruction of the Citadel by the Evil Morty in "Rickmurai Jack", and they have returned to their version of Earth. The Citadel was formed as a secret entity serving to protect Ricks and Mortys from a multitude of accumulated enemies within the Galaxy, including Rick C-137 and the Galactic Federation. Prior to the election of President Morty The Citadel was controlled by the Council of Ricks and, after the partial destruction of The Citadel during a conflict with the Federation, the secretive Shadow Council.`,
    },
  ],
  currentLocation: {},
};
