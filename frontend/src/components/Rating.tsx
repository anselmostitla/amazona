const Rating = (props: {
  rating: number
  numReviews?: number
  caption?: string
}) => {
  const { rating, numReviews, caption } = props
  return (
    <div>
      <span>
         <i className={`${rating>=1}? bg-slate-50 : ${rating>=0.5}? bg-yellow-300: bg-orange-800`}>
            icon
         </i>
      </span>
    </div>
  )
}

export default Rating
