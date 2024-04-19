import { CategoriesItem } from './CategoriesItem';
import { NoData } from '../NoData/NoData';
import { CategoriesData } from '@/store/store.interface';

import './Categories.scss';

interface CategoriesProps {
  categories: CategoriesData[];
}

export const Categories = ({ categories }: CategoriesProps) => {
  // const [
  //   categories,
  //   getCategories,
  //   loading,
  //   error,
  // ] = useCategories((state) => [
  //   state.categories,
  //   state.getCategories,
  //   state.loading,
  //   state.error
  // ]);

  // useEffect(() => {
  //   getCategories();
  // }, []);

  return (
    <div className="categories">
      {categories?.length > 0 && (
        <div className="categories--wrapper">
          {categories.map((category) => (
            <CategoriesItem category={category} key={category.id} />
          ))}
        </div>
      )}

      {/* {(!categories?.length) && (
        <NoData />
      )} */}

      {/* {loading && <Loading />} */}

      {/* {error && <ShowErrorMessage errorMessage={error}/>} */}
    </div>
  )
}