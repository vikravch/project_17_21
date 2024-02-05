const REQUIRED_FIELD = 'The fields are required!'

export const loginValidation = {
    required:REQUIRED_FIELD,
    validate: (value: string) => {

        if (!value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
            return 'Email entered incorrectly'
        }
        if (value.length>50) {
            return 'Mail too long';}
   return true;
    }
}