//https://css-tricks.com/snippets/css/complete-guide-grid/
//https://developer.mozilla.org/ru/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods

// Todo:
/* как работать с вложениями div в div с помощью grid css */

// <div className={style.container}>
//     <div className={style.header}>
//         {/* разместить по правому краю от avatar, ниже background */}
//         <div className={style.intro}>
//             {/* разместить под background и верхних 30% наложить на нижнюю часть background */}
//             <div className={style.avatar}>
//                 {/* разместить по правому краю от avatar поверх background, используя 30%  */}
//                 <div className={style.tags}>
//                     {/* разместить в верху, первым элементом, на всю ширину екрана background */}
//                     <div className={style.background}></div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     <div className={style.main}>Main </div>
//     <div className={style.footer}>Footer</div>
// </div>


// AI answer https://chat.openai.com/

// .container {
//     display: grid;
//     grid-template-rows: auto 1fr auto; /* три строки */
//     grid-template-columns: 1fr 30%; /* два столбца */
//     height: 100vh; /* или другая высота, чтобы сетка занимала всю доступную область */
//   }
  
//   .intro {
//     grid-row: 1 / span 2; /* занимает первую и вторую строку */
//     grid-column: 2 / -1; /* занимает второй столбец и все следующие */
//   }
  
//   .avatar {
//     grid-row: 1 / -1; /* занимает все строки */
//     grid-column: 1 / -1; /* занимает все столбцы */
//   }
  
//   .tags {
//     grid-row: 1; /* занимает первую строку */
//     grid-column: 1 / -1; /* занимает все столбцы */
//   }
  
//   .background {
//     width: 100%; /* занимает всю доступную ширину */
//   }
  
//   /* Дополнительные стили для остальных элементов */
  
//   .header {
//     grid-row: 1; /* занимает первую строку */
//     grid-column: 1 / span 2; /* занимает первый и второй столбцы */
//   }
  
//   .main {
//     grid-row: 2; /* занимает вторую строку */
//     grid-column: 1 / span 2; /* занимает первый и второй столбцы */
//   }
  
//   .footer {
//     grid-row: 3; /* занимает третью строку */
//     grid-column: 1 / span 2; /* занимает первый и второй столбцы */
//   }
  

// Second up
/* как работать с вложениями div в div с помощью grid css */

{/* <div className={style.container}>
    <div className={style.header}>
   
        <div className={style.intro}>
  
            <div className={style.avatar}>
  
                <div className={style.tags}>
                  <div className={style.tag1} />
<div className={style.tag2} />
<div className={style.tag3} />
                    <div className={style.background}></div>
                </div>
            </div>
        </div>
    </div>
    <div className={style.main}>Main </div>
    <div className={style.sidebar}>Sidebar</div>
</div>  
1 разместить в верху, первым элементом, на всю ширину екрана background 
2 разместить avatar под background и верхних 30%  контейреа avatar наложить на нижнюю часть background
3 разместить tags по правому краю от avatar поверх background, используя 30% области заданих от avatar, не заходя на avatar.
4 разместить intro по правому краю от avatar, ниже background
5 разместить sidebar по правому краю от intro, ниже background */}
