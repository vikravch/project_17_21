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
export const passwordValidation = {
   required: REQUIRED_FIELD,
   validate: (value: string) => {
     
    if(value.length <8) {
        return 'Password must be longer than 8 symbols!'
    } 
    if (!value.match(/[a-z]/) || !value.match(/[A-Z]/) || !value.match(/[0-9]/)) {
        return 'Password must be have more than one uppercase letter more than  one number and  more than one lowercase letter '}
    return true;
   }
}