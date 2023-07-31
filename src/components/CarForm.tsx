import { useSubmit } from "react-router-dom"
import Button from "./Button"
import Input from "./Input"

import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseEmail, chooseMake, chooseModel, chooseYear, chooseColor } from "../redux/slices/RootSlice"

interface CarFormProps {
  id?: string[];
  onClose: () => void;
}

const ContactForm = ( props:CarFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${ data.make } ${ props.id }`)
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()
    } else {
      dispatch(chooseEmail(data.email));
      dispatch(chooseMake(data.make));
      dispatch(chooseModel(data.model));
      dispatch(chooseColor(data.color));
      dispatch(chooseYear(data.year));

      server_calls.create(store.getState())
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()

      props.onClose();
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Email</label>
          <Input {...register('Email')} name='email' placeholder="Email" />
        </div>
        <div>
          <label htmlFor="Make">Make</label>
          <Input {...register('make')} name='make' placeholder="Make" />
        </div>
        <div>
          <label htmlFor="Model">Model</label>
          <Input {...register('model')} name='model' placeholder="Model" />
        </div>
        <div>
          <label htmlFor="Year">Year</label>
          <Input {...register('Year')} name='year' placeholder="Year" />
        </div>
        <div>
          <label htmlFor="color">Color</label>
          <Input {...register('color')} name='color' placeholder="color" />
        </div>
        <div className="flex p-1">
          <Button className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white">
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm