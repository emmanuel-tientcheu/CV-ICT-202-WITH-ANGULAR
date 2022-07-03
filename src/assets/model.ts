export enum CategorieTypes{
	PROGRAMMATION = "Programmation",
	WEB_DESIGN = "web_design",
	MANAGER = "manager"
}

export interface ICompetence{
	id?:string,
	titre:string,
	niveau:number,
	dateDebut:Date,
	dateFin:Date,
	categorie:CategorieTypes
}

export interface IRealisation{
	id?:string,
	desc:string,
	categorie:CategorieTypes
}

export interface ICertification{
	id?:string,
	titre:string,
	organisme:string,
	categorie:CategorieTypes

}

export interface IFormation{
	id?:string,
	diplome:string,
	ecole:string,
	periode:string,
	categorie:CategorieTypes
}

export interface IExperience{
	id?:string,
	poste:string,
	entreprise:string,
	periode:string,
	detail?:string,
	country:string
}

export interface ILangage{
	id?:string,
	nom:string,
	niveau:number
}

export interface ILoisir{
	id?:string,
	nom:string
}

export interface ILien{
	id?:string,
	titre:string,
	url:string
}

export interface IEmail{
	id?:string,
	email:string
}

export interface IContact{
	id?:string,
	contact:string
}

export default interface IUser{
	email:string,
	password:string,
	nom?:string,
	prenom?:string,
	dateNaissance?:Date,
	site?:string,
	photo?:string,
	biographie?:string;
}

export interface ICv{
	user:IUser,
	contacts:IContact[],
	emails:IEmail[],
	liens:ILien[],
	loisirs:ILoisir[],
	langages:ILangage[],
	experiences:IExperience[],
	formations:IFormation[],
	certifications?:ICertification[],
	competences:ICompetence[],
	realisations?:IRealisation[]
}
