import Link from "next/link"
import { Email, Email_layout, MainEmail } from "./emailstyle"


export const Email_section = () =>{
    return(
        <Email_layout>
            <div className="email_list">
               <Email className="email" active={true}>
                    <div className="image"></div>
                <div className="details">
                    <div className="name">
                        <strong>Jonathan Smith</strong>
                        <label htmlFor="time">10:15pm</label>
                    </div>
                    <div className="message">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias repellat
                         soluta expeditaodio provident...
                    </div>
                </div>
               </Email>
               <Email className="email" active={false}>
                    <div className="image"></div>
                <div className="details">
                    <div className="name">
                        <strong>Jonathan Smith</strong>
                        <label htmlFor="time">10:15pm</label>
                    </div>
                    <div className="message">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias repellat
                         soluta expe odio provident...
                    </div>
                </div>
               </Email>
               <Email className="email" active={false}>
                    <div className="image"></div>
                <div className="details">
                    <div className="name">
                        <strong>Jonathan Smith</strong>
                        <label htmlFor="time">10:15pm</label>
                    </div>
                    <div className="message">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias repellat
                         soluta expedolor, odio provident...
                    </div>
                </div>
               </Email>
               <Email className="email" active={false}>
                    <div className="image"></div>
                <div className="details">
                    <div className="name">
                        <strong>Jonathan Smith</strong>
                        <label htmlFor="time">10:15pm</label>
                    </div>
                    <div className="message">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias repellat
                         soluta expedolor, odio provident...
                    </div>
                </div>
               </Email>
               <Email className="email" active={false}>
                    <div className="image"></div>
                <div className="details">
                    <div className="name">
                        <strong>Jonathan Smith</strong>
                        <label htmlFor="time">10:15pm</label>
                    </div>
                    <div className="message">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias repellat
                         soluta expedolor, odio provident...
                    </div>
                </div>
               </Email>
            </div>
            <MainEmail>
                <div className="sender">
                    <div className="image"></div>
                    <div className="userdetails">
                        <strong>Jonathan Smith</strong>
                        <label htmlFor="email">jonathansmith@gmail.com</label>
                        10:15PM, Aug 12, 2021
                    </div>
                    <div className="cion">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
</svg>
                    </div>
                </div>
                <div className="messagecontent">
                    <h5>Book an appointment</h5>
                    <p>
                        Hello ooo <br /><br /> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste ad repellendus, 
                        nesciunt velit quaerat cupiditate incidunt voluptas ipsum illo nostrum qui minima 
                        laudantium ut
                         numquam amet soluta porro. Officia, id!
                         nesciunt velit quaerat cupiditate incidunt voluptas ipsum illo nostrum qui minima 
                        laudantium ut
                         numquam amet soluta porro. Officia, id! <br /> <br />Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste ad repellendus, 
                        nesciunt velit quaerat cupiditate incidunt voluptas ipsum illo nostrum qui minima 
                        laudantium ut
                         numquam amet soluta porro. Officia, id!
                         nesciunt velit quaerat cupiditate incidunt voluptas ipsum illo nostrum qui minima 
                        laudantium ut
                         numquam amet soluta porro. Officia, id! <br /> <br />
                         Best regards <br />
                         Jonathan smith </p>
                </div>
                <Link href="#" ><label htmlFor=""style={{"backgroundColor" : "#34ADDC", "color" : "white", "padding" : "5px 25px", "borderRadius" : "3px"}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-reply-all" viewBox="0 0 16 16">
  <path d="M8.098 5.013a.144.144 0 0 1 .202.134V6.3a.5.5 0 0 0 .5.5c.667 0 2.013.005 3.3.822.984.624 1.99 1.76 2.595 3.876-1.02-.983-2.185-1.516-3.205-1.799a8.74 8.74 0 0 0-1.921-.306 7.404 7.404 0 0 0-.798.008h-.013l-.005.001h-.001L8.8 9.9l-.05-.498a.5.5 0 0 0-.45.498v1.153c0 .108-.11.176-.202.134L4.114 8.254a.502.502 0 0 0-.042-.028.147.147 0 0 1 0-.252.497.497 0 0 0 .042-.028l3.984-2.933zM9.3 10.386c.068 0 .143.003.223.006.434.02 1.034.086 1.7.271 1.326.368 2.896 1.202 3.94 3.08a.5.5 0 0 0 .933-.305c-.464-3.71-1.886-5.662-3.46-6.66-1.245-.79-2.527-.942-3.336-.971v-.66a1.144 1.144 0 0 0-1.767-.96l-3.994 2.94a1.147 1.147 0 0 0 0 1.946l3.994 2.94a1.144 1.144 0 0 0 1.767-.96v-.667z"/>
  <path d="M5.232 4.293a.5.5 0 0 0-.7-.106L.54 7.127a1.147 1.147 0 0 0 0 1.946l3.994 2.94a.5.5 0 1 0 .593-.805L1.114 8.254a.503.503 0 0 0-.042-.028.147.147 0 0 1 0-.252.5.5 0 0 0 .042-.028l4.012-2.954a.5.5 0 0 0 .106-.699z"/>
</svg> Reply</label></Link>
            </MainEmail>
        </Email_layout>
    )
}