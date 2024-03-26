import './ShopTitle.scss';

interface ShopTitleProps {
  title?: string;
}

export const ShopTitle = ({
  title = 'TechnoHeart ®️ Magazin online de Gadget-uri în Moldova'
}: ShopTitleProps) => {
  return (
    <div className='shop-title'>
      <h1>
        {title}
      </h1>
    </div>
  )
}