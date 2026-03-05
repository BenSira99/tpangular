export class Personne {
    constructor(
        public nom: string,
        public prenom: string,
        public numero: string
    ) { }

    obtenirDetails(): string {
        return `${this.prenom} ${this.nom} (N° ${this.numero})`;
    }
}
