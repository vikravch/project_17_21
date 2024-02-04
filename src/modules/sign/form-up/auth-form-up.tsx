import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useForm, Controller, SubmitHandler, useFormState } from 'react-hook-form';
import { loginValidation , passwordValidation , yourNameValidation, userValidation} from './validationup';
import Checkbox from '@mui/material/Checkbox';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
// import { Link } from 'react-router-dom';
import chair from '../../../images/pasteImage.webp';
import './auth-form-up.css';


interface ISignInForm {
  yourName: string;
  userName: string;
  login: string;
  password: string;
  remember: boolean;
}

export const AuthUp: React.FC  = () => {
  const { handleSubmit, control } = useForm<ISignInForm>();
  const { errors } = useFormState({
    control
  });
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit: SubmitHandler<ISignInForm> = (data) => {
    console.log(data);
  };
  return (
    <div className="auth-page-up">
            <div className="left-side-of-site-up">
            <div className="pasteImageUp">
               <img className='imgChairUp' src={chair} alt="photo chair" />
            </div> 
            <div className="legant-of-left-side-up">
              <p>3legant.</p>
            </div> 
            </div>
            <div className="right-side-of-site-up">
               <div className='auth-form-right-side-up'>
                 <div className="auth-form-title-up">
                    <Typography variant="h4" component="div" >
                    Sign up
                    </Typography> 
                    <Typography variant="subtitle2" 
                      component="div" 
                      gutterBottom={true} 
                      className="auth-form-subtitle-up" >
                      Already have an account? {" "}
                       <a  href="/signin" className="signInlink">
                       Sign in
                       </a>{" "}
                    </Typography>
                 </div>                                  
                
              
          
          <form className='auth-form-form-up' onSubmit={handleSubmit(onSubmit) }>
             <div className="form-up">
                    <Controller 
                          control={control}
                          name="yourName"
                          rules={yourNameValidation}
                          render={({field}) => (
                                  <TextField
                              label="Your name"
                              size="small"
                               margin="normal"
                              fullWidth={true}
                              onChange={(e) => field.onChange(e)}
                              value={field.value}
                              error={!!errors.yourName?.message}
                              helperText={errors.yourName?.message}
                              sx={{ 
                                left: '0px',
                                fontFamily: 'Inter',
                                fontStyle: 'normal',
                                fontWeight: 400,
                                fontSize: '16px',
                                lineHeight: '26px',
                                color: '#6C7275',
                                border: '1px solid white', 
                              }}                    
                        />
                          )}
                      />
                      <Controller 
                          control={control}
                          name="userName"
                          rules={userValidation}
                          render={({field}) => (
                                  <TextField
                              label="Username"
                              size="small"
                              margin="normal"
                              fullWidth={true}
                              onChange={(e) => field.onChange(e)}
                              value={field.value}
                              error={!!errors.userName?.message}
                              helperText={errors.userName?.message}
                              />
                          )}
                      />                  
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
                   <div className="option-form-sign-up">
                      <Controller
                          control={control}
                          name="remember"
                          defaultValue={false}
                          render={({ field }) => (
                              <Checkbox
                              className="sign-up-radio-button"
                              {...field}
                              checked={field.value}
                              />
                          )}
                          />
                           <label className="sign-up-agree">
                            I agree with <a className='sign-up-linkP' href='#'> Privacy Policy</a> and <a className='linkpp' href='#'>Terms of Use</a>
                          </label>
                   </div>                  
              
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
                  }}            
                >Sign Up
                </Button>

            </div>   
          </form>
      </div>
      </div>
      </div>
  )
}

export * from './auth-form-up';