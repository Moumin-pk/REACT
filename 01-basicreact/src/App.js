import "./App.css";
import Thumb from "./component/video";
import Demo from "./Demo";

function App() {
let obj = {
  url:'https://marketplace.canva.com/EAFf5rfnPgA/1/0/800w/canva-blue-modern-eye-catching-vlog-youtube-thumbnail-XTJTyike0CE.jpg', 
        title : 'react JS', 
        views: '20', 
        // likes : '50', 
        comments :'100k',
}
  let owner = 'Created By : MOUMIN AHMAD'
  return (
    <div >
      <Demo />
      <div className="img-flex">
        <Thumb  {...obj}/>
        <Thumb url='https://static-cse.canva.com/blob/1200947/1600w-wK95f3XNRaM.jpg'  title = 'react JS' title = 'react JS' views= '70' likes = '1000' comments ='1000k'/>
        <Thumb url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5lB4Roexz2DyVtEDOzrJLutOVZifLTSs3FbUUz3oK58P3ZrQJidI_k4jkEDJPkKdDD-4&usqp=CAU'  title = 'REACTJS+ NODEJS ' title = 'react JS' views= '50' likes = '40' comments ='200k'/>
        <Thumb url='https://marketplace.canva.com/EAFf5rfnPgA/1/0/800w/canva-blue-modern-eye-catching-vlog-youtube-thumbnail-XTJTyike0CE.jpg'  title = 'react JS' views= '20' likes = '50' comments ='100k' />
        <Thumb url='https://static-cse.canva.com/blob/1200947/1600w-wK95f3XNRaM.jpg'  title = 'react JS' title = 'react JS' views= '70' likes = '1000' comments ='1000k'/>
        <Thumb url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5lB4Roexz2DyVtEDOzrJLutOVZifLTSs3FbUUz3oK58P3ZrQJidI_k4jkEDJPkKdDD-4&usqp=CAU'  title = 'REACTJS+ NODEJS ' title = 'react JS' views= '50' likes = '40' comments ='200k'/>
        <Thumb url='https://marketplace.canva.com/EAFf5rfnPgA/1/0/800w/canva-blue-modern-eye-catching-vlog-youtube-thumbnail-XTJTyike0CE.jpg'  title = 'react JS' views= '20' likes = '50' comments ='100k' />
        <Thumb url='https://static-cse.canva.com/blob/1200947/1600w-wK95f3XNRaM.jpg'  title = 'react JS' title = 'react JS' views= '70' likes = '1000' comments ='1000k'/>
        <Thumb url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5lB4Roexz2DyVtEDOzrJLutOVZifLTSs3FbUUz3oK58P3ZrQJidI_k4jkEDJPkKdDD-4&usqp=CAU'  title = 'REACTJS+ NODEJS ' title = 'react JS' views= '50' likes = '40' comments ='200k'/>
      </div>
    </div>
  );
}
export default App;
