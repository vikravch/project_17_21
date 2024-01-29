const REQUIRED_FIELD = 'The fields are required!'
export const loginValidation = {
    required:REQUIRED_FIELD,
    validate: (value: string) => {

        if (value.match(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i)){
            return 'Email entered incorrectly'
        }
   return true;
    }
}
