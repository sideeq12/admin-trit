import { Comment_layout } from "./comment"
import Image from "next/image"

export const Comments = ()=>{
    return(
        <Comment_layout>
           <div className="heading">
               <div  className="product">Product</div>
               <div  className="reviewer">Reviewer</div>
               <div className="review">Review</div>
           </div>
           <div className="heading">
               <div  className="product pro">
                   <div className="img"></div>
                   <div className="details">
                       <strong>Plain Round Neck Blouse</strong> <br />
                       <label htmlFor="Clothes">Clothes</label>
                   </div>
               </div>
               <div  className="reviewer"><strong>Jonathan Smith</strong> <br />
                       <label htmlFor="Clothes">Paris, France</label></div>
               <div className="review">Review</div>
           </div>
        </Comment_layout>
    )
}