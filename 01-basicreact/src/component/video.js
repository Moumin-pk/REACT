import "./video.css";



export default function Thumb({url,title,views,likes=60,comments}) {
    let channel = 'MOUMIN AHMAD'
  return(
<div>
 <img className= 'thumbinal'
    src= {url}
    alt="Katherine Johnson"
  />
  <div className= 'section '>
  <h2>{title}</h2>
  <div className = 'info'>
  <h5>viwes {views}. likes {likes}. comments {comments}</h5>
  <h5>{channel}</h5>
  </div>
  </div>
  </div>

  )
}

