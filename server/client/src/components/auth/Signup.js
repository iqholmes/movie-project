import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import styled from "styled-components";
import { signin } from "../../actions";

const userSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

const Signup = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(userSchema),
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const handleFormSubmit = (data) => {
    dispatch(
      signin(data, () => {
        history.push("/");
      })
    );
  };

  return (
    <SignInStyles>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="form-group">
          <label>Email</label>
          <input
            className="form-control"
            name="email"
            ref={register({ required: true })}
          ></input>
          {errors.email?.message}
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            className="form-control"
            name="password"
            ref={register({ required: true })}
          ></input>
          {errors.password?.message}
        </div>

        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </SignInStyles>
  );
};

export default Signup;

const SignInStyles = styled.div`
  margin-top: 40px;
`;