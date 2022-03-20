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

  //--------------localStorage-------------------------------------------------------------------
  

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
  const onNmaeChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
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
        <div className='infoBox'>
            <form className='submitInfo' onSubmit={onSubmit}>
              <input type="file" accept="image/*" onChange={onFileChange}/>
              {imgUrl && <img className='imgUrl' src={imgUrl} alt=""/>}                         
              <textarea name='name' value={name} onChange={onNmaeChange}/>{nameMessage}             
              <textarea name='price' value={price} onChange={onPriceChange}/>{priceMessage}                                
              <textarea name='text' value={text} onChange={onChange}/>
              <button type='submit' disabled={!(isName && isPrice)}>등록</button>              
            </form> 
            <h3>Uploaded {progress} %</h3>           
        </div>
    ) 
    
}

export default InfoUpload;
