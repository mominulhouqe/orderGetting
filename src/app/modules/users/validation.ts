import Joi from "joi";


const userDetailsValidationSchema = Joi.object({
    userId: Joi.number().required().messages({
      'any.required': 'User ID is required',
      'number.base': 'User ID must be a number',
    }),
    username: Joi.string().required().messages({
      'any.required': 'Username is required',
      'string.base': 'Username must be a string',
    }),
    password: Joi.string().required().messages({
      'any.required': 'Password is required',
      'string.base': 'Password must be a string',
    }),
    fullName: Joi.object({
      firstName: Joi.string().required().messages({
        'any.required': 'First name is required',
        'string.base': 'First name must be a string',
      }),
      lastName: Joi.string().required().messages({
        'any.required': 'Last name is required',
        'string.base': 'Last name must be a string',
      }),
    }),
    age: Joi.number().required().messages({
      'any.required': 'Age is required',
      'number.base': 'Age must be a number',
    }),
    email: Joi.string().email().required().messages({
      'any.required': 'Email is required',
      'string.email': 'Invalid email format',
    }),
    isActive: Joi.boolean().default(true),
    hobbies: Joi.array().items(Joi.string()).default([]),
    address: Joi.object({
      street: Joi.string().required().messages({
        'any.required': 'Street is required',
        'string.base': 'Street must be a string',
      }),
      city: Joi.string().required().messages({
        'any.required': 'City is required',
        'string.base': 'City must be a string',
      }),
      country: Joi.string().required().messages({
        'any.required': 'Country is required',
        'string.base': 'Country must be a string',
      }),
    }),
    orders: Joi.array().items(
      Joi.object({
        productName: Joi.string().required().messages({
          'any.required': 'Product name is required in the order',
          'string.base': 'Product name must be a string',
        }),
        price: Joi.number().required().messages({
          'any.required': 'Price is required in the order',
          'number.base': 'Price must be a number',
        }),
        quantity: Joi.number().required().messages({
          'any.required': 'Quantity is required in the order',
          'number.base': 'Quantity must be a number',
        }),
      })
    ),
  });

  export default userDetailsValidationSchema;