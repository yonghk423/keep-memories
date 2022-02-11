import React, {useState } from 'react';
import { useDispatch } from 'react-redux';
import { addInfo } from '../actions/index'
import { storage } from '../service/firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

//데이터 url를 string 값으로 받는다(0)
//onSubmti 할 때 dispatch로 action에 전달()
//action 전달 성공()
//reducer까지 값 받아 오기 성공()

const InfoUpload = () => { 
  const [progress, setProgress] = useState(0);
  const [data, setData] = useState('')
  console.log(data);
  const dispatch = useDispatch()
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
   
  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {    
    const {name, value} = e.target;
    console.log({name, value});    
    setInfoData({
      ...infoData,
      [name]: value,
      [img]: data,
      [price]: value,
      [text]: value,
      textBox:[{
      name: '',
      text: '',
    }]    
    })
  }

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
      .then((response) => setData(response))  
    }
    );
  };

  const onInfo = (name:string, data:string, price:string, text:string, textBox:Array<object>) => 
  dispatch(addInfo(name, data, price, text, textBox))

  const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();        
    onInfo(name, data, price, text, textBox);    
    console.log(name, data, price, text, textBox)    
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
              <input name='name' value={name} onChange={onChange}/>
              <input name='price' value={price} onChange={onChange}/>                                
              <input name='text' value={text} onChange={onChange}/>
              <button type='submit'>등록</button>              
            </form> 
            <h3>Uploaded {progress} %</h3>           
        </div>
    ) 
    
}

export default InfoUpload;