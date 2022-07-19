import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import http  from "http";
// import initialStateRouter from './router/initialState.js'
 
/* Prevent Sleep in Heroku Server */
setInterval(function () {
  http.get("http://everycoding.herokuapp.com");
}, 600000); // every 10 minutes

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
      name: "harmony of colors",
      img: "https://images.velog.io/images/yonghk423/post/a6040640-2b42-428f-91ff-ed83013b8c8f/2.webp",
      price: 4900,
      text: 'Better the last smile than the first laughter',
      textBox: [{
                    id: 1,
                    name: "harmony of colors",
                    text: '',
                  }]
    },
    
    {
      id: 7,
      name: "1",
      img: "https://i.pinimg.com/564x/5c/d9/1b/5cd91b51a0b0d16375320b5a79be0dea.jpg",
      price: 4900,
      text: 'Better the last smile than the first laughter',
      textBox: [{
                    id: 1,
                    name: "1",
                    text: '',
                  }]
    },
    
    {
      id: 8,
      name: "2",
      img: "https://i.pinimg.com/564x/62/f5/49/62f54935258dbf0107588030de471575.jpg",
      price: 4900,
      text: 'Better the last smile than the first laughter',
      textBox: [{
                    id: 1,
                    name: "2",
                    text: '',
                  }]
    },
    
    {
      id: 9,
      name: "3",
      img: "https://i.pinimg.com/564x/a4/fe/0b/a4fe0bc1f03398380e551da6a650052a.jpg",
      price: 4900,
      text: 'Better the last smile than the first laughter',
      textBox: [{
                    id: 1,
                    name: "3",
                    text: '',
                  }]
    },
    
    {
      id: 10,
      name: "4",
      img: "https://i.pinimg.com/564x/70/93/ce/7093ce46d081fe34647c8dfecffb97c1.jpg",
      price: 4900,
      text: 'Better the last smile than the first laughter',
      textBox: [{
                    id: 1,
                    name: "4",
                    text: '',
                  }]
    },
    
    {
      id: 11,
      name: "5",
      img: "https://i.pinimg.com/564x/49/b2/54/49b254b52d6c3660dbe587d14cfc7b5a.jpg",
      price: 4900,
      text: 'Better the last smile than the first laughter',
      textBox: [{
                    id: 1,
                    name: "5",
                    text: '',
                  }]
    },
    
    {
      id: 12,
      name: "6",
      img: "https://i.pinimg.com/564x/11/db/a2/11dba25f5e063b798f9dfa9cb53d6b18.jpg",
      price: 4900,
      text: 'Better the last smile than the first laughter',
      textBox: [{
                    id: 1,
                    name: "6",
                    text: '',
                  }]
    },

    {
      id: 13,
      name: "7",
      img: "https://i.pinimg.com/564x/65/25/d9/6525d95f0a613f0f5ab78b3e655d5654.jpg",
      price: 4900,
      text: 'Better the last smile than the first laughter',
      textBox: [{
                    id: 1,
                    name: "7",
                    text: '',
                  }]
    },
    
    {
      id: 14,
      name: "8",
      img: "https://i.pinimg.com/564x/79/a0/a7/79a0a72901eba4469b171ca4d358f03e.jpg",
      price: 4900,
      text: 'Better the last smile than the first laughter',
      textBox: [{
                    id: 1,
                    name: "8",
                    text: '',
                  }]
    },
    
    {
      id: 15,
      name: "9",
      img: "https://i.pinimg.com/736x/34/3b/74/343b74f28fa9a51ec5723e52e0a31f6d.jpg",
      price: 4900,
      text: 'Better the last smile than the first laughter',
      textBox: [{
                    id: 1,
                    name: "9",
                    text: '',
                  }]
    },

    {
      id: 16,
      name: "10",
      img: "https://i.pinimg.com/564x/c5/4d/03/c54d03aba76b54afd894105db10a39b7.jpg",
      price: 4900,
      text: 'Better the last smile than the first laughter',
      textBox: [{
                    id: 1,
                    name: "10",
                    text: '',
                  }]
    },  
    
    {
      id: 17,
      name: "11",
      img: "https://i.pinimg.com/564x/a0/76/3c/a0763cd285248df0768157131130e2d5.jpg",
      price: 4900,
      text: 'Better the last smile than the first laughter',
      textBox: [{
                    id: 1,
                    name: "11",
                    text: '',
                  }]
    },    

    {
      id: 18,
      name: "12",
      img: "https://i.pinimg.com/564x/3f/2e/c1/3f2ec15fa7b9f5e6ced853ccb49ce83d.jpg",
      price: 4900,
      text: 'Better the last smile than the first laughter',
      textBox: [{
                    id: 1,
                    name: "12",
                    text: '',
                  }]
    },    

    {
      id: 19,
      name: "13",
      img: "https://i.pinimg.com/564x/90/ea/ce/90eacea6667f113e31da3b7318cb8758.jpg",
      price: 4900,
      text: 'Better the last smile than the first laughter',
      textBox: [{
                    id: 1,
                    name: "13",
                    text: '',
                  }]
    },    

    {
      id: 20,
      name: "14",
      img: "https://i.pinimg.com/564x/cb/34/31/cb34317cad22e0e47bae60a9bdf8579c.jpg",
      price: 4900,
      text: 'Better the last smile than the first laughter',
      textBox: [{
                    id: 1,
                    name: "14",
                    text: '',
                  }]
    },    

    {
      id: 21,
      name: "15",
      img: "https://i.pinimg.com/564x/46/9e/e5/469ee5f202b0444b1380d71c1149f8ac.jpg",
      price: 4900,
      text: 'Better the last smile than the first laughter',
      textBox: [{
                    id: 1,
                    name: "15",
                    text: '',
                  }]
    },    
  ],

  cartItems: [
    
  ], 
  
  notifications: [

  ] 
}

// const router = express.Router();

app.get('/', (req, res, next) => {
    res.send(initialState);
})

app.get('/items/:id', (req, res, next) => {
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

app.post('/', (req, res, next) => {
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

app.delete('/cartItems/:id', (req, res, next) => {
  const id = req.params.id;
  console.log(id)
  res.send(id)
  initialState = Object.assign({}, initialState, {
    cartItems: initialState.cartItems.filter((ele) => ele.id !== Number(id))
  })
});

app.post('/addTodo' , (req, res, next) => {
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
app.delete('/items/:id/textBox/:id', (req, res, next) => {
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

app.post('/info', (req, res, next) => {
  const items = req.body
  console.log(items)
  initialState = Object.assign({}, initialState, { items : [...initialState.items, items]})
  console.log(initialState);
  res.status(201).send(initialState)
})

app.delete('/items/:id', (req, res, next) => {
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