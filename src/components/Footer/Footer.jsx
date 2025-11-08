 

 function Footer(){
    return (
        <>
        <footer className="bg-white/70 backdrop-blur-sm text-gray-400 dark:text-gray-400 py-4 mt-8 border-t border-gray-700/50 dark:border-gray-500/40">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Journee. All rights reserved.
            </p>
          </div>
        </footer>
        </>
    );
 }

 export default Footer;