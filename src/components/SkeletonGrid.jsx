import "./skeletonGrid.modules.css"

const SkeletonGrid = () => {

  return (
    <div className="skeletonWrapper">
      {new Array(4).fill(" ").map((item, index) => (
        <div key={index} className="skeletonCard"></div>
      ))}
    </div>
  )
}

export default SkeletonGrid