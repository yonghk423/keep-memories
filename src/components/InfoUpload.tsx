import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addInfo } from '../actions/index'
import { storage } from '../service/Firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import './InfoUpload.scss'

const InfoUpload = () => {   
  const dispatch = useDispatch()
  const [progress, setProgress] = useState(0);
  const [imgUrl, setImgUrl] = useState('')
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [infoData, setInfoData] = useState({ img:'', text:'', textBox:[{ name: '', text: '', }]}); 
  const {img, text, textBox} = infoData;  

   //-----------오류 메시지 상태------------------------------------------------
  const [nameMessage, setNameMessage] = useState('')
  const [priceMessage, setPriceMessage] = useState('')

   //-----------유효성 검사----------------------------------------------------
  const [isName, setIsName] = useState(false)
  const [isPrice, setIsPrice] = useState(false)



  //-------------------------------------------------------------------------
  const onChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {    
    const {name, value} = e.target;
    setInfoData({
      ...infoData,
      [name]: value, //???? 뭐지
      [img]: imgUrl,
      [text]: value,
      textBox:[{ name: '', text: '', }]
    })    
  }

  
//-------------------------------------------------------
  const onNameChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    setName(e.target.value)
    if (e.target.value.length < 2 || e.target.value.length > 20) {
      setNameMessage('2글자 이상 20글자 이하로 입력해주세요.')
      setIsName(false)
    } else {
      setNameMessage('올바른 이름 형식입니다 :)')
      setIsName(true)
    }

  }
  const onPriceChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    const priceVali =  /^[0-9]+$/
    const priceCurrent = e.target.value;
    setPrice(priceCurrent)
    if (!priceVali.test(priceCurrent)) {
      setPriceMessage('숫자만 입력해주세요')
    } else {
      setPriceMessage('올바른 형식입니다.')
      setIsPrice(true);
    }
  }
  //----------------------------------------------------------------------------
  const onFileChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { files }:any  = e.target;
    const file = files[0];
    upLoadFiles(file);      
  }
  const upLoadFiles = async (file:any) => {
    if(!file) return
    const storageRef = ref(storage, `/files/${file.name}`); 
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on("state_changed", (snapshot) => {
      const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      setProgress(prog)
    }, 
    (err) => console.log(err),    
    () =>  {
    getDownloadURL(uploadTask.snapshot.ref)
      .then((response) => setImgUrl(response))  
    });
  };
  //---------------------------------------------------------------------------------------
  const onInfo = (name:string, imgUrl:string, price:string, text:string, textBox:Array<object>) => (     
  dispatch(addInfo(name, imgUrl, price, text, textBox))
  ) 
  
  const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onInfo(name, imgUrl, price, text, textBox);    
    setName('')
    setPrice('')
    setImgUrl('')    
    setInfoData({ img:'', text:'', textBox:[{ name: '', text: '', }]});
    setTimeout(() => {
      window.location.reload();
    }, 2000)  
    //-------------------------------------------------------------------
    
  }  
  
  return (
        <div className='infoItemBox'>
            <form className='submitInfo' onSubmit={onSubmit}>
              <div className='onFileChange'>
                <input type="file" accept="image/*" onChange={onFileChange}/>
                {imgUrl && <img className='imgUrl' src={imgUrl} alt=""/>}
                <h3>Uploaded {progress} %</h3>
              </div>
              <div className='onNameChange'>
                <textarea placeholder="사진의 제목을 적어주세요!" name='name' value={name} onChange={onNameChange}/>
                <div className='nameMessage'>{nameMessage} </div>
              </div>
              <div className='onPriceChange'>
                <textarea placeholder="사진의 가격을 적어주세요!" name='price' value={price} onChange={onPriceChange}/>
                <div className='priceMessage'>{priceMessage}</div>
              </div>
              <div className='text'>
                <textarea placeholder="사진에 담긴 생각을 자유롭게 적어 주세요!" name='text' value={text} onChange={onChange}/>
              </div>
              <div className='submit'>
                <button type='submit' className='submitBtn' disabled={!(isName && isPrice)}>등록</button>
              </div>              
            </form> 
        </div>
    ) 
    
}

export default InfoUpload;
