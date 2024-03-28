"use client";

import { useEffect } from 'react';
import { useCategories } from '@/store/store';
import { CategoriesItem } from './CategoriesItem';
import { Loading } from '../Loading/Loading';
import { ShowErrorMessage } from '../ShowErrorMessage/ShowErrorMessage';
import { NoData } from '../NoData/NoData';

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

  return (
    <div className="categories">
      {categories.length > 0 && (
        <div className="categories--wrapper">
          {categories.map((category) => (
            <CategoriesItem category={category} key={category.id} />
          ))}
        </div>
      )}

      {(categories?.length === 0 && !loading) && (
        <NoData />
      )}

      {/* {loading && <Loading />} */}

      {error && <ShowErrorMessage errorMessage={error}/>}
    </div>
  )
}