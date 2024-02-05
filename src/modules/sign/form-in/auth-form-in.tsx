import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {useForm, Controller, SubmitHandler, useFormState,} from "react-hook-form";
import { loginValidation, passwordValidation } from "./validation";
import Checkbox from "@mui/material/Checkbox";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import chair from '../../../images/pasteImage.webp';
// import { Link } from 'react-router-dom';
import "./auth-form-in.css";
// import Button123 from './auth-form-btn.module.css'

interface ISignInForm {
  login: string;
  password: string;
  remember: boolean;
}

export const AuthIn: React.FC = () => {
  const { handleSubmit, control } = useForm<ISignInForm>();
  const { errors } = useFormState({
    control,
  });
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit: SubmitHandler<ISignInForm> = (data) => console.log(data);
  return (
    <div className="auth-page">
      <div className="left-side-of-site">
         <div className="pasteImage">
            <img className='imgChair' src={chair} alt="photo chair" />
         </div> 
         <div className="legant-of-left-side">
            <p>3legant.</p>
         </div> 
        </div>
      <div className="right-side-of-site">
        <div className="auth-form-right-side">
          <div className="auth-form-title">
                <Typography variant="h4" component="div">
                  Sign In
                </Typography>
                <Typography
              variant="subtitle1"
              component="div"
              gutterBottom={true}
              className="auth-form-subtitle"
                >
              Don’t have an account yet?{" "}
              <a href="/signup" className="signUplink">
                Sign up
              </a>{" "}
            </Typography>
          </div>
          <form className="auth-form-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-in">
                  <Controller
                    control={control}
                    name="login"
                    rules={loginValidation}
                    render={({ field }) => (
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
                        type={showPassword ? "text" : "password"}
                        onChange={(e) => field.onChange(e)}
                        value={field.value}
                        error={!!errors.password?.message}
                        helperText={errors.password?.message}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={() => setShowPassword(!showPassword)}
                                edge="end"
                              >
                                {showPassword ? (
                                  <AiOutlineEyeInvisible />
                                ) : (
                                  <AiOutlineEye />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    )}
                  />
                <div className="option-form-sign-in">
                  <Controller
                    control={control}
                    name="remember"
                    defaultValue={false}
                    render={({ field }) => (
                      <>
                        <Checkbox {...field} className="sign-in-radio-button" />
                        <label className="sign-in-remember-me">
                          Remember me
                        </label>
                      </>
                    )}
                  />
                  <a className="sign-in-body" href="/forgot">
                    Forgot password?{" "}
                  </a>
                  {/* <Link to="#" className="body1">
                     Forgot password?
                   </Link> */}
                
              </div>
            
            <Button
              type="submit"
              variant="contained"
              fullWidth={true}
              disableElevation={true}
              sx={{
                background: "#141718",
                borderRadius: "8px",
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "28px",
                textAlign: "center",
                letterSpacing: "-0.4px",
                color: "#FFFFFF",
                marginTop: 2,
              }}
            >
              Sign In
            </Button>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export * from "./auth-form-in";
