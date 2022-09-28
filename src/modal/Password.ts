export class Password {
    id: string;
    logo: string;
    updatedOn: Date | string;

    constructor(public service: string, public login: string, public password: string) {
        this.id = new Date().getTime().toString() + Math.random().toString();
        this.logo = `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${this.service}&size=128`;
        this.updatedOn = new Date();
    }

    static fromJSON(p: Password) {
        const password = new Password(p.service, p.login, p.password);
        password.id = p.id;
        password.logo = p.logo;
        password.updatedOn = p.updatedOn;
        return password;
    }

    update(service: string, login: string, password: string) {
        this.service = service;
        this.login = login;
        this.password = password;
        this.updatedOn = new Date();
        this.logo = `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${this.service}&size=128`;
    }

    getDate() {
        return new Date(this.updatedOn!).toLocaleDateString("en-IN", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    }

    getServiceName() {
        const t = this.service.split(".")[0];
        return t[0].toUpperCase() + t.slice(1);
    }
}
