import React from 'react'
import './Trouvez.css'

const Trouvez = () => {
  return (
    <div className='conatiner-fluid trouvez_wrapper'>
        <div className='container trouvez_section'>
            <div className='row'>
                <div className='col-xxl-12'>
                    <div className='trouvez_heading'>
                        <p>Trouvez le poste qui vous correspond</p>
                    </div>
                </div>
            </div>

            <div className='trouvez_btn'>
                <button>Découvrir nos offres<img src="constant/right arrow.png"  alt=""/></button>
            </div>
        </div>
    </div>
  )
}

export default Trouvez