import React from 'react';
import './WritingDetail.css';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import EditIcon from '../../img/editIcon.svg';
import DeleteIcon from '../../img/deleteIcon.svg';

const WritingDetail = () => {
  return (
    <div className='WritingDetail'>
        <Header />
        <div className='Container'>
            <div className='WritingDetailContainer'>
                <div className='BookCoverImg'>
                    <div className='ButtonContainer'>

                        <img className='EditButton' src={EditIcon} alt='EditButton'/>
                        <img className='DeleteButton' src={DeleteIcon} alt='DeleteButton'/>
                        </div>
                    <div className='ContainerHeader'>
                    <div className='BookInfo'>한강의 {'<채식주의자>'}</div>
                        
                    </div>

                </div>
                

            </div>

        </div>
        <Footer />
    </div>
  )
}

export default WritingDetail