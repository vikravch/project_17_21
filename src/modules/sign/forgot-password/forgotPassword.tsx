import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm, Controller, SubmitHandler, useFormState } from 'react-hook-form';
import { loginValidation } from './validationForgot';
// import { Link } from 'react-router-dom';
import chair from '../../../images/pasteImage.webp';
import './forgot.css';
interface ISignInForm {
    login: string;
}

export const ForgotPassword: React.FC = () => { 
    const {handleSubmit, control} = useForm<ISignInForm>();
    const {errors} = useFormState({
        control
    });

    const onSubmit:SubmitHandler<ISignInForm> = (data) =>
    console.log(data);
    return (
        <div className="auth-page-for">
             <div className="left-side-of-site-for">
                 <div className="pasteImageFor">
                   <img className='imgChairFor' src={chair} alt="photo chair" />
                  </div> 
                  <div className="legant-of-left-side-for">
                     <p>3legant.</p>
                   </div> 
             </div>
             <div className="right-side-of-site-for">
               <div className='auth-form-right-side-for'>
                    <div className="auth-form-title-for">
                         <Typography variant="h3" component="div" >
                              Forgot password
                         </Typography>            
                         <Typography variant="subtitle1" component="div" 
                                       gutterBottom={true} className="auth-form-subtitle-for" >
                                        Do you have an account ?{" "}
                                         <a  href="/signin" className="signInlink">
                                          Sign In
                                         </a>{" "}
                         </Typography>
                    </div>
                 <form className="auth-form-form-for" onSubmit={handleSubmit(onSubmit)}> 
                    <div className="form-for">                 
                          <Controller 
                                                control={control}
                                                name="login"
                                                rules={loginValidation}
                                                render={({field}) => (
                                                  <TextField
                                                    label="Email address"
                                                    size="small"
                                                    margin="normal"
                                                    fullWidth={true}
                                                    onChange={(e) => field.onChange(e)}
                                                    value={field.value}
                                                    error={!!errors.login?.message}
                                                    helperText={errors.login?.message}
                                                  />
                                                )}
                          />                     
                    
                     <Button 
                        type="submit"
                        variant="contained"
                        fullWidth={ true}
                        disableElevation={true}
                        sx={{
                            background: '#141718',
                            borderRadius: '8px',
                            fontFamily: 'Inter',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            fontSize: '16px',
                            lineHeight: '28px',
                            textAlign: 'center',
                            letterSpacing: '-0.4px',
                            color: '#FFFFFF',
                            marginTop:2   
                            }} >
                             Send mail
                        </Button> 
                    </div>           
                 </form>  
               </div>
             </div>
        </div>
        );
};
export * from "./forgotPassword";