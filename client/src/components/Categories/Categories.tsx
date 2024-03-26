"use client";

import { useEffect } from 'react';
import { useCategories } from '@/store/store';
import { CategoriesItem } from './CategoriesItem';
import { Loading } from '../Loading/Loading';
import { ShowErrorMessage } from '../ShowErrorMessage/ShowErrorMessage';

import './Categories.scss';

export const Categories = () => {
  const [
    categories,
    getCategories,
    loading,
    error,
  ] = useCategories((state) => [
    state.categories,
    state.getCategories,
    state.loading,
    state.error
  ]);

  useEffect(() => {
    getCategories();
  }, []);

  console.log(loading, 'loading');
  return (
    <div className="categories">
      {loading && <Loading />}
      
      {error && <ShowErrorMessage errorMessage={error}/>}
      
      {categories.length > 0 && (
        <div className="categories--wrapper">
          {categories &&
            categories.map((category) => (
              <CategoriesItem category={category} key={category.id} />
            ))
          }
        </div>
      )}
    </div>
  )
}