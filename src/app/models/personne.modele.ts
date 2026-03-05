export class Personne {
    private _nom: string;
    private _prenom: string;
    private _numero: string;

    constructor(nom: string, prenom: string, numero: string) {
        this._nom = nom;
        this._prenom = prenom;
        this._numero = numero;
    }

    get nom(): string {
        return this._nom;
    }

    set nom(valeur: string) {
        this._nom = valeur;
    }

    get prenom(): string {
        return this._prenom;
    }

    set prenom(valeur: string) {
        this._prenom = valeur;
    }

    get numero(): string {
        return this._numero;
    }

    set numero(valeur: string) {
        this._numero = valeur;
    }

    obtenirDetails(): string {
        return `${this.prenom} ${this.nom} (N° ${this.numero})`;
    }
}
