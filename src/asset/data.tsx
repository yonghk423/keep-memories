interface Data {
  items: object[]; //배열안에 객체
  cartItems: object[]; 
}

export const initialState: Data =
{
  "items": [
    {
      "id": 1,
      "name": "맥북",
      "img": "",
      "price": 9900
    },
    {
      "id": 2,
      "name": "아이폰",
      "img": "",
      "price": 12000
    },
    {
      "id": 3,
      "name": "에어팟",
      "img": "",
      "price": 2900
    },
    {
      "id": 4,
      "name": "아이패드",
      "img": "",
      "price": 4900
    },
    {
      "id": 5,
      "name": "갤럭시S",
      "img": "",
      "price": 2900
    },
    {
      "id": 6,
      "name": "갤럭시 탭",
      "img": "",
      "price": 3900
    },

    {
      "id": 7,
      "name": "Z플립",
      "img": "",
      "price": 4900
    },

    {
      "id": 8,
      "name": "Z폴드",
      "img": "",
      "price": 6900
    }
  ],
  "cartItems": [
    {
      "itemId": 1,
      "quantity": 1
    },
    {
      "itemId": 5,
      "quantity": 7
    },
    {
      "itemId": 2,
      "quantity": 3
    }
  ]
  
}
console.log(initialState);
console.log(initialState.items)
console.log(initialState.items[0]);