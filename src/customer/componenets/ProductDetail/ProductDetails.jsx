
import { useEffect, useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { Radio, RadioGroup } from '@headlessui/react'
import { Grid,Box,Rating, LinearProgress} from '@mui/material'
import ProductReviewCard from './ProductReviewCard'
import mens_kurta from '../../../Data/Men/men_kurta'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard'
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { findProducts, findProductsById } from '../../../store/product/Action'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { addItemToCart, createCartForUser, getItemToCart } from '../../../store/cart/Action'
const product = {
  name: 'Basic Tee 6-Pack',
  price: '$192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
      alt: 'Model wearing plain white basic tee.',
    },
  ],
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const ProductDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const productData = useSelector(state => state.CustomerProductReducer);
  const dispatch = useDispatch();
  useEffect(()=>{
 dispatch(findProductsById(params.productId))
  },[params.productId])
 

  // console.log(productData.product?.imageUrl, "product data");
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[2])
  const allreducer = useSelector(store=>store);
  const handleAddToCartItem = () =>{
    const reqData = {productId:params.productId,size:selectedSize.name};
    dispatch(addItemToCart(reqData))
    // .then(()=>{
    //   console.log(allreducer, "all reducers coming after adding cartitem to cart");
    //   
    //   })
    return navigate("/cart")
  } 

  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {product.name}
              </a>
            </li>
          </ol>
        </nav>
        <section className='grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10'>

        {/* Image gallery */}
        <div className="flex flex-col items-center">
          <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
            <img
              src={productData.product?.imageUrl}
              alt={productData.product?.title}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="flex flex-wrap space-x-5 justify-center">
          {product.images.map((image)=><div className="aspect-h-5 aspect-w-4 overflow-hidden rounded max-w-[5rem] max-h-[5rem]">
            <img
               src={productData.product?.imageUrl}
              alt={productData.product?.title}
              className="h-full w-full object-cover object-center"
            />
          </div>)}
          </div>
        </div>

        {/* Product info */}
        <div className="lg:col-span-1 maxt-auto max-w-2xl px-4 pv-16 sm:px-4 lg:max-w-7xl lg:px-8 lg:pb-24 ">
          <div className="lg:col-span-2 ">
            <h1 className='text-lg lg:text-xl font-semibold  text-gray-900'>{productData.product?.brand}</h1>
            <h1 className="text-lg lg:text-xl font-semibold  text-gray-900 sm:text-3xl opacity-60 pt-1">{productData.product?.title}</h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <div className='flex space-x-5 items-center text-lg lg:text-xl text-gray-600 mt-6'>
             <p className='font-semibold'>{<CurrencyRupeeIcon/>}{productData.product?.price}</p>
           <p className='opacity-50 line-through'>{<CurrencyRupeeIcon/>}{productData.product?.discountedPrice}</p>
            <p className='font-semibold text-green-600'>{productData.product?.discountedPercent}% off</p> 
            </div>
            {/* Reviews */}
            <div className="mt-6">
           <div className='flex items-center space-x-4'>
           <Rating name="read-only" value={4} readOnly />
            {/* <p className='opacity-50 text-sm'>{Product.ratings[0].rating}</p> */}
            {/* <p className='ml-3 font-medium text-sm text-indigo-500 hover:text-indigo-600'>{Product.reviews[0].reviews}</p> */}
           </div>
            </div>

            <form className="mt-10">
              {/* Colors */}
              <div>
                <h3 className="text-sm font-medium text-gray-900">Color</h3>

                <fieldset aria-label="Choose a color" className="mt-4">
                  <RadioGroup value={selectedColor} onChange={setSelectedColor} className="flex items-center space-x-3">
                    {product.colors.map((color) => (
                      <Radio
                        key={color.name}
                        value={color}
                        aria-label={color.name}
                        className={({ focus, checked }) =>
                          classNames(
                            color.selectedClass,
                            focus && checked ? 'ring ring-offset-1' : '',
                            !focus && checked ? 'ring-2' : '',
                            'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none',
                          )
                        }
                      >
                        <span
                          aria-hidden="true"
                          className={classNames(
                            color.class,
                            'h-8 w-8 rounded-full border border-black border-opacity-10',
                          )}
                        />
                      </Radio>
                    ))}
                  </RadioGroup>
                </fieldset>
              </div>

              {/* Sizes */}
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    Size guide
                  </a>
                </div>

                <fieldset aria-label="Choose a size" className="mt-4">
                  <RadioGroup
                    value={selectedSize}
                    onChange={setSelectedSize}
                    className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
                  >
                    {productData.product?.sizes.map((size) => (
                      <Radio
                        key={size.name}
                        value={size}
                        disabled={!size.quantity }
                        className={({ focus }) =>
                          classNames(
                            size.quantity > 0
                              ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                              : 'cursor-not-allowed bg-gray-50 text-gray-200',
                            focus ? 'ring-2 ring-indigo-500' : '',
                            'group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6',
                          )
                        }
                      >
                        {({ checked, focus }) => (
                          <>
                            <span>{size.name}</span>
                            {size.quantity > 0 ? (
                              <span
                                className={classNames(
                                  checked ? 'border-indigo-500' : 'border-transparent',
                                  focus ? 'border' : 'border-2',
                                  'pointer-events-none absolute -inset-px rounded-md',
                                )}
                                aria-hidden="true"
                              />
                            ) : (
                              <span
                                aria-hidden="true"
                                className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                              >
                                <svg
                                  className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                  viewBox="0 0 100 100"
                                  preserveAspectRatio="none"
                                  stroke="currentColor"
                                >
                                  <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                </svg>
                              </span>
                            )}
                          </>
                        )}
                      </Radio>
                    ))}
                  </RadioGroup>
                </fieldset>
              </div>

              <button
                type="submit"
                onClick={handleAddToCartItem}
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add to bag
              </button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{productData.product?.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{productData.product?.description}</p>
              </div>
            </div>
          </div>
        </div>
        </section>
        {/* rating and reviews */}
        <section>
          <h1 className='font-semibold text-lg pb-4'>Recent rating and reviews </h1>
          <div className='border p-5'>
          <Grid container spacing={7}>
            <Grid item xs={7}>
            <div className='space-y-5'>
              {[1,1,1,1].map((i)=><ProductReviewCard/>)}
            </div>
            </Grid>
            <Grid item xs={5}>
             <h1 className='text-xl font-semibold pb-1'>Product rating</h1>
             <div className='flex items-center space-x-3'>
              <Rating value={4.6} precision={0.5} readOnly></Rating>
              <p>598348</p>
             </div>
             <Box>
              <Grid container justifyItems="center" alignItems="center" gap={2}>
                <Grid item xs={2}>
                <p>Excellent</p>
                </Grid>
                <Grid item xs={7}>
                  <LinearProgress variant='determinate' value={40} color="success"/>
                </Grid>
              </Grid>
             </Box>
            </Grid>
          </Grid>
          </div>
        </section>
        {/* similar products */}
        <section className='pt-10'>
          <h1 className='py-10 text'>Similar products</h1>
           <div className='flex flex-wrap space-y-5'>
            {mens_kurta.map((item)=><HomeSectionCard product ={item}/>)}
           </div>
        </section>
      </div>
    </div>
  )
}

export default ProductDetails
