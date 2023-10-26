import React from 'react';
import { Formik, Field, Form } from 'formik';
import { SearchBar } from './Searchbar.styled';

export const Searchbar = ({ onSearch }) => {
  return (
    <SearchBar className="searchbar">
      <Formik
        initialValues={{
          filter: '',
        }}
        onSubmit={values => {
          onSearch(values);
        }}
      >
        <Form>
          <button type="submit">Search</button>
          <label htmlFor="filter">
            <Field
              name="filter"
              autoFocus
              placeholder="Search images and photos"
            />
          </label>
        </Form>
      </Formik>
    </SearchBar>
  );
};
