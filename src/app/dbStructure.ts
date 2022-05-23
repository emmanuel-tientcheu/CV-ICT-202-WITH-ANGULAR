import { biographie } from "./biographieStructure";
import { competance } from "./competanceStructure";
import { experience } from "./experienceStructure";
import { formation }  from "./formationStructure";
import { icon } from "./iconStructure";
import { information } from "./informationStructure";

export interface db {
    information : information[],
    experience : experience[],
    formation : formation[],
    competance : competance[],
    biographie : biographie[],
    icon : icon[],
}