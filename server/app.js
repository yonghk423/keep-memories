import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
// import initialStateRouter from './router/initialState.js'

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('tiny'))

//라우터
// app.use('https://everycoding.herokuapp.com', initialStateRouter)

let initialState = {
  items: [
    {
      id: 1,
      name: "leisure time",
      img: "https://images.velog.io/images/yonghk423/post/00995394-70d4-480e-bf98-e699dffda06f/red16.jpeg",
      price: 9900,
      text: 'Live life to the fullest',
      textBox: [JSON.stringify({
                    id: 1,
                    name: "leisure time",
                    text: '',
                  })]  
    },
    {
      id: 2,
      name: "beautiful architecture",
      img: "https://media.vlpt.us/images/yonghk423/post/1b0c1f1b-72bf-4864-b6c4-1be205b1abfd/1.jpeg",
      price: 12000,
      text: 'Behind the cloud is the sun still shining',
      textBox: [{
                    id: 1,
                    name: "beautiful architecture",
                    text: '',
                  }]
    },
    {
      id: 3,
      name: "spring spirit",
      img: "https://images.velog.io/images/yonghk423/post/fdcbfd65-45c3-4372-8324-f2b3ce6f1d36/5.jpeg",
      price: 2900,
      text: 'Life is really simple',
      textBox: [{
                    id: 1,                    
                    name: "spring spirit",
                    text: '',
                  }]
    },
    {
      id: 4,
      name: "the aesthetics of slowness",
      img: "https://media.vlpt.us/images/yonghk423/post/138d7bdc-d719-410d-ada3-a4c2aa53af07/3.jpeg",
      price: 4900,
      text: 'green green green',
      textBox: [{
                    id: 1,
                    name: "the aesthetics of slowness",
                    text: '',
                  }]
    },
    
    {
      id: 5,
      name: "gives peace of mind",
      img: "https://media.vlpt.us/images/yonghk423/post/466c5c0b-dec3-46b9-b67a-ff60e3e94b13/4.jpeg",
      price: 3900,
      text: 'Time you enjoy wasting is not wasted time',
      textBox: [{
                    id: 1,
                    name: "gives peace of mind",
                    text: '',
                  }]
    },

    {
      id: 6,
      name: "harmony of colors",
      img: "https://images.velog.io/images/yonghk423/post/a6040640-2b42-428f-91ff-ed83013b8c8f/2.webp",
      price: 4900,
      text: 'Better the last smile than the first laughter',
      textBox: [{
                    id: 1,
                    name: "harmony of colors",
                    text: '',
                  }]
    }    
  ],

  cartItems: [
    
  ], 
  
  notifications: [

  ] 
}

// const router = express.Router();

app.get('https://everycoding.herokuapp.com', (req, res, next) => {
    res.send(initialState);
})

app.get('https://everycoding.herokuapp.com/items/:id', (req, res, next) => {
  const id = Number(req.params.id);
  
  const detailData = initialState.items.find((ele) => (
    ele.id === id
  ));
  //-------------test---------------
  if (detailData) {
    res.send(detailData)
  } else {
    res.status(404).send(`id(${id}) not found` );
  }
});

app.post('https://everycoding.herokuapp.com', (req, res, next) => {
  const { id, quantity } = req.body
  console.log({id, quantity})
  const data = {
    id,
    quantity
  };
  initialState = Object.assign({}, initialState, { cartItems: [...initialState.cartItems, data ]})
  console.log(initialState);
  res.status(201).send(data)  
});

app.delete('https://everycoding.herokuapp.com/cartItems/:id', (req, res, next) => {
  const id = req.params.id;
  console.log(id)
  res.send(id)
  initialState = Object.assign({}, initialState, {
    cartItems: initialState.cartItems.filter((ele) => ele.id !== Number(id))
  })
});

app.post('https://everycoding.herokuapp.com/addTodo' , (req, res, next) => {
  const {id, text, name } = req.body;
  console.log({text,name})
  let textBox = {
    id : id,
    text: text,
    name: name
  };
  //같은 name을 찾고 같은 배열을 데이터 배열을 찾는다.
  let data1 = initialState.items.find((ele)=> (ele.name === textBox.name))
  console.log(data1)
  console.log(data1.textBox)
  //찾은 배열안에 req.body 값을 넣는다.
  let items = Object.assign({}, data1, { textBox: [ ...data1.textBox, textBox ]})
  console.log(items)
  //그리고 다시 기존 데이터와 합친다
  // let addDataTotal = Object.assign({}, initialState, { items: [...initialState.items], items })
  // console.log(addDataTotal)
  for (let i = 0; i<initialState.items.length; i++ ) {
                if(initialState.items[i].name === items.name) {
                initialState.items[i] = items
              }
            }
  initialState = Object.assign({}, initialState)
  console.log(initialState)
  res.status(201).send(initialState)
})
//-----------------------------------------------------------------------------------------
app.delete('https://everycoding.herokuapp.com/items/:id/textBox/:id', (req, res, next) => {
  const id = Number(req.params.id);
  console.log(id)
    let textData = initialState.items.find((ele)=> (
                ele.textBox.find((ele)=> (
                  ele.id === id
                ))
              ))
              console.log(textData);
              console.log(textData.textBox);            
  let todoData = textData.textBox.filter((ele)=> (
                ele.id !== id
              ))
              console.log(todoData);
              console.log(textData.textBox);
              textData.textBox = todoData;
              console.log(textData);
              for (let i = 0; i<initialState.items.length; i++ ) {
                if(initialState.items[i].id === textData.id) {
                initialState.items[i] = textData;
              }
            }      
            console.log(initialState.items)
  initialState = Object.assign({}, initialState,  { items : [ ...initialState.items ] })
  console.log(initialState);
  res.sendStatus(204);                        
});

app.post('https://everycoding.herokuapp.com/info', (req, res, next) => {
  const items = req.body
  console.log(items)
  initialState = Object.assign({}, initialState, { items : [...initialState.items, items]})
  console.log(initialState);
  res.status(201).send(initialState)
})

app.delete('https://everycoding.herokuapp.com/:id', (req, res, next) => {
  const id = Number(req.params.id);
  console.log(id);
  initialState = Object.assign(
              {}, 
              initialState,
              { items: initialState.items.filter((ele) => ele.id !== id ) },
              { cartItems: initialState.cartItems.filter((ele) => ele.itemId !== id)}
          )
  console.log(initialState);
  res.sendStatus(204);        
})





app.use((req, res, next) => {
    res.sendStatus(404)
})

app.use((error, req, res, next)=> {
    console.error(error);
    res.sendStatus(500);
})
app.listen(process.env.PORT || 8080);