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
  