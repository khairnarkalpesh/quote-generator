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
    console.log(quoteData)
  return (
    <>
    <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-12 col-md-8 col-lg-6 quote-container'>
            <div className='quote-card text-center'>
              <p>{content}</p>
              </div>
            <div className='row'>
              <ul class="profile-social-links mb-3 row justify-content-center">
                <li className='col-6'><a class="facebook" target="_blank" href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                <li><a class="instagram" target="_blank" href="#"><i class="fa-brands fa-instagram"></i></a></li>
                <li><a class="twitter" target="_blank" href="#"><i class="fa-brands fa-twitter"></i></a></li>
                <li><a class="linkedin" target="_blank" href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
                <li><a class="linkedin" target="_blank" href="#"><i class="fa-brands fa-whatsapp"></i></a></li>
                <li><a class="linkedin" target="_blank" href="#"><i class="fa-solid fa-copy"></i></a></li>
                </ul>
            </div>
          </div>

        </div>
    </div>
    </>
  )
}

export default GenerateQuote;