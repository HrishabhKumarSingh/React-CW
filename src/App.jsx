// import Card from "./Card"
// import Effect from "./effect"
// import Event from "./Event";
//
// const App = ()=>{
//   const arr = [
//     {
//       title: "Chess Board",
//       img: "",
//       description: "A classic chess board for strategic games and thoughtful play."
//     },
//     {
//       title: "Chess Board",
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq7YODinBoaVTWtWRS99yAoegNiT-W7xquaq_8VvlRpg&s=10",
//       description: "A classic chess board for strategic games and thoughtful play."
//     },
//     {
//       title: "Chess Board",
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHC60VlxjEZCCf8FwzkhZSDI6hFkti5FbQ1lJLunS2Lg&s=10",
//       description: "A classic chess board for strategic games and thoughtful play."
//     },
//   ];
//
//   return (
//     <>
//       <div className="main ">
//         <Card title={arr[0].title} img={arr[0].img} description={arr[0].description} />
//         <Card title={arr[1].title} img={arr[1].img} description={arr[1].description} />
//         <Card title={arr[2].title} img={arr[2].img} description={arr[2].description} />
//       </div>
//       <Event />
//       <Effect />
//     </>
//   )
// }
// export default App;

import Contexts from "./Contexts";
const App = () => {
  
  return (
    <>
      <h1>My New React App</h1>
      <p>Welcome to my new webpage.</p>
      <Contexts />
    </>
  );
};

export default App;
