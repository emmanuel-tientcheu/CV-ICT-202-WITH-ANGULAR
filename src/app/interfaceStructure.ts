
import{Competance} from './interfaceCompetence';
import { Experience } from './interfaceExperience';
import {Formation} from './interfaceFormation';
import {Biographie} from './interfaceBiographie';
import {Icons} from './interfaceIcons';


export interface Structure {
    nom : string ;
    image : string ;
    experience : Experience [];
    formation : Formation [];
    competance : Competance [];
    biographie : Biographie [];
    icons : Icons [];

}