const pages = [
   {title: "posts", link:"/posts", page: "postview" },
   {title: "Liked", link:"/liked", page:"liked"}  ,   
];

export default pages;


export const range = (start, end, step = 1) => {
  let output = [];
  if (typeof end === 'undefined') {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};





