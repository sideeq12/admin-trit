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
                </div>
            </MainEmail>
        </Email_layout>
    )
}