// const foo = (num, count) => {
//   if (count === 1) {
//     return num;
//   }

//   return num * foo(num, count - 1);
// };

// console.log(foo(5, 3));

//-----------------------------------------------------------------------------------//

// const foo = (num, count) => (count === 1 ? num : num * foo(num, count - 1));

// console.log(foo(5, 3));

//-----------------------------------------------------------------------------------//

// Пример данных

// const comments = [
//   { id: 1, parentId: null, text: "Comment 1" },
//   { id: 2, parentId: 1, text: "Reply to Comment 1" },
//   { id: 3, parentId: 1, text: "Another reply to Comment 1" },
//   { id: 4, parentId: 2, text: "Reply to Reply to Comment 1" },
//   { id: 5, parentId: null, text: "Comment 2" },
// ];

// const buildTree = (comments) => {
//   return comments.filter((comment) => comment.parentId === null);
// };

//-----------------------------------------------------------------------------------//

// Пример входных данных

// const nestedArray = [1, [2, [3, 4], 5], 6, [7, 8, [9, [10]]]];

// const summArr = (arr) => {
//   let sum = 0;

//   const getNum = (childArray) => {
//     childArray.forEach((el) => {
//       if (Array.isArray(el)) {
//         getNum(el);
//       } else {
//         sum += el;
//       }
//     });
//   };

//   getNum(arr);

//   return sum;
// };

// console.log(summArr(nestedArray));

//-----------------------------------------------------------------------------------//

// Пример данных

// const menu = [
//   { name: "Home", children: [] },
//   {
//     name: "About",
//     children: [
//       { name: "Team", children: [] },
//       { name: "History", children: [] },
//     ],
//   },
//   {
//     name: "Services",
//     children: [
//       {
//         name: "Web Development",
//         children: [
//           { name: "Frontend", children: [] },
//           { name: "Backend", children: [] },
//         ],
//       },
//     ],
//   },
// ];

// const getMenu = (menuArray) => {
//   let html = "";

//   menuArray.forEach((el) => {
// html = html + `<li>${el.name}</li>`;
// if (el.children.length > 0) {
//   html = html + `<ul>${getMenu(el.children)}</ul>`;
//     }
//   });

//   return html;
// };

// getMenu(menu);
// document.querySelector(".menu").innerHTML = getMenu(menu);

//-----------------------------------------------------------------------------------//

const menuData = [
  {
    title: "Home",
    link: "https://img.freepik.com/free-photo/cute-cat-with-computer_23-2150932178.jpg",
    children: [],
  },
  {
    title: "About",
    link: "https://habr.com/ru/companies/vk/articles/195642/",
    children: [
      {
        title: "Team",
        link: "https://masterpiecer-images.s3.yandex.net/f58c8abc68c311ee841592669a1675b3:upscaled",
        children: [],
      },
      {
        title: "History",
        link: "https://hotelblackclaw.ru/articles/istoriya-koshki/",
        children: [],
      },
    ],
  },
  {
    title: "Services",
    link: "https://murchalkin.ru/",
    children: [
      {
        title: "Web Development",
        link: "https://cs11.pikabu.ru/post_img/2019/10/27/2/1572139789132376259.jpg",
        children: [
          {
            title: "Frontend",
            link: "https://cs14.pikabu.ru/post_img/2023/12/25/7/1703499370183826248.jpg",
            children: [],
          },
          {
            title: "Backend",
            link: "https://cs12.pikabu.ru/post_img/2021/03/02/10/1614704065178268530.png",
            children: [],
          },
        ],
      },
      {
        title: "Mobile Development",
        link: "https://masterpiecer-images.s3.yandex.net/6c1db2c67b9711ee9b25be3d04098890:upscaled",
        children: [],
      },
    ],
  },
  {
    title: "Contact",
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwjOBjWjJOnQfZykw8K361F2J-nK16HCxn5w&s",
    children: [],
  },
];

const getMenu = (menuArray) => {
  let html = "";

  menuArray.forEach((el) => {
    html = html + `<li><a href="${el.link}">${el.title}</a>`;
    if (el.children.length > 0) {
      html = html + `<ul>${getMenu(el.children)}</ul>`;
    }
  });

  return html;
};

getMenu(menuData);
document.querySelector(".menuData").innerHTML = getMenu(menuData);
