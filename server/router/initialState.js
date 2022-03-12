import express from 'express';
import 'express-async-errors';

let initialState = {
  items: [
    {
      id: 1,
      name: "leisure time",
      img: "https://images.velog.io/images/yonghk423/post/00995394-70d4-480e-bf98-e699dffda06f/red16.jpeg",
      price: 9900,
      text: 'Live life to the fullest',
      textBox: [{
                    id: 1,
                    name: "leisure time",
                    text: '',
                  }]  
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

const router = express.Router();

router.get('/initialState', (req, res, next) => {
    res.send(initialState);
})

router.get('/initialState/items/:id', (req, res, next) => {
  const id = Number(req.params.id);
  // console.log(id);
  // console.log(initialState.items)
  const detailData = initialState.items.find((ele) => (
    ele.id === id
  ));
  // console.log(detailData);
  if (detailData) {
    res.send(detailData)
  } else {
    res.status(404).send(`id(${id}) not found` );
  }
});

router.post('/initialState/', (req, res, next) => {
  const { id, quantity } = req.body
  console.log({id, quantity})
  const data = {
    id,
    quantity
  };
  initialState = Object.assign({}, initialState, { cartItems: [...initialState.cartItems, data ]})
  console.log(initialState);
  res.status(201).send(data)
  // console.log(data)
  // initialState = Object.assign({}, initialState, {cartItems: [ data ]})
  // res.status(201).send(initialState);
});

router.delete('/initialState/cartItems/:id', (req, res, next) => {
  const id = req.params.id;
  console.log(id)
  res.send(id)
});

export default router;