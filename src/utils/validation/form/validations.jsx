import React from 'react'


export const maxLength = max => value =>{
	return value && value.length > max ? `Допустимо не больше ${max} символов` : undefined
}

export const email = value =>{
	return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
	? 'Неправильно указан email'
	: undefined 
}

export const Input = ({
  input,
  type,
  meta: {error, touched}
}) => (
  <div>
    <div>
      <input {...input} type={type} className = {error && 'erorrInput'} />
    </div>
    <div>
    	{error && <span className = 'erorrInput'>{error}</span>}
    </div>
  </div>
)