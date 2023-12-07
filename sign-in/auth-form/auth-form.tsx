import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm, Controller, SubmitHandler, useFormState } from 'react-hook-form';
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri';
import { loginValidation , passwordValidation } from './validation';
import './auth-form.css';
import Eye from '../auth-page/img/eye.svg'

interface ISignInForm {
    login: string;
    password: string;
}

export const AuthForm = () => {
    const {handleSubmit, control} = useForm<ISignInForm>();
    const {errors} = useFormState({
        control
    });
    const onSubmit:SubmitHandler<ISignInForm> = (data) =>
     console.log(data);
    return (
        <div className='auth-form'>
            <div className="title">
                <div className="header">
                  <div className="content">
                   <Typography variant="h4" component="div" >
                    Sign In
                   </Typography> 
                   </div>
                   </div>                                  
                   <Typography variant="subtitle1" component="div" 
                    gutterBottom={true} className="auth-form_subtitle" >
                     Don’t have an account yet?{" "}
                     <a  href="#" className="signUplink">
                  Sign up
                   </a>{" "}
                 </Typography>
                
            </div>
            <form className='auth-form_form' onSubmit={handleSubmit(onSubmit) }>
               
                 
                   <div className="formInput1">
                       <div className="contentInput1">
                      
                        <Controller 
                            control={control}
                            name="login"
                            rules={{required: 'Обязательно для заполнения'}}
                            render={({field}) => (
                                    <TextField
                                label="Your username or email address"
                                size="small"
                                margin="normal"
                                style={{border: 'none',outline: 'none'}}
                                className="auth-form_input"
                                fullWidth={true}
                                onChange={(e) => field.onChange(e)}
                                value={field.value}
                                error={!!errors.login?.message}
                                helperText={errors.login?.message}
                                />
                            )}
                            />
                        
                      
                       </div>
                   </div>
                 <div className="formInput2">
                    <div className="contentInput2">
                        
                            <a href='#' className="eye-icon"><img className='vector' src={Eye} alt='eye'/></a> 
                                    <Controller 
                                        control={control}
                                        name="password"
                                        rules={passwordValidation}
                                        render={({field}) => (
                                                <TextField
                                            label="Password"
                                            size="small"
                                            margin="normal"
                                            className="auth-form_input"
                                            fullWidth={true}
                                            onChange={(e) => field.onChange(e)}
                                            value={field.value}
                                            error={!!errors.password?.message}
                                            helperText={errors.password?.message}
                                            style={{border: 'none',outline: 'none',}}/>
                                            )}
                                    />
                        
                    </div>
              
                  
                   
                    <div className="option">
                          <div className="forgotPassword">
                          <a   className="body1" href="#">
                             Forgot password?  </a>
                     </div>
                          <div className="checkbox">                                 
                            <input
                            //   name={'remember' }
                            //   checked={ }
                            //   onChange={ }
                            className="radioButton"
                            type="checkbox"
                            />
                          <label className="rememberMe">  Remember me
                          </label>
                         </div>
                    </div>
                 </div>
         
                  
                    <Button 
                    type="submit"
                    variant="contained"
                    fullWidth={ true}
                    disableElevation={true}
                    style={{backgroundColor: '#141718'}}
                    className="button"
                    sx={{
                        marginTop:2
                    }}
                  
                  >Sign In</Button>
                
            </form>
        </div>
    )
}