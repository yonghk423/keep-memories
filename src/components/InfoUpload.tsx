import React, {useState } from 'react';
import { v4 as uuidv4} from 'uuid';
import { useDispatch } from 'react-redux';
import { addInfo } from '../actions/index'
import { storage } from '../service/firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

const InfoUpload = () => { 
  const [progress, setProgress] = useState(0);
  const dispatch = useDispatch()
  const [infoData, setInfoData] = useState({
    name:'',
    price: '',
    text:'',
    textBox:[{
      name: '',
      text: '',
    }]    
  });
  const {name, price, text, textBox} = infoData;
  console.log({name, price, text, textBox})
   
  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {    
    const {name, value} = e.target;
    console.log({name, value});    
    setInfoData({
      ...infoData,
      [name]: value,
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


  const onInfo = (name:string, price:string, text:string, textBox:Array<object>) => dispatch(addInfo(name, price, text, textBox))

  const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();    
    onInfo(name, price, text, textBox);    
    console.log(name, price, text, textBox)    
    setInfoData({
    name:'',
    price: '',
    text:'',
    textBox:[{
      name: '',
      text: '',
    }]    
    });
  }  

  const upLoadFiles = (file:any) => {
    if(!file) return
    const storageRef = ref(storage, `/files/${file.name}`); 
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on("state_changed", (snapshot) => {
      const prog = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
      setProgress(prog)
    }, (err) => console.log(err),
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((url) => console.log(url))
    }
    );
  };

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