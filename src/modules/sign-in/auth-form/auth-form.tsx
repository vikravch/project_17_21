import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useForm, Controller, SubmitHandler, useFormState } from 'react-hook-form';
import { loginValidation , passwordValidation } from './validation';
import Checkbox from '@mui/material/Checkbox';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
// import { Link } from 'react-router-dom';
import './auth-form.css';


interface ISignInForm {
    login: string;
    password: string;
    remember: boolean;
}

export const AuthForm = () => {
    const {handleSubmit, control} = useForm<ISignInForm>();
    const {errors} = useFormState({
        control
    });
    const [showPassword, setShowPassword] = useState(false); 

    const onSubmit:SubmitHandler<ISignInForm> = (data) =>
     console.log(data);
    return (
        <div className='auth-form-right-side'>
            <div className="auth-form-title">
                <div className="auth-form-header">
                  <div className="auth-form-content">
                   <Typography variant="h4" component="div" >
                    Sign In
                   </Typography> 
                   </div>
                   </div>                                  
                   <Typography variant="subtitle1" component="div" 
                    gutterBottom={true} className="auth-form-subtitle" >
                     Don’t have an account yet?{" "}
                     <a  href="#" className="signUplink">
                  Sign up
                   </a>{" "}
                 </Typography>
                
            </div>
            <form className='auth-form-form' onSubmit={handleSubmit(onSubmit) }>
               <div className="form-in">
                 
                 <div className="form-input1">
                    <div className="content-input1">
                          <Controller 
                            control={control}
                            name="login"
                            rules={{required: 'The fields are required!'}}
                            render={({field}) => (
                              <TextField
                                label="Your username or email address"
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
                    </div>
                 </div>
                 <div className="form-input2">
                    <div className="content-input2">
                        <Controller
                              control={control}
                              name="password"
                              defaultValue=""
                              rules={passwordValidation}
                              render={({ field }) => (
                                <TextField
                                  label="Password"
                                  size="small"
                                  margin="normal"
                                  className="auth-form_input"
                                  fullWidth={true}
                                  type={showPassword ? 'text' : 'password'}
                                  onChange={(e) => field.onChange(e)}
                                  value={field.value}
                                  error={!!errors.password?.message}
                                  helperText={errors.password?.message}
                                    InputProps={{
                                     endAdornment: (
                                         <InputAdornment position="end">
                                           <IconButton
                                             onClick={() => setShowPassword(!showPassword)}
                                             edge="end" >      
                                                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                                            </IconButton>
                                           </InputAdornment>
                                        ),
                                        }}
                                />
                               )}
                        />                      
                    </div>
                 </div>              
                 <div className="option-form-sign-in">
                   <div className="sign-in-forgot-password">
                     <a className="sign-in-body" href="#">
                             Forgot password?  </a>
                   {/* <Link to="#" className="body1">
                     Forgot password?
                   </Link> */}
                   </div>
                      <div className="sign-in-checkbox">
                       <Controller
                        control={control}
                        name="remember"
                        defaultValue={false}
                        render={({ field }) => (
                        <>
                            <Checkbox
                            {...field}
                            className="sign-in-radio-button"
                            />
                            <label className="sign-in-remember-me">Remember me</label>
                        </>
                                    )}
                         />
                      </div>
                   </div>                   
                </div>                       
                <Button 
                    type="submit"
                    variant="contained"
                    fullWidth={ true}
                    disableElevation={true}
                    className="button"
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
                        }}
                      >Sign In
                </Button>                
            </form>
        </div>
    )
}