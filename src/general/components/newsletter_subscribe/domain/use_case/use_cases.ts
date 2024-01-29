export type SendEmailUseCases = {
    sendEmail: (email:string) => Promise<string>
}