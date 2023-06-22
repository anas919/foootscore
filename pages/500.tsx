import Link from 'next/link'
import React from 'react'

const Custom500 = () =>  {
  
  return (
    <section className="page_404 mb-0">
      <div className="flex h-screen mb-0">
        <div className="w-full font-extrabold mb-0">	
            <div className="four_zero_four_bg mb-0">
              <h1 className="text-center ">404</h1>
            </div>
            
            <div className="text-center contant_box_404">
              <h3 className="h2">
              500 - Server-side error occurred
              </h3>
              <p></p>
                <Link className='link_404' href={`/`}>
                  Take me back
                </Link>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Custom500