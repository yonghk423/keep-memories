import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addInfo } from '../actions/index'
import { storage } from '../service/Firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

const InfoUpload = () => { 
  const dispatch = useDispatch()
  const [progress, setProgress] = useState(0);
  const [imgUrl, setImgUrl] = useState('')
  const [infoData, setInfoData] = useState({
    name:'',
    img:'',
    price: '',
    text:'',
    textBox:[{
      name: '',
      text: '',
    }]    
  });
  const {name, img, price, text, textBox} = infoData;
  console.log({name, img, price, text, textBox})
   //-----------오류 메시지 상태---------------
  const [nameMessage, setNameMessage] = useState('')
   //-----------유효성 검사-------------------
  const [isName, setIsName] = useState(false)


  //----------------------------------------------------
  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {    
    const {name, value} = e.target;
    console.log({name, value});    
    setInfoData({
      ...infoData,
      [name]: value,
      [img]: imgUrl,
      [price]: value,
      [text]: value,
      textBox:[{
      name: '',
      text: '',
      }]    
    })
    if(e.target.value.length < 2 || e.target.value.length > 5) {
      setNameMessage('2글자 이상 5글자 미만으로 입력해주세요.')
      setIsName(false);
    } else {
      setNameMessage('올바른 이름 형식입니다')
      setIsName(true);
    }
  }
//-------------------------------------------------------
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
    }
    );
  };

  const onInfo = (name:string, imgUrl:string, price:string, text:string, textBox:Array<object>) => (     
  dispatch(addInfo(name, imgUrl, price, text, textBox))
  ) 
  
  const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();        
    onInfo(name, imgUrl, price, text, textBox);    
    console.log(name, imgUrl, price, text, textBox)    
    setInfoData({
    name:'',
    img:'',
    price: '',
    text:'',
    textBox:[{
      name: '',
      text: '',
    }]    
    });
  }  
  
  return (
        <div>
            <form className='submitInfo' onSubmit={onSubmit}>
              <input type="file" accept="image/*" onChange={onFileChange}/>                         
              <input name='name' value={name} onChange={onChange}/>{nameMessage}             
              <input name='price' value={price} onChange={onChange}/>                                
              <input name='text' value={text} onChange={onChange}/>
              <button type='submit'>등록</button>              
            </form> 
            <h3>Uploaded {progress} %</h3>           
        </div>
    ) 
    
}

export default InfoUpload;