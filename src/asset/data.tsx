interface Data {
  items: Array<object>; //배열안에 객체
  cartItems: Array<object>;
}

export const initialState: Data =
{
  "items": [
    {
      "id": 1,
      "name": "맥북",
      "img": "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp16-spacegray-select-202110_GEO_KR?wid=1808&hei=1686&fmt=jpeg&qlt=80&.v=1633657639000",
      "price": 9900
    },
    {
      "id": 2,
      "name": "아이폰",
      "img": "http://img.danawa.com/prod_img/500000/235/253/img/15253235_1.jpg?shrink=330:330&_v=20211210095029",
      "price": 12000
    },
    {
      "id": 3,
      "name": "에어팟",
      "img": "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MME73?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1632861342000",
      "price": 2900
    },
    {
      "id": 4,
      "name": "아이패드",
      "img": "http://img4.tmon.kr/cdn3/deals/2020/07/02/3900597058/3900597058_front_efd6b47b31.jpg",
      "price": 4900
    },
    // {
    //   "id": 5,
    //   "name": "갤럭시S",
    //   "img": "http://image.sportsseoul.com/2021/04/02/news/20210402110449_o.jpg",
    //   "price": 2900
    // },
    {
      "id": 5,
      "name": "갤럭시 탭",
      "img": "http://th1.tmon.kr/thumbs/image/0a8/66f/97f/7ac293456_700x700_95_FIT.jpg",
      "price": 3900
    },

    {
      "id": 6,
      "name": "Z플립",
      "img": "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202109/16/0d93ca34-4f67-4e96-a024-4c8e839dd609.jpg",
      "price": 4900
    },

    // {
    //   "id": 8,
    //   "name": "Z폴드",
    //   "img": "https://dimg.donga.com/wps/NEWS/IMAGE/2021/08/12/108512724.1.jpg",
    //   "price": 6900
    // }
  ],
  "cartItems": [
    
  ]
  
}
