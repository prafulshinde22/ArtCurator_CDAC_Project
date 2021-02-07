export class UpdatePasswordRequest {
    id: number = 0;
    oldPassword: string = "";
    newPassword: string = "";

    constructor(id: number, oldPassword: string, newPassword: string) {
        this.id = id;
        this.oldPassword = oldPassword;
        this.newPassword = newPassword;
    }
}