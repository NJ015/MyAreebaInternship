import "./App.css";

import { useState } from "react";

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return <button onClick={handleClick}>Clicked {count} times</button>;
}

// export default function MyApp() {
//   let name = "Nour";
//   return (
//     <div>
//       <h1>Welcome to {name}'s app</h1>
//       <MyButton />
//     </div>
//   );
// }

// function AboutPage() {
//   return (
//     <>
//       <h1>About</h1>
//       <p>
//         Hello there.
//         <br />
//         How do you do?
//       </p>
//       <img className="avatar" />
//     </>
//   );
// }

const user = {
  name: "Hedy Lamarr",
  imageUrl: "/HomeDesign.jpg",
  imageSize: "90px",
};
// const listItems = products.map(product =>
//   <li key={product.id}>
//     {product.title}
//   </li>
// );

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
      <MyButton></MyButton>
    </>
  );
}
