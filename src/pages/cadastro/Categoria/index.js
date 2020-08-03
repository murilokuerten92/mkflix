import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

export default function CadastroCategoria() {
  const valuesInitials = {
    name: '',
    description: '',
    color: '',
  };

  const [categories, setCategories] = useState([]);

  const [values, setValues] = useState(valuesInitials);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(event) {
    const { getAttribute, value } = event.target;

    setValue(
      getAttribute('name'),
      value,
    );
  }

  useEffect(() => {
    console.log('Hey Hey Brazil');

    const URL = 'http://localhost:8080/categories';

    fetch(URL).then(async (responsetheserver) => {
      const response = await responsetheserver.json();
      // we that create a new response of the your apllication
      setCategories([...response]);
    });

  /*  setTimeout(() => {
      setCategories([...categories,
        {
          id: 1,
          name: 'Front End',
          description: 'A category amazing',
          color: '#cbd1ff',
        },
        {
          id: 2,
          name: 'Back End',
          description: 'A category beautiful',
          color: '#cbd1ff',
        },
      ]);
    }, 4 * 1000); */
  }, []);

  return (
    <PageDefault>
      <h1>
        Register of the Category:
        {values.name}
      </h1>

      <form
        style={{ background: values.color }}
        onSubmit={function handleSubmit(e) {
          e.preventDefault();

          setCategories([...categories, values]);

          setValues(valuesInitials);
        }}
      >

        <FormField
          label="Name of the Category"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}

        />

        <FormField
          label="Name of the Description"
          type="textarea"
          name="description"
          value={values.description}
          onChange={handleChange}
        />

        <FormField
          label="Color"
          type="color"
          name="color"
          value={values.color}
          onChange={handleChange}

        />

        <Button type="submit">
          Save
        </Button>
      </form>

      {categories.length === 0 && (
      <div>
        ...loading
      </div>
      )}

      {categories.map((item) => (
        <ul>
          <li key={item.name}>
            {item.name}
          </li>
        </ul>
      ))}

      <Link to="/">
        Back to Home
      </Link>
    </PageDefault>
  );
}
