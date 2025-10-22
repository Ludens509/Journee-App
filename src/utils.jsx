
// Journee_frontend/src/utils.jsx
//this constants contain the pages data for the layout navigation menu
const pages = [
   {title: "posts", link:"/posts", page: "postview" },
   {title: "Liked", link:"/liked", page:"liked"}  ,    
];

export default pages;



// Utility: strip HTML tags to plain text
export function stripHtml(html = '') {
  if (typeof document === 'undefined') {
    // fallback for non-browser environments
    return html.replace(/<[^>]*>/g, '');
  }
  const tmp = document.createElement('div');
  tmp.innerHTML = html || '';
  return tmp.textContent || tmp.innerText || '';
}





