import React, { useEffect, useState } from 'react'
import './Quote.css';
function GenerateQuote() {

    const [quoteData, setQuoteData] = useState([]);
    const generateQuote = () =>{
            fetch('https://api.quotable.io/random')
            .then(response => response.json())
            .then(data => setQuoteData(data));

    }

    useEffect(()=>{
        generateQuote();
    }, [])
    
    const { content, author } = quoteData;
    
    const copyQuote = () => {
      /* Get the text field */
      var copyText = content;
    
      /* Select the text field */
      copyText.select();
      copyText.setSelectionRange(0, 99999); /* For mobile devices */
    
       /* Copy the text inside the text field */
      navigator.clipboard.writeText(copyText);
    
      /* Alert the copied text */
      alert("Copied the text: " + copyText);
    }

    console.log(quoteData)

  return (
    <>
    <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-12 col-md-8 col-lg-6 quote-container row justify-content-center'>
            <div className='quote-card col-10'>
              <h3 className='text-center'>{content}</h3>
              <i className='mt-3 float-end'>- {author}</i>
            
            </div>

            <div className='col-8 col-md-6 my-5 justify-content-center'>
              <button className='btn bg-secondary' onClick={() =>  navigator.clipboard.writeText(content)}>Copy</button>
              <button className='btn bg-primary float-end' onClick={generateQuote}>New Quote</button>
            </div>

            <div className='row'>
              <ul className="profile-social-links mb-3 row justify-content-center">
                <li className='col-6'><a className="facebook" target="_blank" href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                <li><a className="instagram" target="_blank" href="#"><i className="fa-brands fa-instagram"></i></a></li>
                <li><a className="twitter" target="_blank" href="#"><i className="fa-brands fa-twitter"></i></a></li>
                <li><a className="linkedin" target="_blank" href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                <li><a className="whatsapp" target="_blank" href={"whatsapp://send?text="+content+" -"+author}><i className="fa-brands fa-whatsapp"></i></a></li>
                </ul>
            </div>
          </div>

        </div>
    </div>
    </>
  )
}

export default GenerateQuote;