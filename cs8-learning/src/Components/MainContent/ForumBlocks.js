// import './Forum.css';
// import { useState, useEffect } from 'react';
// import {FaAngleDoubleUp, FaComments} from 'react-icons/fa';


// const ForumBlocks = () => {

//     let content= null;
//     const[info,setData] = useState('');
    

//     const get_post_url='http://localhost:5000/api/post/';

//     const token= localStorage.getItem("token")
    
//     useEffect(()=>{
//     axios.get(get_post_url,
//     {
//         headers: 
//         {
//             'x-auth-token': token
//         }
//     })

//     .then(res=>{
//         console.log(res.data);
//         setData(res.data);
       
//         }
//     )
//     .catch(err=>console.log(err))

// },[]);
//     return ( 
    
//         <div className="forum">
//            <div className="forum-list">
//                 <div className="content">   
//                     <img src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/43675/white-circle-emoji-clipart-xl.png" width = '80px' style={{display:'inline', float:'left'}} alt="" />
//                     <span> 
//                     <h3>{info[i].title}</h3>
//                     </span>
//                     <p className="author">By {info[i].name}</p>
//                     <p style={{float:'left'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta vel sunt officiis praesentium quasi sapiente quo dignissimos. Illo commodi consequatur error repellat deleniti saepe vero quaerat modi doloribus, asperiores beatae.</p>
//                     <button className='forum-button' style={{marginRight:'5px',
//                             marginTop:'10px'}}>
//                         <FaAngleDoubleUp style={{
//                             fontSize:"20px",
//                         }}/> 
//                         <p>99</p>
//                     </button>
//                     <button className='forum-button'>
//                         <FaComments style={{
//                             fontSize:"20px",
//                         }}/> 
//                         <p>99</p>
//                     </button>
//                 </div>
                
//             </div>
//         </div>


//      );
// }
 
// export default ForumBlocks;